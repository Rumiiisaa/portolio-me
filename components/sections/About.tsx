"use client";
import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Target, Rocket, Bug, Code } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-[#0F0F1A] relative transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="PLAYER STATS"
          icon={Target}
          title="A little bit about me"
          subtitle="Building with curiosity, shipping with purpose, and engineered for high reliability."
        />

        {/* Profile Image Showcase */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative group">
            {/* Soft avatar backglow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-slate-300 via-slate-400 to-sky-300 opacity-50 blur-md group-hover:opacity-70 transition duration-500" />
            
            {/* Image Container */}
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-3xl p-1 bg-white dark:bg-[#1E293B] shadow-arcade-card overflow-hidden">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-100 dark:bg-[#0F172A] relative">
                <Image
                  src="/profile.svg"
                  alt="Akari Kanzoo Triputra"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Floating gamer status badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-navy dark:text-slate-200">Player 1</span>
            </div>
          </div>
        </div>

        {/* Bio Card */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-indigo-500/10 dark:bg-indigo-400/10 -z-0 rotate-12" />
          <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1E293B]/70 border border-slate-200/80 dark:border-slate-700/60 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-2xl text-white shadow-sm">
                🕹️
              </div>
              <div>
                <h3 className="font-fredoka text-2xl font-bold text-navy dark:text-[#E8E8F0]">The Developer Behind The Code</h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">Leveling up every day ⚡</p>
              </div>
            </div>
            <p className="text-muted dark:text-[#8B8BA7] leading-relaxed mb-4">
              I&apos;m Akari Kanzoo Triputra, a 5th-semester Informatics Engineering (D4 Teknik Informatika) student at <strong>Politeknik Elektronika Negeri Surabaya (PENS)</strong>. I love architecting robust backend systems, building snappy web applications, and experimenting with AI-driven pipelines.
            </p>
            <p className="text-muted dark:text-[#8B8BA7] leading-relaxed">
              From high-concurrency game systems and financial risk simulation to campus LMS portals and OCR invoice parsers, I focus on turning complex technical logic into reliable, production-ready software.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <Badge color="pink">Full Stack Engineering</Badge>
              <Badge color="purple">Backend Architecture</Badge>
              <Badge color="yellow">Open for Remote / Hourly</Badge>
            </div>

            {/* Achievements */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
              <p className="text-xs text-muted dark:text-[#8B8BA7] uppercase tracking-wider font-bold mb-4">Achievements Unlocked</p>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="text-center p-3 rounded-2xl bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-100 dark:border-yellow-900/40">
                  <div className="w-8 h-8 mx-auto mb-1 rounded-xl bg-yellow-100 dark:bg-yellow-900/50 text-amber-700 dark:text-amber-300 flex items-center justify-center">
                    <Rocket size={16} />
                  </div>
                  <div className="text-xs font-bold text-yellow-900 dark:text-yellow-200">First Deploy</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-pink-50 dark:bg-pink-950/30 border border-pink-100 dark:border-pink-900/40">
                  <div className="w-8 h-8 mx-auto mb-1 rounded-xl bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 flex items-center justify-center">
                    <Bug size={16} />
                  </div>
                  <div className="text-xs font-bold text-pink-900 dark:text-pink-200">Bug Slayer</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40">
                  <div className="w-8 h-8 mx-auto mb-1 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 flex items-center justify-center">
                    <Code size={16} />
                  </div>
                  <div className="text-xs font-bold text-purple-900 dark:text-purple-200">Code Master</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
