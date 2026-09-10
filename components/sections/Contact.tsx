"use client";
import React, { useState } from "react";
import { profile } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Send, CheckCircle2, MessageSquare, Mail, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF6B9D", "#C06CFF", "#FFD93D", "#6BC5FF"],
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-[#0F0F1A] relative transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="LET'S CONNECT"
          icon={MessageSquare}
          title="Got a Project in Mind?"
          subtitle="Whether you have an idea, a question, or just want to say hi — my inbox is always open!"
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Info Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-[#1A1A2E] dark:via-[#161626] dark:to-[#1A1A2E] border border-pink-100 dark:border-white/10 shadow-arcade-card">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-arcade-pink to-arcade-purple text-white flex items-center justify-center mb-6 shadow-arcade-pink">
              <Send size={24} />
            </div>
            <h3 className="font-fredoka text-2xl font-bold text-navy dark:text-[#E8E8F0] mb-2">
              Let&apos;s build something epic together
            </h3>
            <p className="text-muted dark:text-[#8B8BA7] text-sm leading-relaxed mb-8">
              I&apos;m currently open to new opportunities, freelance projects, and collaborations. Feel free to reach out directly through the form or my channels below.
            </p>

            <div className="space-y-4">
              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 hover:border-arcade-purple dark:hover:border-pink-400 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-900 dark:bg-white/15 text-white flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted dark:text-[#8B8BA7] font-semibold">GitHub</p>
                  <p className="text-sm font-bold text-navy dark:text-[#E8E8F0]">@Rumiiisaa</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 hover:border-arcade-purple dark:hover:border-pink-400 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted dark:text-[#8B8BA7] font-semibold">LinkedIn</p>
                  <p className="text-sm font-bold text-navy dark:text-[#E8E8F0] truncate max-w-[200px] sm:max-w-xs">Akari Kanzoo Triputra</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 hover:border-arcade-purple dark:hover:border-pink-400 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-arcade-pink to-arcade-purple text-white flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted dark:text-[#8B8BA7] font-semibold">Email</p>
                  <p className="text-sm font-bold text-navy dark:text-[#E8E8F0]">{profile.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#1A1A2E] border border-gray-100 dark:border-white/10 shadow-arcade-card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-300 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-fredoka text-2xl font-bold text-navy dark:text-[#E8E8F0] mb-2">Message Sent</h4>
                <p className="text-muted dark:text-[#8B8BA7] text-sm max-w-xs mx-auto mb-6">
                  Thanks for reaching out! I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-navy dark:text-[#E8E8F0] text-xs font-bold hover:bg-gray-200 dark:hover:bg-white/15 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-navy dark:text-[#E8E8F0] mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Satoshi Nakamoto"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-white/10 text-sm font-medium text-navy dark:text-[#E8E8F0] placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-arcade-purple dark:focus:border-pink-400 transition-all bg-gray-50/50 dark:bg-white/5 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy dark:text-[#E8E8F0] mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. satoshi@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-white/10 text-sm font-medium text-navy dark:text-[#E8E8F0] placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-arcade-purple dark:focus:border-pink-400 transition-all bg-gray-50/50 dark:bg-white/5 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy dark:text-[#E8E8F0] mb-1.5 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-white/10 text-sm font-medium text-navy dark:text-[#E8E8F0] placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-arcade-purple dark:focus:border-pink-400 transition-all bg-gray-50/50 dark:bg-white/5 resize-none outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-arcade-pink to-arcade-purple text-white font-bold text-sm shadow-arcade-pink hover:shadow-arcade-purple hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Sparkles size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
