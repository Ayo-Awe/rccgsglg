"use client";

import { useState, useEffect } from "react";
import type { WordOfTheWeek } from "@/api-client";
import { getApiWordOfTheWeek } from "@/api-client";

const STORAGE_KEY = "lastSeenWordOfTheWeek";

export function useWordOfTheWeek() {
  const [currentWord, setCurrentWord] = useState<WordOfTheWeek | null>(null);
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCurrentWord = async () => {
    try {
      // Fetch active words, sorted by date descending to get the latest
      const response = await getApiWordOfTheWeek({
        query: {
          sort: "-date",
          limit: 1,
        },
      });

      if (response.error) {
        throw response.error;
      }

      if (
        response.data &&
        response.data.docs &&
        response.data.docs.length > 0
      ) {
        const latestWord = response.data.docs[0];
        setCurrentWord(latestWord);

        // Check if user has seen this word
        const lastSeenId = localStorage.getItem(STORAGE_KEY);
        if (String(lastSeenId) !== String(latestWord.id)) {
          setShouldShowModal(true);
        }
      }
    } catch (error) {
      console.error("Failed to fetch word of the week:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsSeen = () => {
    if (currentWord) {
      localStorage.setItem(STORAGE_KEY, currentWord.id);
      setShouldShowModal(false);
    }
  };

  const openModal = () => {
    setShouldShowModal(true);
  };

  const closeModal = () => {
    setShouldShowModal(false);
    markAsSeen();
  };

  useEffect(() => {
    fetchCurrentWord();
  }, []);

  return {
    currentWord,
    shouldShowModal,
    isLoading,
    openModal,
    closeModal,
  };
}
