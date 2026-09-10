"use client";
import React from "react";
import { profile } from "@/lib/data";
import { ArrowRight, FileText } from "lucide-react";
import { useKonamiCode } from "@/hooks/useKonamiCode";

export function Hero() {
  const triggerConfetti = useKonamiCode();

  return (
    <section
      id="hero"
      className="min-h-screen pt-28 pb-16 md:pt-32 md:pb-20 flex items-center justify-center relative overflow-hidden mesh-bg"
    >
      {/* Playful Floating Arcade Elements */}
      <div className="absolute top-36 left-8 md:left-24 text-4xl select-none animate-float hidden sm:block drop-shadow-sm">
        🎮
      </div>
      <div className="absolute top-48 right-8 md:right-32 text-4xl select-none animate-float-reverse hidden sm:block drop-shadow-sm">
        👾
      </div>
      <div className="absolute bottom-32 left-12 md:left-36 text-3xl select-none animate-float-slow hidden md:block drop-shadow-sm">
        🚀
      </div>
      <div className="absolute bottom-40 right-16 md:right-40 text-3xl select-none animate-float hidden md:block drop-shadow-sm">
        ⚡
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Main Headline */}
        <h1 className="font-fredoka text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-navy dark:text-[#E8E8F0] leading-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="gradient-text select-none">
            {profile.name}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-2xl text-muted dark:text-[#8B8BA7] font-medium max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
          Full Stack Developer & Informatics Student  <strong className="text-navy dark:text-white">Politeknik Elektronika Negeri Surabaya</strong>. Building high-performance web apps, AI pipelines, and game systems
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-arcade-pink to-arcade-purple text-white font-bold text-base shadow-arcade-pink hover:shadow-arcade-purple hover:-translate-y-1 transition-all duration-200"
          >
            <span>Explore Quests</span>
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-[#1A1A2E] border-2 border-gray-200 dark:border-white/10 text-navy dark:text-[#E8E8F0] font-bold text-base hover:border-arcade-purple dark:hover:border-pink-400 hover:text-arcade-purple dark:hover:text-pink-300 hover:-translate-y-1 transition-all duration-200 shadow-sm"
          >
            <FileText size={18} />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Quick Stats Pill */}
        <div className="mt-10 md:mt-14 inline-flex flex-wrap items-center justify-center gap-4 md:gap-10 px-4 sm:px-8 py-4 rounded-3xl bg-white/80 dark:bg-[#1E293B]/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 shadow-arcade-card">
          <div className="flex items-center gap-2.5">
            <span className="text-base">🎓</span>
            <span className="text-sm font-semibold text-navy dark:text-[#E8E8F0]">D4 Informatics PENS</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2.5">
            <span className="text-base">💻</span>
            <span className="text-sm font-semibold text-navy dark:text-[#E8E8F0]">Next.js • Laravel • .NET</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2.5">
            <span className="text-base">🌐</span>
            <span className="text-sm font-semibold text-navy dark:text-[#E8E8F0]">Available Remote / Hourly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
