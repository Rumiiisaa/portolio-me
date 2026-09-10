# 🎮 PRD: Website Portfolio "Arcade Professional - Bright Edition"

##  1. Overview

**Nama Proyek:** Personal Portfolio Website  
**Tema:** Arcade Professional - Bright Edition (Playful & Professional)  
**Versi:** 1.1 (Revised)  
**Tanggal:** 9 September 2026  
**Tipe:** Static Website / Single Page Application  
**Inspirasi Visual:** Sociabuzz, Linear, Vercel, Stripe  

**Latar Belakang:**  
Website portfolio ini dibangun sebagai showcase personal untuk menampilkan proyek-proyek yang telah dikembangkan, dengan fokus utama pada proyek **"BookIt - Service Booking System"**. Tema visual mengambil inspirasi dari estetika arcade yang ceria dan playful seperti Sociabuzz — colorful, fun, tapi tetap profesional.

**Perubahan dari v1.0:**
- Mengurangi penggunaan emoji berlebihan untuk kesan lebih profesional.
- Mengganti emoji di UI dengan ikon SVG/Lucide yang lebih clean.
- Menambahkan fitur dark mode toggle.
- Menyesuaikan tagline dan elemen visual agar lebih subtle.

**Tujuan Utama:**
- Menampilkan proyek BookIt sebagai featured project.
- Mendemonstrasikan kemampuan UI/UX design dan frontend development.
- Meningkatkan personal branding sebagai Full Stack Developer.
- Menyeimbangkan playful personality dengan professional credibility.

---

## 🎯 2. Tujuan & Sasaran

| Tujuan | Sasaran Terukur |
|--------|-----------------|
| Showcase proyek | Menampilkan minimal 1 featured project (BookIt) dengan detail lengkap |
| Personal branding | Website live dan bisa diakses publik dalam 2 minggu |
| User experience | Lighthouse score ≥ 90 (Performance, Accessibility, Best Practices) |
| SEO readiness | Meta tags lengkap, Open Graph, sitemap.xml |
| Responsiveness | Tampil sempurna di desktop, tablet, dan mobile |
| Professional appeal | Tidak lebih dari 3 emoji di seluruh halaman utama |

---

## 👥 3. Target Audience

### Persona 1: **Recruiter / HR**
- Mencari developer dengan skill yang sesuai.
- Butuh melihat portfolio dengan cepat (< 30 detik).
- Menghargai personality tapi tetap mengutamakan profesionalisme.

### Persona 2: **Senior Developer / Tech Lead**
- Menilai kualitas kode, arsitektur, dan tech stack.
- Ingin melihat live demo dan source code.
- Prefer clean design over flashy/overwhelming elements.

### Persona 3: **Potential Client / Freelance**
- Mencari developer untuk proyek.
- Butuh portofolio yang meyakinkan dan mudah dihubungi.

---

## 🎨 4. Konsep Visual - Bright Arcade (Revised)

### 4.1 Palet Warna

**Light Mode:**
- Background: `#FAFBFF` (Soft White)
- Primary: `#FF6B9D` (Bright Pink)
- Secondary: `#C06CFF` (Vibrant Purple)
- Accent 1: `#FFD93D` (Sunny Yellow)
- Accent 2: `#6BC5FF` (Sky Blue)
- Accent 3: `#4ADEDE` (Fresh Mint)
- Text Primary: `#1A1B3A` (Deep Navy)
- Text Secondary: `#6B7280` (Soft Gray)

**Dark Mode:**
- Background: `#0F0F1A` (Deep Dark)
- Card BG: `#1A1A2E` (Dark Card)
- Text Primary: `#E8E8F0` (Light Text)
- Text Secondary: `#8B8BA7` (Muted Text)

### 4.2 Tipografi
- **Heading (H1-H2):** Fredoka / Bungee (Bold)
- **Subheading:** Poppins / Nunito (SemiBold)
- **Body Text:** Inter / Plus Jakarta Sans (Regular)
- **Code / Tech:** JetBrains Mono / Fira Code (Regular)

### 4.3 Gaya Visual Kunci
- ✅ Gradient mesh background yang lembut (opacity 70-80%).
- ✅ Blob shapes organik dengan warna pastel.
- ✅ Ilustrasi 3D cute (karakter game friendly) — **maksimal 2-3 per section**.
- ✅ Rounded corners besar (16-24px).
- ✅ Soft shadows berwarna (pink/ungu dengan opacity rendah).
- ✅ **Ikon SVG/Lucide** untuk UI elements (badges, buttons, headings).
- ✅ **Dark mode toggle** untuk professional appeal.
- ❌ Hindari: Lebih dari 3 emoji di satu halaman.
- ❌ Hindari: Emoji di setiap heading atau tombol.

### 4.4 Emoji Usage Policy (BARU)
- **Hero Section:** Maksimal 2 emoji ( untuk greeting, ✨ untuk accent).
- **Section Headings:** Gunakan ikon Lucide, BUKAN emoji.
- **Badges & Labels:** Gunakan ikon Lucide, BUKAN emoji.
- **Body Text:** Maksimal 1 emoji per paragraf (jika benar-benar perlu).
- **CTA Buttons:** Gunakan ikon Lucide, BUKAN emoji.

