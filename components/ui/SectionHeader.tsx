import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge?: string;
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ badge, icon: Icon, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-10 md:mb-14 px-2", className)}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 mb-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-arcade-pink/10 to-arcade-purple/10 dark:from-arcade-pink/20 dark:to-arcade-purple/20 border border-arcade-purple/20 dark:border-arcade-purple/40 text-arcade-purple dark:text-pink-300 text-sm font-semibold tracking-wide">
          {Icon && <Icon className="w-4 h-4" />}
          {badge}
        </span>
      )}
      <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-[#E8E8F0] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted dark:text-[#8B8BA7] text-base md:text-lg max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
