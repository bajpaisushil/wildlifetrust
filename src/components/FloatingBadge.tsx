"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FloatingBadge({
  emoji,
  label,
  className,
  delay = 0,
}: {
  emoji: string;
  label: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`absolute flex items-center gap-2 rounded-full bg-surface px-3.5 py-2 text-sm font-semibold text-ink shadow-xl shadow-black/15 ${className}`}
      initial={reduce ? false : { opacity: 0, scale: 0.8 }}
      animate={reduce ? undefined : { opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.4, delay },
        scale: { duration: 0.4, delay },
        y: { duration: 4, delay, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <span className="text-xl" aria-hidden="true">{emoji}</span>
      {label}
    </motion.div>
  );
}
