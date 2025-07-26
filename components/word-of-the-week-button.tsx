"use client";

import { WowButton } from "@/components/icons";
import { motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface WordOfTheWeekButtonProps {
  onClick: () => void;
}

export function WordOfTheWeekButton({ onClick }: WordOfTheWeekButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.button
          onClick={onClick}
          className="fixed bottom-6 right-6 group hover:cursor-pointer z-50"
          aria-label="Open Word of the Week"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            rotate: [0, -10, 10, -5, 5, 0],
            transition: {
              rotate: { duration: 0.5, ease: "easeInOut" },
              scale: { duration: 0.2 },
            },
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <WowButton className="w-16 h-16" />
          </motion.div>
        </motion.button>
      </TooltipTrigger>
      <TooltipContent side="left" className="bg-black text-white">
        <p>Word of the Week</p>
      </TooltipContent>
    </Tooltip>
  );
}
