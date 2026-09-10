"use client";
import { useEffect, useCallback } from "react";
import confetti from "canvas-confetti";

const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];

export function useKonamiCode() {
  const fire = useCallback(() => {
    const end = Date.now() + 1500;
    const colors = ["#FF6B9D", "#C06CFF", "#FFD93D", "#6BC5FF", "#4ADEDE"];
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, []);

  useEffect(() => {
    let pos = 0;
    function handler(e: KeyboardEvent) {
      if (e.key.toLowerCase() === KONAMI[pos].toLowerCase()) {
        pos++;
        if (pos === KONAMI.length) {
          fire();
          pos = 0;
        }
      } else {
        pos = 0;
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [fire]);

  return fire;
}
