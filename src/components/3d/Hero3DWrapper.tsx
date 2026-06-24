"use client";

import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#050505]" />,
});

export default Hero3D;
