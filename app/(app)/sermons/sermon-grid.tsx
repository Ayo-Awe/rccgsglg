"use client";

import {
  getApiSermons,
  GetApiSermonsResponse,
  SermonDocument,
} from "@/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface SermonCardProps {
  title: string;
  date: Date;
  downloadLink: string;
  index: number;
}

function SermonCard({ title, date, downloadLink, index }: SermonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-0.5 flex flex-col h-full"
    >
      <Image
        src="/sermon_thumbnail.jpg"
        alt="Sermon Image"
        width={250}
        height={250}
        className="rounded-lg aspect-square object-cover mb-3"
      />
      <div className="flex-grow">
        <h4 className="text-lg text-rccg-dark-blue font-lato font-bold mb-3">
          {title}
        </h4>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-base text-rccg-dark-blue font-lato">
            {date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <div className="bg-[#FAFAFA] font-lato text-rccg-dark-blue px-4 py-2 rounded-full flex items-center hover:bg-rccg-yellow hover:text-white transition-colors duration-300">
            <Link href={downloadLink} download className="flex items-center">
              <Download className="mr-2 h-4" />
              <span>Download</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface SermonsGridProps {
  initalPage: GetApiSermonsResponse;

  limit: number;
}

export default function SermonsGrid({ initalPage, limit }: SermonsGridProps) {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["sermons", limit],
    queryFn: async ({ pageParam }) => {
      const res = await getApiSermons({ query: { limit, page: pageParam } });
      if (res.error) {
        throw res.error;
      }

      return res.data!;
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage || undefined;
    },
    initialPageParam: 2,
    initialData: {
      pages: [initalPage],
      pageParams: [1],
    },
  });

  // Combine all pages into one array
  const allSermons = data?.pages.map((p) => p.docs).flat() || [];

  if (isLoading && allSermons.length === 0) {
    return <p>Loading sermons...</p>;
  }
  if (isError) {
    return <p>Failed to load sermons.</p>;
  }

  if (allSermons.length === 0) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-12 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#FAFAFA] p-6 rounded-full mb-6">
          <span className="text-4xl">📒</span>
        </div>
        <h3 className="text-2xl font-anton text-rccg-dark-blue mb-2">
          No Sermons Available
        </h3>
        <p className="text-center text-rccg-dark-blue/70 font-lato max-w-md">
          Check back soon for new sermons and spiritual teachings.
        </p>
      </motion.div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1100px] mx-auto gap-6 mt-6">
        {allSermons.map((sermon, index) => {
          const dateObj = new Date(sermon.date);
          const cardProps: SermonCardProps = {
            title: sermon.title,
            date: dateObj,
            downloadLink: (sermon.document as SermonDocument).url!,
            index,
          };
          return <SermonCard key={sermon.id} {...cardProps} />;
        })}
      </div>

      {/* Load More button */}
      {hasNextPage && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="bg-[#DEC360] text-white font-lato px-6 py-2 rounded-full disabled:opacity-50"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
}
