"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import {
  ExternalLink,
  Trophy,
  Lock,
  CalendarCheck,
  BarChart3,
  Mail,
  FileText,
  CheckCircle,
  Layers,
  Download,
  TrendingUp,
  Database,
  ShieldAlert,
  Zap,
  BookOpen,
  UploadCloud,
  Users,
  Award,
  Dice5,
  Calculator,
  Shield,
  Boxes,
  Code2,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  CheckCircle2,
  Maximize2,
  Smartphone,
  Monitor,
  LucideIcon,
} from "lucide-react";

const iconLookup: Record<string, LucideIcon> = {
  Lock,
  CalendarCheck,
  BarChart3,
  Mail,
  FileText,
  CheckCircle,
  Layers,
  Download,
  TrendingUp,
  Database,
  ShieldAlert,
  Zap,
  BookOpen,
  UploadCloud,
  Users,
  Award,
  Dice5,
  Calculator,
  Shield,
  Boxes,
  Calendar,
  Sparkles,
};

const projectBadgeIcons: Record<string, LucideIcon> = {
  bookit: Calendar,
  extract: FileText,
  "paper-trader": TrendingUp,
  elearning: BookOpen,
  "game-systems": Zap,
};

const mockupColors: Record<string, string> = {
  bookit: "from-purple-100 via-pink-50 to-blue-50 dark:from-purple-950/40 dark:via-[#1A1A2E] dark:to-blue-950/40",
  extract: "from-yellow-100 via-orange-50 to-pink-50 dark:from-yellow-950/40 dark:via-[#1A1A2E] dark:to-pink-950/40",
  "paper-trader": "from-green-100 via-teal-50 to-blue-50 dark:from-green-950/40 dark:via-[#1A1A2E] dark:to-blue-950/40",
  elearning: "from-blue-100 via-indigo-50 to-purple-50 dark:from-blue-950/40 dark:via-[#1A1A2E] dark:to-purple-950/40",
  "game-systems": "from-pink-100 via-purple-50 to-indigo-50 dark:from-pink-950/40 dark:via-[#1A1A2E] dark:to-indigo-950/40",
};

