import React from "react";

/** Original sky, water and glass. Decorative only. */
export function AeroScene() {
  return (
    <svg
      className="aero-scene"
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aeroSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6eb6ff" />
          <stop offset=".55" stopColor="#d7f3ff" />
          <stop offset="1" stopColor="#e7fff2" />
        </linearGradient>
        <radialGradient id="aeroSun" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fff6c2" />
          <stop offset=".45" stopColor="#ffe08a" />
          <stop offset="1" stopColor="#ffe08a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="aeroGlass" cx="35%" cy="30%" r="70%">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".95" />
          <stop offset=".4" stopColor="#b9ecff" stopOpacity=".45" />
          <stop offset="1" stopColor="#ffffff" stopOpacity=".12" />
        </radialGradient>
        <linearGradient id="aeroHill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8ee07a" />
          <stop offset="1" stopColor="#3cb86a" />
        </linearGradient>
      </defs>
      <rect width="1200" height="640" fill="url(#aeroSky)" />
      <circle cx="980" cy="90" r="110" fill="url(#aeroSun)" />
      <g fill="#fff">
        <ellipse cx="180" cy="110" rx="78" ry="28" opacity=".92" />
        <ellipse cx="230" cy="100" rx="54" ry="22" opacity=".85" />
        <ellipse cx="520" cy="78" rx="90" ry="26" opacity=".8" />
        <ellipse cx="590" cy="70" rx="48" ry="18" opacity=".75" />
      </g>
      <ellipse cx="620" cy="560" rx="760" ry="150" fill="url(#aeroHill)" />
      <ellipse cx="430" cy="500" rx="280" ry="70" fill="#b8f0c4" opacity=".85" />
      <ellipse cx="640" cy="470" rx="340" ry="28" fill="#c9f6ff" opacity=".7" />
      <ellipse cx="640" cy="478" rx="220" ry="10" fill="#ffffff" opacity=".45" />
      <g className="glass-orb">
        <circle cx="860" cy="250" r="54" fill="url(#aeroGlass)" stroke="#fff" strokeWidth="2" />
        <ellipse cx="842" cy="232" rx="16" ry="8" fill="#fff" opacity=".8" />
      </g>
      <g className="glass-orb late">
        <circle cx="280" cy="280" r="28" fill="url(#aeroGlass)" stroke="#fff" strokeWidth="1.5" />
        <circle cx="1020" cy="320" r="16" fill="url(#aeroGlass)" stroke="#fff" />
      </g>
    </svg>
  );
}