---

## 📄 5. Struktur Halaman (Single Page Application)

### 5.1 Navbar (Sticky & Professional)
- Logo: Nama developer + ikon Lucide `Gamepad2`.
- Menu: Home, About, Skills, Projects, Contact.
- CTA Button: "Let's Talk!" dengan gradient pink-purple.
- Background: White/Glassmorphism dengan blur effect saat scroll.
- **Dark mode toggle button** (ikon Lucide `Sun` / `Moon`).

### 5.2 Hero Section (Revised)
- **Headline:** "Hi, I'm [Nama] 👋" (gradient text pink-purple).
- **Subheadline:** "Full Stack Developer yang suka membangun aplikasi keren ✨".
- **Tagline:** "Crafting Digital Experiences, One Line at a Time".
- **Komponen:**
  - Ilustrasi 3D karakter developer (1 ilustrasi utama).
  - Floating elements: Maksimal 2-3 (pilih salah satu: 🎮 ATAU 🚀 ATAU ✨).
  - CTA Primary: "Explore Projects" dengan ikon Lucide `ArrowRight`.
  - CTA Secondary: "Download CV" dengan ikon Lucide `Download`.

### 5.3 About Section ("Player Stats")
- **Heading:** Ikon Lucide `User` + "Player Stats".
- Layout: 2 kolom (teks bio + ilustrasi).
- Stats Card bergaya game (Progress bars dengan gradient warna).
- **Achievement badges:**
  - Ikon Lucide `Rocket` + "First Deploy".
  - Ikon Lucide `Bug` + "Bug Slayer".
  - Ikon Lucide `Code` + "Code Master".
  - Style: Card dengan border tipis, background pastel.

### 5.4 Skills Section ("Power-Ups")
- **Heading:** Ikon Lucide `Zap` + "Power-Ups".
- Grid kartu dengan background pastel per kategori:
  - **Frontend** (Pink pastel, Ikon `Palette`): Next.js, React, TypeScript, Tailwind, shadcn/ui.
  - **Backend** (Purple pastel, Ikon `Server`): Node.js, Express, Next.js API, Laravel.
  - **Database** (Blue pastel, Ikon `Database`): PostgreSQL (Neon), Prisma, pgvector.
  - **Tools** (Mint pastel, Ikon `Wrench`): Git, Docker, Vercel, Figma.
  - **AI** (Yellow pastel, Ikon `Brain`): OpenAI API, Vercel AI SDK, LangChain.

### 5.5 Projects Section ("Main Quests") ⭐ FOKUS UTAMA
- **Heading:** Ikon Lucide `Trophy` + "Main Quests".

#### Featured Project: BookIt
- Card dengan gradient border pink-purple.
- **Badge:** Ikon Lucide `Star` + "FEATURED PROJECT".
- **Thumbnail:** Screenshot REAL dari aplikasi BookIt dalam device mockup.
- Judul: "BookIt" dengan ikon Lucide `Calendar`.
- Tagline: "Level Up Your Booking Experience".
- Deskripsi: Full-stack booking platform dengan role-based access, real-time slot validation, dan admin dashboard.
- Tech stack badges: Next.js • PostgreSQL • Prisma • Tailwind • Resend.
- **Fitur highlight:**
  - Ikon Lucide `Lock` + "JWT Authentication".
  - Ikon Lucide `CalendarCheck` + "Smart Slot Validation".
  - Ikon Lucide `BarChart3` + "Admin Dashboard".
  - Ikon Lucide `Mail` + "Email Notification".
- Tombol: "Play Demo" (ikon `ExternalLink`) & "View Source" (ikon `Github`).
- **Difficulty:** 5 ikon Lucide `Star` (filled/empty).

#### Project Cards Lain (Paper Trading, E-Learning, Roblox)
- Layout: Grid 2 kolom.
- Setiap card memiliki Ikon Lucide relevan, Judul, Deskripsi, Tech stack, Rating bintang, dan Tombol Demo/Source.

### 5.6 Experience Section ("Quest Log")
- **Heading:** Ikon Lucide `Scroll` + "Quest Log".
- Timeline vertikal dengan garis gradient.
- Setiap node: Card dengan ikon Lucide yang relevan.

### 5.7 Contact Section ("Let's Connect!")
- **Heading:** Ikon Lucide `MessageCircle` + "Let's Connect!".
- Subheading: "Got a Project in Mind?" dengan ikon Lucide `Lightbulb`.
- Form kontak modern (rounded corners, focus gradient border).
- Social media buttons dengan ikon Lucide (`Github`, `Linkedin`, `Mail`, `Twitter`).
- CTA: "Send Message" dengan ikon Lucide `Send`.

### 5.8 Footer
- "Made with ❤️ and ☕ by [Nama]" (2 emoji ini diperbolehkan di footer).
- "© 2026 All Rights Reserved".
- Easter egg: Konami code (↑↑↓↓←→←→BA) → confetti animation (subtle).

