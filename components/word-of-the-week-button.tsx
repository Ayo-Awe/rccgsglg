"use client";

import Image from "next/image";

interface WordOfTheWeekButtonProps {
  onClick: () => void;
}

export function WordOfTheWeekButton({ onClick }: WordOfTheWeekButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-orange-400 hover:bg-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50 group"
      aria-label="Open Word of the Week"
    >
      {/* Church logo or message icon */}
      <div className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200">
        <Image 
          src="/rccg-logo.svg" 
          alt="Word of the Week" 
          width={32} 
          height={32}
          className="object-contain filter brightness-0 invert"
        />
      </div>
    </button>
  );
}