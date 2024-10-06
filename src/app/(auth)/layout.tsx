"use client";

import Logo from "@/components/shared/Logo";
import { motion } from "framer-motion";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-card shadow-2xl rounded-[var(--radius)] overflow-hidden border border-primary/10">
          <div className="p-8">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              ></motion.div>
              <div className="flex justify-center items-center gap-2 text-3xl font-bold text-foreground">
                Welcome to <Logo />
              </div>
              <p className="text-muted-foreground mt-2">
                Your gateway to seamless authentication
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {children}
            </motion.div>
          </div>
          <div className="px-8 py-6 bg-muted/50 text-center border-t border-primary/10">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Nexa. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
