"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface CoreValueProps {
  title: string;
  icon: string;
  content: string;
  defaultOpen?: boolean;
}

export function CoreValueAccordion({ values }: { values: CoreValueProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2.5">
      {values.map((value, index) => (
        <div
          key={index}
          className="bg-[#FAFAFA0D] p-2.5 rounded-md overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FAFAFA1A] flex items-center justify-center">
                <Image
                  className="text-white"
                  src={value.icon}
                  height={25}
                  width={25}
                  alt="icon"
                />
              </div>
              <h3 className="text-base md:text-xl font-bold">{value.title}</h3>
            </div>
            <button
              onClick={() => toggleAccordion(index)}
              className="w-6 h-6 rounded-full border-[#fafafa] border flex items-center justify-center transition-all duration-300 hover:bg-white/20"
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
            </button>
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
        </div>
      ))}
    </div>
  );
}
