"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

export function RocketScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const currentDirection = useRef<"up" | "down">("down");
  const lastTurnRocketY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (totalHeight <= 0) return;

    const progress = Math.min(Math.max(currentY / totalHeight, 0), 1);
    setScrollProgress(progress);

    if (Math.abs(currentY - lastScrollY.current) > 2) {
      const newDir: "up" | "down" = currentY > lastScrollY.current ? "down" : "up";
      if (newDir !== currentDirection.current) {
        currentDirection.current = newDir;
        lastTurnRocketY.current = progress * 160;
        setScrollDirection(newDir);
      }
    }
    lastScrollY.current = currentY;

    setIsVisible(true);
    setIsScrolling(true);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1800);
  }, []);

  useEffect(() => {
    // Reset scroll to top on every refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [handleScroll]);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const ratio = Math.min(Math.max(clickY / rect.height, 0), 1);
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    window.scrollTo({
      top: ratio * totalHeight,
      behavior: "smooth",
    });
  };

  const TRACK_HEIGHT = 160; // Compact track length in px
  const rocketY = scrollProgress * TRACK_HEIGHT;
  const isUp = scrollDirection === "up";
  const lastTurnY = lastTurnRocketY.current;

  // Smoke trail starts from rocket's last turn position, max length 58px
  const nozzleY = isUp ? Math.min(rocketY + 10, TRACK_HEIGHT) : Math.max(rocketY - 2, 0);
  const distSinceTurn = Math.max(isUp ? lastTurnY - rocketY : rocketY - lastTurnY, 10);
  const tailLength = Math.min(distSinceTurn, 58);
  const tailY = isUp
    ? Math.min(nozzleY + tailLength, TRACK_HEIGHT)
    : Math.max(nozzleY - tailLength, 0);

  const trailPath = isUp
    ? `M 11,${nozzleY} L 21,${nozzleY} L 17.5,${tailY} L 14.5,${tailY} Z`
    : `M 14.5,${tailY} L 17.5,${tailY} L 21,${nozzleY} L 11,${nozzleY} Z`;

  return (
    <div
      aria-label="Scroll Indicator"
      className="hidden md:flex fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-[9999] flex-col items-center select-none"
    >
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        style={{ height: `${TRACK_HEIGHT}px` }}
        className="relative w-8 flex justify-center cursor-pointer group select-none"
      >
        {/* Permanent thin rail line */}
        <div className="absolute top-0 bottom-0 w-[2px] rounded-full bg-slate-300/50 dark:bg-slate-700/50" />

        {/* Permanent thin progress fill */}
        <div
          className="absolute top-0 w-[2px] rounded-full bg-slate-400 dark:bg-slate-500 transition-all duration-75"
          style={{ height: `${rocketY}px` }}
        />

        {/* Thick tapered smoke trail (Fades out gradually when stopped, just like the reference image) */}
        <svg
          className={`absolute top-0 left-0 w-8 h-full pointer-events-none transition-opacity duration-1000 ease-out ${
            isScrolling ? "opacity-100" : "opacity-0"
          }`}
          viewBox={`0 0 32 ${TRACK_HEIGHT}`}
          fill="none"
        >
          <defs>
            <linearGradient
              id="smokeGrad"
              x1="0"
              y1={isUp ? nozzleY : tailY}
              x2="0"
              y2={isUp ? tailY : nozzleY}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={isUp ? "#334155" : "#94A3B8"} stopOpacity={isUp ? 0.95 : 0.25} />
              <stop offset="50%" stopColor="#475569" stopOpacity="0.75" />
              <stop offset="100%" stopColor={isUp ? "#94A3B8" : "#334155"} stopOpacity={isUp ? 0.25 : 0.95} />
            </linearGradient>
          </defs>
          <path
            d={trailPath}
            fill="url(#smokeGrad)"
            stroke="#1E293B"
            strokeWidth="0.75"
            strokeOpacity="0.4"
            strokeLinejoin="round"
          />
        </svg>

        {/* Rocket Indicator */}
        <div
          style={{
            transform: `translate(-50%, ${rocketY - 12}px)`,
          }}
          className="absolute top-0 left-1/2 will-change-transform pointer-events-none"
        >
          {/* Flame at rocket nozzle (Always present, boosts when scrolling) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-300 pointer-events-none ${
              scrollDirection === "down" ? "-top-3.5 rotate-180" : "-bottom-3.5 rotate-0"
            } ${isScrolling ? "scale-110 opacity-100" : "scale-75 opacity-80"}`}
          >
            {/* Outer flame (Red/Orange teardrop) */}
            <div className="relative w-3.5 h-4 flex items-center justify-center">
              <div className="w-3.5 h-4 rounded-[50%_50%_35%_35%] bg-gradient-to-b from-orange-600 via-amber-500 to-yellow-400 drop-shadow-[0_0_6px_rgba(249,115,22,0.9)] animate-pulse" />
              {/* Inner yellow flame core */}
              <div className="absolute top-1 w-1.5 h-2 rounded-[50%_50%_30%_30%] bg-yellow-200 blur-[0.2px]" />
            </div>
          </div>

          {/* Rocket Emoji */}
          <div
            className={`relative z-10 text-xl leading-none inline-block transition-transform duration-300 ease-out ${
              scrollDirection === "down" ? "rotate-[135deg]" : "-rotate-45"
            } ${isScrolling ? "scale-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" : "scale-100 drop-shadow-[0_0_3px_rgba(203,213,225,0.4)]"}`}
          >
            🚀
          </div>
        </div>

        {/* Percentage Tooltip on hover */}
        <div className="absolute right-7 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-md bg-navy/90 dark:bg-slate-900/90 text-white text-[10px] font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md border border-white/10">
          {Math.round(scrollProgress * 100)}%
        </div>
      </div>
    </div>
  );
}
