"use client";

import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
