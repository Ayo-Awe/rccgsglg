"use client";

import { X } from "lucide-react";
import Image from "next/image";
import type { WordOfTheWeek } from "@/api-client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WordOfTheWeekModalProps {
  isOpen: boolean;
  onClose: () => void;
  word: WordOfTheWeek | null;
}

export function WordOfTheWeekModal({ isOpen, onClose, word }: WordOfTheWeekModalProps) {
  if (!word) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-md mx-auto bg-white rounded-xl shadow-xl border-0 p-0 overflow-hidden">
        {/* Header with close button */}
        <div className="flex justify-end p-4 pb-0">
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* Header with logo left-aligned and title beside it */}
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Image 
                  src="/rccg-logo.svg" 
                  alt="RCCG Logo" 
                  width={32} 
                  height={32}
                  className="object-contain"
                />
              </div>
              <DialogTitle className="text-lg font-semibold text-gray-800">
                God&apos;s word for the week
              </DialogTitle>
            </div>
          </DialogHeader>

          {/* Main content */}
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed text-sm text-justify">
              {typeof word.content === 'string' ? word.content : 'Loading...'}
            </p>

            {/* Scripture references */}
            {word.scriptureReferences && (
              <div className="text-center pt-2">
                <p className="text-xs text-gray-500 font-medium">
                  {word.scriptureReferences}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}