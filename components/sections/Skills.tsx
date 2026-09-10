import React from "react";
import { skills } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Brain, Database, Palette, Server, Wrench, Zap, LucideIcon } from "lucide-react";

const cardColors: Record<string, string> = {
  pink: "bg-indigo-50/70 dark:bg-[#1E293B]/60 border-indigo-100 dark:border-indigo-500/20",
  purple: "bg-slate-50 dark:bg-[#1E293B]/60 border-slate-200 dark:border-slate-700/50",
  blue: "bg-sky-50/70 dark:bg-[#1E293B]/60 border-sky-100 dark:border-sky-500/20",
  mint: "bg-emerald-50/60 dark:bg-[#1E293B]/60 border-emerald-100 dark:border-emerald-500/20",
  yellow: "bg-amber-50/60 dark:bg-[#1E293B]/60 border-amber-100 dark:border-amber-500/20",
};

const pillColors: Record<string, string> = {
  pink: "bg-white dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/60 shadow-sm",
  purple: "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 shadow-sm",
  blue: "bg-white dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-200/80 dark:border-sky-800/60 shadow-sm",
  mint: "bg-white dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60 shadow-sm",
  yellow: "bg-white dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/60 shadow-sm",
};

const iconMap: Record<string, LucideIcon> = { Palette, Server, Database, Wrench, Brain };

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 mesh-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="POWER-UPS"
          icon={Zap}
          title="My Tech Arsenal"
          subtitle="The tools and technologies I use to build fast, scalable, and beautiful products."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <div
                key={skill.title}
                className={`p-6 rounded-3xl border ${cardColors[skill.color]} shadow-arcade-card hover:shadow-arcade-card-hover hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-xl shadow-sm border border-slate-100 dark:border-white/10">
                    {skill.emoji ? <span>{skill.emoji}</span> : (Icon && <Icon size={22} className="text-arcade-purple dark:text-indigo-400" />)}
                  </div>
                  <h3 className="font-fredoka text-xl font-bold text-navy dark:text-[#E8E8F0]">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${pillColors[skill.color]} transition-transform hover:scale-105`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
