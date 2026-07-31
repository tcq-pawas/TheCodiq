'use client';

import React from 'react';

const MotherboardPattern: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter for subtle effect */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main horizontal circuit lines from left */}
        <g opacity="0.012" filter="url(#glow)">
          {/* Blue primary line */}
          <path
            d="M 0 200 L 400 200 L 450 150 L 600 150 L 650 200 L 900 200 L 950 250 L 1200 250 L 1250 200 L 1600 200"
            stroke="#2563EB"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="1600" cy="200" r="3" fill="#2563EB" opacity="0.8" />
          
          {/* Secondary blue branch */}
          <path
            d="M 600 150 L 600 100 L 700 100 L 750 50 L 900 50"
            stroke="#2563EB"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="900" cy="50" r="2.5" fill="#2563EB" opacity="0.7" />

          {/* Yellow/amber circuit */}
          <path
            d="M 0 400 L 300 400 L 350 350 L 500 350 L 550 400 L 800 400 L 850 450 L 1100 450 L 1150 400 L 1500 400"
            stroke="#FBBF24"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="1500" cy="400" r="3" fill="#FBBF24" opacity="0.8" />

          {/* Yellow branch downward */}
          <path
            d="M 800 400 L 800 500 L 900 500 L 950 550 L 1100 550"
            stroke="#FBBF24"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="1100" cy="550" r="2.5" fill="#FBBF24" opacity="0.7" />

          {/* Green circuit */}
          <path
            d="M 0 600 L 250 600 L 300 650 L 450 650 L 500 600 L 750 600 L 800 550 L 1050 550 L 1100 600 L 1400 600"
            stroke="#22C55E"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="1400" cy="600" r="3" fill="#22C55E" opacity="0.8" />

          {/* Green branch upward */}
          <path
            d="M 500 600 L 500 500 L 600 500 L 650 450 L 800 450"
            stroke="#22C55E"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="800" cy="450" r="2.5" fill="#22C55E" opacity="0.7" />

          {/* Additional blue circuit */}
          <path
            d="M 0 800 L 350 800 L 400 750 L 550 750 L 600 800 L 850 800 L 900 850 L 1150 850 L 1200 800 L 1550 800"
            stroke="#2563EB"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="1550" cy="800" r="3" fill="#2563EB" opacity="0.8" />

          {/* Top edge circuits */}
          <path
            d="M 200 0 L 200 100 L 250 150 L 400 150 L 450 100 L 600 100 L 650 50 L 800 50"
            stroke="#FBBF24"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="800" cy="50" r="2.5" fill="#FBBF24" opacity="0.6" />

          <path
            d="M 1000 0 L 1000 80 L 1050 130 L 1200 130 L 1250 80 L 1400 80"
            stroke="#22C55E"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="1400" cy="80" r="2.5" fill="#22C55E" opacity="0.6" />

          {/* Bottom edge circuits */}
          <path
            d="M 300 1080 L 300 980 L 350 930 L 500 930 L 550 980 L 700 980 L 750 930 L 900 930"
            stroke="#2563EB"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="900" cy="930" r="2.5" fill="#2563EB" opacity="0.6" />

          <path
            d="M 1100 1080 L 1100 1000 L 1150 950 L 1300 950 L 1350 1000 L 1500 1000"
            stroke="#FBBF24"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="1500" cy="1000" r="2.5" fill="#FBBF24" opacity="0.6" />

          {/* Complex branching circuit */}
          <path
            d="M 0 300 L 200 300 L 250 250 L 400 250 L 450 300 L 550 300 L 600 350 L 700 350 L 750 300 L 950 300 L 1000 350 L 1150 350"
            stroke="#2563EB"
            strokeWidth="1.2"
            fill="none"
          />
          <circle cx="1150" cy="350" r="2.5" fill="#2563EB" opacity="0.7" />

          {/* Small connector dots along paths */}
          <circle cx="400" cy="200" r="2" fill="#2563EB" opacity="0.5" />
          <circle cx="600" cy="150" r="2" fill="#2563EB" opacity="0.5" />
          <circle cx="900" cy="200" r="2" fill="#2563EB" opacity="0.5" />
          <circle cx="350" cy="400" r="2" fill="#FBBF24" opacity="0.5" />
          <circle cx="550" cy="400" r="2" fill="#FBBF24" opacity="0.5" />
          <circle cx="850" cy="450" r="2" fill="#FBBF24" opacity="0.5" />
          <circle cx="300" cy="600" r="2" fill="#22C55E" opacity="0.5" />
          <circle cx="500" cy="600" r="2" fill="#22C55E" opacity="0.5" />
          <circle cx="800" cy="550" r="2" fill="#22C55E" opacity="0.5" />
          <circle cx="400" cy="750" r="2" fill="#2563EB" opacity="0.5" />
          <circle cx="600" cy="800" r="2" fill="#2563EB" opacity="0.5" />
          <circle cx="900" cy="850" r="2" fill="#2563EB" opacity="0.5" />
        </g>

        {/* Second layer with even more subtle circuits */}
        <g opacity="0.008">
          {/* Purple/Cyan accent circuits */}
          <path
            d="M 0 500 L 150 500 L 200 550 L 350 550 L 400 500 L 650 500 L 700 450 L 850 450"
            stroke="#2563EB"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="850" cy="450" r="2" fill="#2563EB" opacity="0.5" />

          <path
            d="M 0 700 L 180 700 L 230 750 L 380 750 L 430 700 L 680 700 L 730 750 L 880 750"
            stroke="#22C55E"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="880" cy="750" r="2" fill="#22C55E" opacity="0.5" />

          {/* Vertical connections */}
          <path
            d="M 1200 0 L 1200 150 L 1250 200 L 1400 200 L 1450 150 L 1600 150"
            stroke="#FBBF24"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="1600" cy="150" r="2" fill="#FBBF24" opacity="0.5" />

          <path
            d="M 1300 1080 L 1300 930 L 1350 880 L 1500 880 L 1550 930 L 1700 930"
            stroke="#2563EB"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="1700" cy="930" r="2" fill="#2563EB" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
};

export default MotherboardPattern;
