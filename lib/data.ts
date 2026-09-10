export const profile = {
  name: "Akari Kanzo",
  fullName: "Akari Kanzoo Triputra",
  role: "Full Stack Developer",
  status: "5th-Semester Informatics Engineering @ PENS",
  github: "https://github.com/Rumiiisaa",
  linkedin: "https://www.linkedin.com/in/akari-kanzoo-triputra-5a78b6430/",
  email: "akarikanzo27@gmail.com",
};

export const skills = [
  {
    title: "Frontend",
    color: "pink",
    icon: "Palette",
    emoji: "🎮",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend",
    color: "purple",
    icon: "Server",
    emoji: "⚡",
    items: ["Node.js", "Express", "Next.js API", "Laravel", "PHP", ".NET Minimal API"],
  },
  {
    title: "Database",
    color: "blue",
    icon: "Database",
    emoji: "💾",
    items: ["PostgreSQL", "Prisma", "pgvector", "Supabase", "SQLite"],
  },
  {
    title: "Tools",
    color: "mint",
    icon: "Wrench",
    emoji: "🛠️",
    items: ["Git", "Docker", "Vercel", "Figma", "REST APIs"],
  },
  {
    title: "AI & Systems",
    color: "yellow",
    icon: "Brain",
    emoji: "👾",
    items: ["OpenAI API", "Vercel AI SDK", "LangChain", "OCR Pipeline", "Algorithms"],
  },
];

export const stats = [
  { label: "Frontend", value: 85, emoji: "🕹️" },
  { label: "Backend", value: 80, emoji: "⚙️" },
  { label: "Database", value: 75, emoji: "🗄️" },
  { label: "AI & Systems", value: 70, emoji: "🤖" },
];