---

## ✨ 6. Fitur Interaktif & Animasi

| Fitur | Implementasi |
|-------|--------------|
| Smooth scroll | CSS `scroll-behavior: smooth` |
| Hover button | `scale(1.05)` + shadow glow (subtle) |
| Hover card | `translateY(-8px)` + colored shadow |
| Scroll animation | Framer Motion (fade in + slide up) |
| Floating elements | Parallax effect (maksimal 2-3 elemen) |
| Confetti | Saat submit form (subtle, 20-30 particles) |
| **Dark mode** | **Smooth transition antara light/dark mode** |

---

## 📱 7. Responsive Design

| Breakpoint | Layout |
|------------|--------|
| Desktop (1200px+) | Full layout, 3 kolom |
| Tablet (768px-1199px) | 2 kolom, ilustrasi disesuaikan |
| Mobile (< 768px) | Single column, hamburger menu, touch-friendly |

---

## 🛠️ 8. Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React (PRIMARY) + Emoji (MINIMAL, maks 3 per halaman)
- **Fonts:** Google Fonts (Fredoka + Inter)
- **Theme:** next-themes (untuk dark mode toggle)
- **Deployment:** Vercel

---

## 📋 9. User Stories

| ID | User Story | Priority |
|----|------------|----------|
| US-01 | Sebagai visitor, saya bisa melihat profil developer dengan cepat | Must |
| US-02 | Sebagai visitor, saya bisa melihat detail proyek BookIt | Must |
| US-03 | Sebagai visitor, saya bisa mengakses live demo dan source code | Must |
| US-04 | Sebagai visitor, saya bisa contact developer via form | Must |
| US-05 | Sebagai visitor, saya bisa melihat tech stack yang dikuasai | Must |
| US-06 | Sebagai visitor, saya bisa toggle dark/light mode | Should |
| US-07 | Sebagai visitor, saya tidak terganggu oleh emoji berlebihan | Must |

---

## ⚙️ 10. Functional Requirements

### 10.1 Performance
- Load time < 3 detik, Lighthouse score ≥ 90.
- Image optimization (WebP, lazy loading).
- Ilustrasi 3D: Maksimal 500KB per image.

### 10.2 SEO & Accessibility
- Meta tags lengkap, Open Graph, Semantic HTML.
- WCAG 2.1 AA compliance, Color contrast minimal 4.5:1 (di light & dark mode).

### 10.3 Design Consistency
- Emoji usage: Maksimal 3 per halaman.
- Ikon: Selalu pakai Lucide React untuk headings, badges, buttons.
- Gradient opacity: 70-80%, bukan 100%.

---

## 📊 12. Success Metrics

- ✅ Website live di Vercel.
- ✅ Semua user stories "Must" berfungsi.
- ✅ Lighthouse score ≥ 90.
- ✅ Maksimal 3 emoji di seluruh halaman.
- ✅ Dark mode berfungsi dengan baik.
- ✅ Screenshot project REAL, bukan mockup generik.

---

## 🚧 13. Risks & Mitigation

| Risiko | Mitigation |
|--------|------------|
| Terlalu banyak emoji | Strict policy: maks 3 per halaman, review sebelum deploy |
| Dark mode contrast buruk | Test contrast ratio di kedua mode, pakai tool WebAIM |
| Ilustrasi 3D besar | Compress image, pakai WebP, lazy loading, maks 500KB |
| Scope creep | Patuhi MVP, fitur tambahan di fase 2 |

---

## 🎯 14. Prinsip Desain

1. **PLAYFUL tapi PROFESSIONAL** — fun tapi tidak alay, emoji minimal.
2. **COLORFUL tapi HARMONIOUS** — banyak warna tapi tetap enak dilihat.
3. **MODERN dengan sentuhan RETRO** — arcade theme tapi versi 2026.
4. **ACCESSIBLE** — kontras baik, font readable, dark mode friendly.
5. **MINIMAL EMOJI** — Maksimal 3 emoji per halaman, ikon SVG untuk sisanya.

---

## 🔄 15. Changelog

| Versi | Tanggal | Perubahan |
|-------|---------|-----------|
| 1.0 | 8 Sep 2026 | Initial PRD - Bright Arcade Edition |
| 1.1 | 9 Sep 2026 | Revised: Emoji policy, dark mode, screenshot real, professional balance |

---

##  Checklist Pre-Deploy

- [ ] Maksimal 3 emoji di seluruh halaman.
- [ ] Semua headings & badges pakai ikon Lucide, bukan emoji.
- [ ] Screenshot project adalah REAL dari aplikasi yang sudah deploy.
- [ ] Dark mode toggle berfungsi & contrast ratio aman.
- [ ] Ilustrasi 3D maksimal 2-3 per section.
- [ ] Lighthouse score ≥ 90.
- [ ] Responsive di mobile, tablet, desktop.
- [ ] Tidak ada broken links.

---
**PRD v1.1 siap untuk implementasi. Fokus pada keseimbangan playful dan professional!**