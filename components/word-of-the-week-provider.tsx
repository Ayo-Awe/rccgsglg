"use client";

import { useWordOfTheWeek } from "@/lib/hooks/use-word-of-the-week";
import { WordOfTheWeekModal } from "./word-of-the-week-modal";
import { WordOfTheWeekButton } from "./word-of-the-week-button";

export function WordOfTheWeekProvider() {
  const { currentWord, shouldShowModal, isLoading, openModal, closeModal } =
    useWordOfTheWeek();

  if (isLoading) {
    return null;
  }

  return (
    <>
      {/* Modal that shows automatically or when triggered */}
      <WordOfTheWeekModal
        isOpen={shouldShowModal}
        onClose={closeModal}
        word={currentWord}
      />

      {/* Floating button always visible */}
      {currentWord && <WordOfTheWeekButton onClick={openModal} />}
    </>
  );
}