export function Projects() {
  const featured = projects.find((p) => p.featured)! as typeof projects[number] & {
    screenshots?: { url: string; title: string; category: string; description: string }[];
    detailedDescription?: string;
    keyFeatures?: string[];
  };
  const rest = projects.filter((p) => !p.featured);
  const screenshots = featured.screenshots ?? [];
  const [slide, setSlide] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const moveSlide = (direction: number) => {
    setSlide((current) => (current + direction + screenshots.length) % screenshots.length);
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-white dark:bg-[#0F0F1A] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="MAIN QUESTS"
          icon={Trophy}
          title="Featured Projects"
          subtitle="Handcrafted digital experiences built with precision, modern engineering, and clean architecture."
        />

        {/* Featured Project (BookIt) */}
        <div className="gradient-border p-6 pt-14 md:p-8 md:pt-14 relative overflow-hidden mb-12 md:mb-16 bg-white dark:bg-[#1A1A2E]">
          <div className="absolute top-4 right-4 z-30">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-[11px] font-bold shadow-sm whitespace-nowrap">
              <Sparkles size={12} className="text-amber-950" />
              FEATURED QUEST
            </span>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-5 lg:gap-6 items-center">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-arcade-pink to-arcade-purple flex items-center justify-center text-white shadow-arcade-pink shrink-0">
                  {featured.id === "extract" ? <FileText size={20} /> : <Calendar size={20} />}
                </div>
                <div>
                  <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-navy dark:text-[#E8E8F0]">{featured.title}</h3>
                  <p className="text-arcade-purple dark:text-pink-300 font-semibold text-xs md:text-sm">{featured.subtitle}</p>
                </div>
              </div>

              <p className="text-muted dark:text-[#8B8BA7] text-sm leading-relaxed mb-4">{featured.description}</p>

              {/* Highlight Cards with Lucide Icons */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {featured.highlights.map((h) => {
                  const Icon = iconLookup[h.icon] || Sparkles;
                  return (
                    <div
                      key={h.label}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-pink-50/60 dark:bg-white/5 border border-pink-100/80 dark:border-white/10"
                    >
                      <div className="w-6 h-6 rounded-md bg-white dark:bg-white/10 flex items-center justify-center text-arcade-purple dark:text-pink-300 shrink-0">
                        <Icon size={13} />
                      </div>
                      <span className="text-xs font-semibold text-navy dark:text-[#E8E8F0]">{h.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {featured.tags.map((t) => (
                  <Badge key={t} color="navy">{t}</Badge>
                ))}
              </div>

              <div className="relative z-20 flex flex-wrap gap-2.5 mt-6">
                <a
                  href={featured.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-arcade-pink to-arcade-purple text-white font-bold text-xs shadow-arcade-pink hover:shadow-arcade-purple hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Play Demo</span>
                  <ExternalLink size={13} />
                </a>
                <button
                  type="button"
                  onClick={() => setDetailsOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-transparent border-2 border-gray-200 dark:border-white/15 text-navy dark:text-[#E8E8F0] font-bold text-xs hover:border-arcade-purple hover:text-arcade-purple dark:hover:border-pink-400 dark:hover:text-pink-300 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Eye size={13} />
                  <span>View Detail</span>
                </button>
              </div>
            </div>

            {/* Interactive Image Slide Showcase */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="w-full max-w-sm lg:max-w-[410px] rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-white/15 bg-white dark:bg-[#121222] shadow-xl">
                {/* Browser top bar */}
                <div className="bg-gray-100 dark:bg-black/60 px-3.5 py-2.5 flex items-center justify-between border-b border-gray-200 dark:border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono flex items-center gap-1.5">
                    {screenshots[slide]?.category.includes("Mobile") ? (
                      <Smartphone size={12} className="text-arcade-pink" />
                    ) : (
                      <Monitor size={12} className="text-arcade-purple" />
                    )}
                    {screenshots[slide]?.category || "ExTract"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setDetailsOpen(true)}
                    className="text-xs text-navy/70 dark:text-white/70 hover:text-arcade-purple dark:hover:text-pink-300 flex items-center gap-1 font-medium transition-colors"
                    title="Buka Layar Penuh"
                  >
                    <Maximize2 size={13} />
                    <span className="hidden sm:inline text-[11px]">Detail</span>
                  </button>
                </div>

                {/* Slide Image Frame */}
                <div className="relative aspect-[16/10] bg-gray-950 flex items-center justify-center overflow-hidden group">
                  {screenshots.length > 0 && (
                    <div className="relative w-full h-full p-2 flex items-center justify-center">
                      <Image
                        src={screenshots[slide].url}
                        alt={screenshots[slide].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        priority
                      />
                    </div>
                  )}

                  {/* Prev / Next controls */}
                  <button
                    type="button"
                    onClick={() => moveSlide(-1)}
                    aria-label="Slide sebelumnya"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-md opacity-80 group-hover:opacity-100 cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveSlide(1)}
                    aria-label="Slide berikutnya"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-md opacity-80 group-hover:opacity-100 cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* Slide Counter Badge */}
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/70 text-[11px] font-mono font-bold text-white/90 backdrop-blur-md">
                    {slide + 1} / {screenshots.length}
                  </div>
                </div>

                {/* Caption & Indicators */}
                <div className="p-3 bg-white dark:bg-[#161628] border-t border-gray-100 dark:border-white/10">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <p className="text-xs font-bold text-navy dark:text-white truncate">
                      {screenshots[slide]?.title}
                    </p>
                    {/* Dots */}
                    <div className="flex gap-1.5 shrink-0">
                      {screenshots.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSlide(idx)}
                          aria-label={`Ke slide ${idx + 1}`}
                          className={`h-2 rounded-full transition-all ${
                            idx === slide
                              ? "w-5 bg-gradient-to-r from-arcade-pink to-arcade-purple"
                              : "w-2 bg-gray-300 dark:bg-white/20 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-muted dark:text-[#8B8BA7] line-clamp-2">
                    {screenshots[slide]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {rest.map((project) => {
            const ProjectBadge = projectBadgeIcons[project.id] || Sparkles;
            return (
              <div
                key={project.id}
                className="p-6 rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#1A1A2E] shadow-arcade-card hover:shadow-arcade-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-pink-50 dark:bg-white/10 flex items-center justify-center text-arcade-purple dark:text-pink-300">
                        <ProjectBadge size={22} />
                      </div>
                      <div>
                        <h3 className="font-fredoka text-xl font-bold text-navy dark:text-[#E8E8F0]">{project.title}</h3>
                        <p className="text-xs text-arcade-purple dark:text-pink-300 font-semibold">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted dark:text-[#8B8BA7] text-sm leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-gradient-to-r from-arcade-pink to-arcade-purple text-white font-bold text-xs hover:-translate-y-0.5 transition-all"
                  >
                    <span>Demo</span>
                    <ExternalLink size={12} />
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl border-2 border-gray-200 dark:border-white/10 text-navy dark:text-[#E8E8F0] font-bold text-xs hover:border-arcade-purple hover:text-arcade-purple dark:hover:border-pink-400 dark:hover:text-pink-300 hover:-translate-y-0.5 transition-all"
                  >
                    <Code2 size={12} />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ExTract Project Detail Modal */}
      {detailsOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setDetailsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#161628] border-2 border-gray-200 dark:border-white/15 shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-100 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-arcade-pink to-arcade-purple flex items-center justify-center text-white shadow-arcade-pink">
                  <FileText size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-fredoka text-2xl font-bold text-navy dark:text-white">
                      {featured.title}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full bg-arcade-mint/20 text-arcade-mint text-xs font-bold">
                      Live Project
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-arcade-purple dark:text-pink-300">
                    {featured.subtitle}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDetailsOpen(false)}
                className="p-2 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 text-navy dark:text-white transition-colors cursor-pointer"
                aria-label="Tutup Detail"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Slide Gallery */}
            <div className="space-y-3">
              <div className="relative aspect-[16/9] bg-gray-950 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 flex items-center justify-center group">
                {screenshots.length > 0 && (
                  <Image
                    src={screenshots[slide]?.url || ""}
                    alt={screenshots[slide]?.title || ""}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 1024px) 100vw, 850px"
                  />
                )}

                {/* Slide Controls */}
                <button
                  type="button"
                  onClick={() => moveSlide(-1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
                  aria-label="Slide sebelumnya"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={() => moveSlide(1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
                  aria-label="Slide berikutnya"
                >
                  <ChevronRight size={22} />
                </button>

                {/* Badge Category & Index */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 text-xs font-semibold text-white/90 backdrop-blur-md flex items-center gap-1.5">
                  {screenshots[slide]?.category.includes("Mobile") ? (
                    <Smartphone size={14} className="text-arcade-pink" />
                  ) : (
                    <Monitor size={14} className="text-arcade-purple" />
                  )}
                  {screenshots[slide]?.category}
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/75 text-xs font-mono font-bold text-white/90 backdrop-blur-md">
                  {slide + 1} / {screenshots.length}
                </div>
              </div>

              {/* Caption */}
              <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200/70 dark:border-white/10">
                <h4 className="text-sm font-bold text-navy dark:text-white">
                  {screenshots[slide]?.title}
                </h4>
                <p className="text-xs text-muted dark:text-[#8B8BA7] mt-0.5">
                  {screenshots[slide]?.description}
                </p>
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-4 gap-2">
                {screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSlide(idx)}
                    className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-gray-900 ${
                      idx === slide
                        ? "border-arcade-purple ring-2 ring-arcade-purple/40 scale-[1.02]"
                        : "border-gray-200 dark:border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={s.url}
                      alt={s.title}
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-muted dark:text-[#8B8BA7] uppercase tracking-wider">
                Deskripsi & Arsitektur Sistem
              </h4>
              <p className="text-sm text-navy dark:text-[#E8E8F0] leading-relaxed">
                {featured.detailedDescription || featured.description}
              </p>
            </div>

            {/* Key Features */}
            {featured.keyFeatures && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-muted dark:text-[#8B8BA7] uppercase tracking-wider">
                  Fitur Utama & Implementasi
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {featured.keyFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-2xl bg-pink-50/50 dark:bg-white/5 border border-pink-100/70 dark:border-white/10"
                    >
                      <CheckCircle2 size={16} className="text-arcade-mint shrink-0 mt-0.5" />
                      <span className="text-xs text-navy dark:text-[#E8E8F0] font-medium leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-muted dark:text-[#8B8BA7] uppercase tracking-wider">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <Badge key={t} color="navy">{t}</Badge>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100 dark:border-white/10">
              <a
                href={featured.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-arcade-pink to-arcade-purple text-white font-bold text-sm shadow-arcade-pink hover:shadow-arcade-purple hover:-translate-y-0.5 transition-all"
              >
                <span>Buka Live Demo (extract.web.id)</span>
                <ExternalLink size={15} />
              </a>
              <button
                type="button"
                onClick={() => setDetailsOpen(false)}
                className="px-6 py-3 rounded-2xl border-2 border-gray-200 dark:border-white/15 text-navy dark:text-[#E8E8F0] font-bold text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
