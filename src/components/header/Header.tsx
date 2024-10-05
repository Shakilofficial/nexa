"use client";

import { Button } from "@/components/ui/button";
import { headerNavItems } from "@/lib/constants"; // Reuse headerNavItems
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import MobileNav from "./MobileNav";
import UserMenu from "./UserMenu";

// Define the Header component
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
      className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-rose-600 dark:text-rose-400"
        >
          Logo
        </Link>

        <nav className="hidden md:flex space-x-4">
          {headerNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors ${
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
          <Button variant="ghost" size="icon">
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
