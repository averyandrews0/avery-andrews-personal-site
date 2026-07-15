"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const themes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon }
] as const;

type SiteTheme = (typeof themes)[number]["value"];

type ThemeProps = {
  className?: string;
};

export function Theme({ className }: ThemeProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div aria-hidden="true" className={cn("h-9 w-[142px]", className)} />;
  }

  const selectedTheme: SiteTheme = theme === "light" ? "light" : "dark";

  return (
    <Tabs
      value={selectedTheme}
      onValueChange={(value) => setTheme(value as SiteTheme)}
      className={className}
    >
      <TabsList
        aria-label="Color theme"
        className="inline-flex h-9 items-center rounded-md border border-line bg-paper p-1"
      >
        {themes.map(({ value, label, icon: Icon }) => {
          const isSelected = selectedTheme === value;

          return (
            <TabsTrigger
              key={value}
              value={value}
              className="relative inline-flex h-7 min-w-[65px] items-center justify-center gap-1.5 rounded px-2 text-xs font-semibold text-steel outline-none transition hover:text-ink focus-visible:ring-2 focus-visible:ring-lilac data-[state=active]:text-ink"
            >
              {isSelected ? (
                <motion.span
                  layoutId="theme-segment"
                  className="absolute inset-0 rounded bg-segment shadow-sm"
                  transition={{ type: "spring", stiffness: 500, damping: 34 }}
                />
              ) : null}
              <span className="relative z-10 inline-flex items-center gap-1.5">
                <Icon aria-hidden="true" size={13} />
                {label}
              </span>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
