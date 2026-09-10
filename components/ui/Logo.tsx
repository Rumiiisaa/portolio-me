import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AK Star Logo"
    >
      <defs>
        {/* Neon Arcade Gradient: Pink -> Purple -> Mint */}
        <linearGradient id="ak-neon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B9D" />
          <stop offset="50%" stopColor="#9B5DE5" />
          <stop offset="100%" stopColor="#00F5D4" />
        </linearGradient>

        <linearGradient id="ak-star-core" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE600" />
          <stop offset="100%" stopColor="#FF6B9D" />
        </linearGradient>

        {/* Soft Glow Filter */}
        <filter id="ak-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#ak-glow)">
        {/* LEFT STAR WING + A LEFT LEG */}
        {/* Left Leg of A down to base */}
        <path
          d="M16 84L34 14"
          stroke="url(#ak-neon-grad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Left Wing of Star branching out */}
        <path
          d="M26 42L7 36"
          stroke="url(#ak-neon-grad)"
          strokeWidth="7.5"
          strokeLinecap="round"
        />

        {/* Star Top Point / Apex of A */}
        <path
          d="M34 14L46 22"
          stroke="url(#ak-neon-grad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Crossbar of A - unites the star into the letter A */}
        <path
          d="M23 58H46"
          stroke="url(#ak-neon-grad)"
          strokeWidth="7.5"
          strokeLinecap="round"
        />

        {/* STEM OF K (Shared right boundary of A & Backbone of K) */}
        <path
          d="M46 22V84"
          stroke="url(#ak-neon-grad)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* K UPPER ARM (Also the Top-Right Star Wing) */}
        <path
          d="M46 50L84 16"
          stroke="url(#ak-neon-grad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* K LOWER LEG (Also the Bottom-Right Star Leg) */}
        <path
          d="M46 50L84 84"
          stroke="url(#ak-neon-grad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* STAR CORE ACCENT: 4-pointed sparkle at Apex representing the star soul of A */}
        <path
          d="M34 6C35 11 38 14 43 14C38 15 35 18 34 23C33 18 30 15 25 14C30 14 33 11 34 6Z"
          fill="url(#ak-star-core)"
        />

        {/* Small sparkle dots at star extremities */}
        <circle cx="7" cy="36" r="2.5" fill="#FF6B9D" />
        <circle cx="84" cy="16" r="2.5" fill="#00F5D4" />
        <circle cx="84" cy="84" r="2.5" fill="#00F5D4" />
      </g>
    </svg>
  );
}
