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

  // Extract text content from rich text structure
  const getTextContent = (content: WordOfTheWeek['content']): string => {
    if (!content?.root?.children) return "";
    
    return content.root.children
      .map((child: Record<string, unknown>) => {
        // Handle different types of content nodes
        if (child.children && Array.isArray(child.children)) {
          return child.children.map((textNode: Record<string, unknown>) => 
            typeof textNode === 'object' && textNode !== null && 'text' in textNode 
              ? String(textNode.text || "") 
              : ""
          ).join("");
        }
        if (child.text) {
          return String(child.text);
        }
        return "";
      })
      .join(" ");
  };

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
          <DialogHeader className="text-center mb-6">
            {/* Church Logo */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Image 
                  src="/rccg-logo.svg" 
                  alt="RCCG Logo" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            
            <DialogTitle className="text-xl font-semibold text-gray-800 mb-2">
              {word.title}
            </DialogTitle>
          </DialogHeader>

          {/* Main content */}
          <div className="space-y-4">
            <p className="text-gray-600 text-center leading-relaxed text-sm">
              {getTextContent(word.content)}
            </p>

            {/* Scripture references */}
            {word.scriptureReferences && (
              <div className="text-center">
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