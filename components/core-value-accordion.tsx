"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import { CrossIcon } from "@/components/icons";

export interface CoreValueProps {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

export function CoreValueAccordion({ values }: { values: CoreValueProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2.5">
      {values.map((value, index) => (
        <motion.div
          key={index}
          className="bg-[#FAFAFA0D] p-2.5 rounded-md overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
            backgroundColor: "rgba(250, 250, 250, 0.1)",
          }}
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-8 h-8 rounded-full bg-[#FAFAFA1A] flex items-center justify-center"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <CrossIcon className="w-4 h-4" />
              </motion.div>
              <h3 className="text-base md:text-lg font-bold">{value.title}</h3>
            </div>
            <div
              className="w-6 h-6 rounded-full border-[#fafafa] border flex items-center justify-center transition-all duration-300"
            >
              <div className="relative w-3 h-3">
                <Minus
                  className={cn(
                    "w-3 h-3 text-white absolute transition-all duration-300",
                    openIndex === index
                      ? "opacity-100 rotate-0"
                      : "opacity-0 rotate-90"
                  )}
                />
                <Plus
                  className={cn(
                    "w-3 h-3 text-white absolute transition-all duration-300",
                    openIndex === index
                      ? "opacity-0 rotate-90"
                      : "opacity-100 rotate-0"
                  )}
                />
              </div>
            </div>
          </div>
          <div
            className={cn(
              "grid transition-all duration-300 ease-in-out",
              openIndex === index
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden text-sm md:text-base">
              <p>{value.content}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
