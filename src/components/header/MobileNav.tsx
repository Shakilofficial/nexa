"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavProps {
  navItems: NavItem[];
}

const MobileNav: FC<MobileNavProps> = ({ navItems }) => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors ${
                item.href === pathname
                  ? "text-rose-600 dark:text-rose-400 font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
