"use client";

import { RccgLogo } from "@/components/icons";
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

export function WordOfTheWeekModal({
  isOpen,
  onClose,
  word,
}: WordOfTheWeekModalProps) {
  if (!word) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white rounded-xl p-4">
        <DialogHeader>
          <div className="flex items-end gap-3">
            <RccgLogo className="w-9.5 h-9.5" />
            <DialogTitle className="text-lg font-semibold text-gray-800">
              God&apos;s word for the week
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* Main content */}
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed text-sm text-justify">
            {word.content}
          </p>

          {/* Scripture references */}
          {word.scriptureReferences && (
            <div className="pt-2">
              <p className="text-xs text-gray-500 font-medium">
                {word.scriptureReferences}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
