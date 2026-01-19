"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const ICON_SIZE = 20;

  return (
    <div className="flex items-center gap-3">
      {/* Light */}
      <Button
        variant={theme === "light" ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("light")}
      >
        <Sun size={ICON_SIZE} />
      </Button>

      {/* Dark */}
      <Button
        variant={theme === "dark" ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("dark")}
      >
        <Moon size={ICON_SIZE} />
      </Button>
    </div>
  );
};

export { ThemeSwitcher };
