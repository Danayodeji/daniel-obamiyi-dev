import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme === "dark" || (savedTheme === "system" && isSystemDark);
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <button 
      onClick={toggleTheme} 
      aria-label="Toggle theme" 
      className={cn(
        "fixed top-3 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        isDarkMode ? "bg-yellow-100/10 hover:bg-yellow-200/20" : "bg-gray-200/80 hover:bg-gray-300/90 text-gray-900"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-gray-900" />
      )}
    </button>
  ) 
}

export default ThemeToggle