"use client";

import { useEffect, type RefObject } from "react";

type ParallaxItem = { el: HTMLElement; depth: number; centered: boolean };

/**
 * Smooth mouse parallax.
 * - Frame-rate independent exponential easing
 * - Cached DOM nodes
 * - rAF only while settling (idle = zero cost)
 */
export function useParallaxPointer(
  targetRef: RefObject<HTMLElement | null>,
  enabled = true
) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    const root = targetRef.current;
    if (!root) return;

    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = reduceMq.matches;

    // Higher = snappier, lower = silkier. ~8 feels premium & responsive.
    const SMOOTHING = 8.5;
    const SETTLE = 0.0008;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let lastTime = 0;
    let raf: number | null = null;
    let running = false;

    let items: ParallaxItem[] = [];
    let cacheAt = 0;

    const rebuildCache = () => {
      items = [];
      root.querySelectorAll<HTMLElement>("[data-parallax-layer]").forEach((el) => {
        items.push({
          el,
          depth: Number(el.dataset.parallaxLayer) || 24,
          centered: false,
        });
      });
      root.querySelectorAll<HTMLElement>("[data-parallax-node]").forEach((el) => {
        items.push({
          el,
          depth: Number(el.dataset.parallaxNode) || 40,
          centered: true,
        });
      });
      root.querySelectorAll("[data-parallax-extra]").forEach((node) => {
        const el = node as HTMLElement;
        items.push({
          el,
          depth: Number(el.getAttribute("data-parallax-extra")) || 28,
          centered: false,
        });
      });
      cacheAt = performance.now();
    };

    rebuildCache();

    const apply = (x: number, y: number) => {
      for (let i = 0; i < items.length; i++) {
        const { el, depth, centered } = items[i];
        const dx = x * depth;
        const dy = y * depth * 0.85;
        // 2dp = sub-pixel smoothness without noisy thrashing
        if (centered) {
          el.style.transform = `translate3d(calc(-50% + ${dx.toFixed(2)}px), calc(-50% + ${dy.toFixed(2)}px), 0)`;
        } else {
          el.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`;
        }
      }
    };

    const stop = () => {
      if (raf != null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
      running = false;
      lastTime = 0;
      for (let i = 0; i < items.length; i++) {
        items[i].el.style.willChange = "auto";
      }
    };

    const tick = (now: number) => {
      if (!lastTime) lastTime = now;
      // Clamp dt so tab-switches don't jump
      const dt = Math.min(0.045, (now - lastTime) / 1000);
      lastTime = now;

      // Frame-rate independent exponential ease (buttery on 60 & 120Hz)
      const alpha = 1 - Math.exp(-SMOOTHING * dt);
      cx += (tx - cx) * alpha;
      cy += (ty - cy) * alpha;

      apply(cx, cy);

      if (Math.abs(tx - cx) < SETTLE && Math.abs(ty - cy) < SETTLE) {
        cx = tx;
        cy = ty;
        apply(cx, cy);
        stop();
        return;
      }

      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (reduceMotion) return;
      if (performance.now() - cacheAt > 2000 || items.length === 0) {
        rebuildCache();
      }
      if (!running) {
        for (let i = 0; i < items.length; i++) {
          items[i].el.style.willChange = "transform";
        }
        running = true;
        lastTime = 0;
        raf = requestAnimationFrame(tick);
      }
    };

    const onMq = () => {
      reduceMotion = reduceMq.matches;
      if (reduceMotion) {
        tx = 0;
        ty = 0;
        cx = 0;
        cy = 0;
        apply(0, 0);
        stop();
      }
    };
    reduceMq.addEventListener("change", onMq);

    const onMove = (e: MouseEvent) => {
      if (reduceMotion) return;
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      tx = Math.max(-1, Math.min(1, (e.clientX / w) * 2 - 1));
      ty = Math.max(-1, Math.min(1, (e.clientY / h) * 2 - 1));
      start();
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      start();
    };

    let moTimer: ReturnType<typeof setTimeout> | null = null;
    const mo = new MutationObserver(() => {
      if (moTimer) clearTimeout(moTimer);
      moTimer = setTimeout(() => {
        rebuildCache();
        moTimer = null;
      }, 50);
    });
    mo.observe(root, { childList: true, subtree: false });
    root.querySelectorAll(".tech-parallax-layer").forEach((layer) => {
      mo.observe(layer, { childList: true, subtree: false });
    });

    apply(0, 0);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      reduceMq.removeEventListener("change", onMq);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      mo.disconnect();
      if (moTimer) clearTimeout(moTimer);
      stop();
    };
  }, [enabled, targetRef]);
}
