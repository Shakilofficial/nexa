"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { FC } from "react";

const Moon = dynamic(() => import("lucide-react").then((mod) => mod.Moon), {
  ssr: false,
});
const Sun = dynamic(() => import("lucide-react").then((mod) => mod.Sun), {
  ssr: false,
});

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme === "dark" ? "dark" : "light"}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
};

export default ThemeSwitcher;
