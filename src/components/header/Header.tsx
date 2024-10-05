"use client";

import { Button } from "@/components/ui/button";
import { headerNavItems } from "@/lib/constants";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../shared/Logo";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import MobileNav from "./MobileNav";
import UserMenu from "./UserMenu";

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-gradient-to-r from-rose-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex space-x-6">
          {headerNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200 ${
                item.href === pathname
                  ? "text-rose-600 dark:text-rose-400 font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <UserMenu />
          <MobileNav navItems={headerNavItems} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
