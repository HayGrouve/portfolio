"use client";

import { GalleryVerticalEnd } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-background">
      <div className="container mx-auto flex items-center justify-center px-4 py-6">
        <motion.div
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GalleryVerticalEnd className="mr-3 h-8 w-8 text-accent" />
        </motion.div>
        <motion.h1
          className="text-2xl font-bold text-foreground"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Project Portfolio
        </motion.h1>
      </div>
    </header>
  );
}
