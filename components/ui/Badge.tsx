import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  color?: "pink" | "purple" | "yellow" | "blue" | "mint" | "navy" | "default";
  className?: string;
}

const colorMap = {
  pink: "bg-pink-100 text-pink-700 border-pink-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200",
  yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  mint: "bg-teal-100 text-teal-700 border-teal-200",
  navy: "bg-slate-100 text-slate-800 border-slate-200",
  default: "bg-gray-100 text-gray-700 border-gray-200",
};

export function Badge({ children, color = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border tracking-wide transition-transform hover:scale-105 select-none",
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  );
}