export const projects = [
  {
    id: "extract",
    title: "ExTract",
    subtitle: "AI Invoice & Expense Intelligence",
    description:
      "An automated receipt and invoice processing system combining OCR extraction with LLM parsing to transform unstructured receipts into validated accounting data.",
    highlights: [
      { label: "OCR + LLM Extraction", icon: "FileText" },
      { label: "Structured JSON Schema", icon: "CheckCircle" },
      { label: "Expense Categorization", icon: "Layers" },
      { label: "Export to Accounting", icon: "Download" },
    ],
    tags: ["React.js", "Next.js", "Tailwind", "Dart", "Firebase"],
    difficulty: 5,
    demoUrl: "https://extract.web.id/",
    sourceUrl: "https://github.com/Rumiiisaa",
    featured: true,
    screenshots: [
      {
        url: "/projects/extract/1-antrian-pembayaran.png",
        title: "Antrian Pembayaran & Klaim Reimbursement",
        category: "Web Dashboard",
        description: "Manajemen alur persetujuan klaim pengeluaran karyawan dengan multi-status: Pending, Processing, Completed, dan Failed.",
      },
      {
        url: "/projects/extract/2-chart-of-accounts.png",
        title: "Bagan Akun (Chart of Accounts) & Validasi AI",
        category: "AI Accounting",
        description: "Pengelolaan struktur kode akun otomatis yang dilengkapi saran kategori berbasis AI dan validasi real-time.",
      },
      {
        url: "/projects/extract/3-mobile-scanner.png",
        title: "Scan Receipt Smart Camera",
        category: "Mobile App (Dart)",
        description: "Scanner kamera real-time dengan frame deteksi struk dan panduan pencahayaan otomatis untuk akurasi OCR maksimal.",
      },
      {
        url: "/projects/extract/4-mobile-home.png",
        title: "Mobile Dashboard & Expense Categories",
        category: "Mobile App (Dart)",
        description: "Tampilan plafon reimbursement, progress klaim, kategori pengeluaran (Transport, F&D, Supplies), serta riwayat transaksi terbaru.",
      },
    ],
    detailedDescription:
      "ExTract adalah platform otomatisasi pengeluaran dan invoice berbasis AI & OCR lintas platform (Web & Mobile). Menggantikan proses manual dengan ekstraksi presisi tinggi, validasi Bagan Akun otomatis bertenaga AI, alur persetujuan reimbursement berlapis, serta aplikasi mobile native (Dart) yang tersinkronisasi cepat melalui Firebase.",
    keyFeatures: [
      "Real-time OCR Scanner kamera pada perangkat mobile untuk ekstraksi struk fisik instan.",
      "Bagan Akun (Chart of Accounts) otomatis dengan rekomendasi kategori pengeluaran dari AI.",
      "Dasbor Antrian Pembayaran untuk approval klaim dan integrasi pembayaran multi-metode.",
      "Arsitektur terintegrasi: Dashboard modern dengan React.js/Next.js/Tailwind & Mobile App dengan Dart & Firebase.",
    ],
  },
  {
    id: "bookit",
    title: "BookIt",
    subtitle: "Level Up Your Booking Experience",
    description:
      "A full-stack service booking platform with role-based access control, real-time slot validation, an admin analytics dashboard, and automated email notifications. Built for speed, reliability, and modern UX.",
    highlights: [
      { label: "JWT Authentication", icon: "Lock" },
      { label: "Smart Slot Validation", icon: "CalendarCheck" },
      { label: "Admin Dashboard", icon: "BarChart3" },
      { label: "Email Notifications", icon: "Mail" },
    ],
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Resend"],
    difficulty: 4,
    demoUrl: "#",
    sourceUrl: "https://github.com/Rumiiisaa",
    featured: false,
  },
  {
    id: "paper-trader",
    title: "Paper Trading Risk Engine",
    subtitle: "Spot / Futures Risk Simulation Bot",
    description:
      "Automated paper trading risk engine featuring ATR-based Stop-Loss/Take-Profit validation, drawdown circuit breakers, and complete transaction logging.",
    highlights: [
      { label: "ATR & EMA Indicators", icon: "TrendingUp" },
      { label: "SQLite Audit Log", icon: "Database" },
      { label: "Risk Sizing Engine", icon: "ShieldAlert" },
      { label: "Circuit Breakers", icon: "Zap" },
    ],
    tags: ["Python"],
    difficulty: 4,
    demoUrl: "#",
    sourceUrl: "https://github.com/Rumiiisaa/paper-trading-bot",
    featured: false,
  },
  {
    id: "elearning",
    title: "E-Learning Academic Portal",
    subtitle: "Comprehensive Campus LMS",
    description:
      "Campus LMS modeled after Ethol PENS. Includes course assignments, student submissions, lecture schedules, and real-time attendance tracking.",
    highlights: [
      { label: "Course Management", icon: "BookOpen" },
      { label: "Assignment Submissions", icon: "UploadCloud" },
      { label: "Role Dashboards", icon: "Users" },
      { label: "Gradebook System", icon: "Award" },
    ],
    tags: ["Laravel", "PHP", "React", "PostgreSQL", "Tailwind CSS"],
    difficulty: 4,
    demoUrl: "#",
    sourceUrl: "https://github.com/Rumiiisaa",
    featured: false,
  },
  {
    id: "game-systems",
    title: "Roblox Game Architecture",
    subtitle: "RNG, Guilds & Progression Engine",
    description:
      "Scalable game backend subsystems for Roblox RPG/RNG modes. Features mathematical progression formulas, deterministic RNG drop tables, and guild management.",
    highlights: [
      { label: "RNG Drop Tables", icon: "Dice5" },
      { label: "Progression Math", icon: "Calculator" },
      { label: "Guild Architecture", icon: "Shield" },
      { label: "Inventory Fuse Logic", icon: "Boxes" },
    ],
    tags: ["Lua / Luau", "Algorithms", "Game Math", "DataStores"],
    difficulty: 4,
    demoUrl: "#",
    sourceUrl: "https://github.com/Rumiiisaa",
    featured: false,
  },
];

export const milestones = [
  {
    year: "2024",
    title: "Started D4 Informatics @ PENS",
    emoji: "🎓",
    description:
      "Entered PENS, mastering foundational CS principles: Algorithms (Sorting, Graph Dijkstra/Warshall), Data Structures, C, and Java.",
    icon: "GraduationCap",
  },
  {
    year: "2025",
    title: "Full Stack & Web Engineering",
    emoji: "⚡",
    description:
      "Engineered full stack applications with Laravel, React, Next.js, mobile apps, and designed high-availability database architectures.",
    icon: "Code2",
  },
  {
    year: "2026",
    title: "Level 5 — Advanced Systems & AI",
    emoji: "🚀",
    description:
      "Building AI expense pipelines (ExTract), simulated trading engines, and Roblox progression systems.",
    icon: "Sparkles",
  },
  {
    year: "2027",
    title: "Final Year Quest Loading",
    emoji: "🎯",
    description:
      "Preparing for the final academic year while pursuing remote Junior Full Stack Developer opportunities and global collaborations.",
    icon: "Target",
  },
];
