"use client";

import OrbitPath from "./OrbitPath";
import OrbitIcon from "./OrbitIcon";
import { ORBITS } from "./orbitData";

export default function OrbitSystem() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      {ORBITS.map((orbit) => (
        <div
          key={orbit.id}
          className="absolute flex items-center justify-center"
          style={{
            width: orbit.width,
            height: orbit.height,
            transform: `rotate(${orbit.rotate}deg)`,
          }}
        >
          {/* Orbit Line */}
          <OrbitPath
            width={orbit.width}
            height={orbit.height}
            duration={orbit.duration}
            reverse={orbit.reverse}
          />

          {/* Orbit Icons */}
          {orbit.items.map((item, index) => (
            <OrbitIcon
              key={index}
              Icon={item.icon}
              label={item.label}
              progress={item.progress}
              width={orbit.width}
              height={orbit.height}
              duration={orbit.duration}
              reverse={orbit.reverse}
            />
          ))}
        </div>
      ))}

    </div>
  );
}