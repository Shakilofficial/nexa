"use client";

import ThemeSwitcher from "@/components/shared/ThemeSwitcher";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/lib/constants";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../shared/Logo";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();

  return (
    <motion.aside
      className="flex h-screen flex-col bg-background text-foreground"
      initial={{ width: isCollapsed ? 64 : 256 }}
      animate={{ width: isCollapsed ? 64 : 256 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <Logo />}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => (
          <Link key={item.label} href={item.href}>
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <item.icon className="mr-2" size={20} />
              {!isCollapsed && <span>{item.label}</span>}
            </Button>
          </Link>
        ))}
      </nav>

      <div className="border-t border-primary p-5">
        <div className="flex flex-col items-start space-y-4">
          <ThemeSwitcher />
          <div className="flex w-full items-center space-x-2">
            <Avatar>
              <AvatarImage
                className="h-[35px] w-[35px] rounded-full object-cover"
                src="https://github.com/shadcn.png"
                alt="User avatar"
              />
            </Avatar>
            {!isCollapsed && <span className="font-semibold">Shakil</span>}
          </div>
          <Button
            variant="ghost"
            className={`w-full justify-start ${isCollapsed ? "px-2" : ""}`}
            aria-label="Logout"
          >
            <LogOut
              size={isCollapsed ? 24 : 20}
              className={isCollapsed ? "mx-auto" : "mr-2"}
            />
            {!isCollapsed && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </motion.aside>
  );
}
