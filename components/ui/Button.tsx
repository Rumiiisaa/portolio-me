"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "yellow";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-arcade-pink to-arcade-purple text-white shadow-arcade-pink hover:shadow-arcade-purple",
    outline: "bg-white text-navy border-2 border-gray-200 hover:border-arcade-purple hover:text-arcade-purple",
    yellow: "bg-arcade-yellow text-navy shadow-arcade-yellow hover:brightness-105",
  };
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arcade-purple focus-visible:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
