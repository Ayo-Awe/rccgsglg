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

interface SermonCardProps {
  title: string;
  date: Date;
  downloadLink: string;
}

function SermonCard({ title, date, downloadLink }: SermonCardProps) {
  return (
    <div className="p-0.5">
      <Image
        src="/sermon_thumbnail.jpg"
        alt="Sermon Image"
        width={250}
        height={250}
        className="rounded-lg aspect-square object-cover mb-3"
      />
      <h4 className="text-lg text-rccg-dark-blue font-lato font-bold mb-3">
        {title}
      </h4>
      <div className="flex items-center justify-between">
        <p className="text-base text-rccg-dark-blue font-lato">
          {date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <div className="bg-[#FAFAFA] font-lato text-rccg-dark-blue px-4 py-2 rounded-full flex items-center">
          <Link href={downloadLink} download className="flex items-center">
            <Download className="mr-2 h-4" />
            <span>Download</span>
          </Link>
        </div>
      </div>
    </div>
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

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1100px] mx-auto gap-6 mt-6">
        {allSermons.map((sermon) => {
          let dateObj = new Date();
          if (sermon.date) {
            const parsed = new Date(sermon.date);
            if (!isNaN(parsed.getTime())) {
              dateObj = parsed;
            }
          }
          const cardProps: SermonCardProps = {
            title: sermon.title,
            date: dateObj,
            downloadLink: (sermon.document as SermonDocument).url!,
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
