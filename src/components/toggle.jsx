"use client";
import { useTheme } from "next-themes";
import { LucideMoon, LucideSun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return nothing during server-side rendering
  }

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
      )}
    </button>
  );
}