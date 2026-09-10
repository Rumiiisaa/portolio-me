import React from "react";
import { milestones } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Compass, GraduationCap, Code2, Sparkles, Target, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Code2,
  Sparkles,
  Target,
};

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 mesh-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="QUEST LOG"
          icon={Compass}
          title="The Adventure So Far"
          subtitle="Key milestones and checkpoints along the developer journey."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-400 via-indigo-400 to-sky-400 -translate-x-1/2 rounded-full opacity-70" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = iconMap[milestone.icon] || Sparkles;

              return (
                <div
                  key={milestone.title}
                  className={`relative flex items-center gap-6 md:gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-white dark:bg-[#1A1A2E] border-2 border-slate-400 dark:border-slate-500 text-slate-600 dark:text-slate-300 shadow-md flex items-center justify-center z-10 transition-transform hover:scale-110">
                    <Icon size={18} />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-14 sm:ml-16 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#1E293B]/70 border border-slate-200/80 dark:border-slate-700/60 shadow-arcade-card hover:shadow-arcade-card-hover hover:-translate-y-1 transition-all duration-300 inline-block w-full">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40 mb-2 inline-block">
                        Level {milestone.year}
                      </span>
                      <h3 className="font-fredoka text-xl font-bold text-navy dark:text-[#E8E8F0] mt-1">
                        <span className="mr-2">{milestone.emoji}</span>
                        {milestone.title}
                      </h3>
                      <p className="text-muted dark:text-[#8B8BA7] text-sm mt-2 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
