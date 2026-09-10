import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akari Kanzoo Triputra | Full Stack Developer",
  description:
    "Personal portfolio of Akari Kanzoo Triputra — Full Stack Developer crafting playful & high-impact digital experiences. Explore projects, skills, and more.",
  keywords: [
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Akari Kanzoo Triputra",
  ],
  authors: [{ name: "Akari Kanzoo Triputra" }],
  openGraph: {
    title: "Akari Kanzoo Triputra | Full Stack Developer",
    description:
      "Full Stack Developer crafting playful & high-impact digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akari Kanzoo Triputra | Full Stack Developer",
    description:
      "Full Stack Developer crafting playful & high-impact digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fredoka.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-[#FAFBFF] text-[#1A1B3A] dark:bg-[#0F0F1A] dark:text-[#E8E8F0] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
