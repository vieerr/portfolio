"use client"
import { useTheme } from "next-themes";
import { LucideMoon } from "lucide-react";
import { LucideSun } from "lucide-react";
export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <div className="absolute">
          <LucideMoon className="h-6 w-6 text-primary" />
        </div>
      ) : (
        <div className="absolute">
          <LucideSun className="h-6 w-6 text-primary" />
        </div>
      )}{" "}
    </button>
  );
}
