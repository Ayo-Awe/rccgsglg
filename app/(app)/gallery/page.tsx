"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";

function Hero() {
  return (
    <section
      className={`relative h-[200px] sm:h-[250px] md:h-[300px] bg-[#1a1a2e] text-white rounded-3xl overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[#15151BB2] z-10 rounded-3xl"></div>
      <Image
        src="/heroes/home_hero.png"
        alt="Gallery Background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          className="bg-white/10 px-3 py-1 rounded-full mb-3 sm:mb-4 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={`text-lg sm:text-xl md:text-2xl font-thin mr-2 sm:mr-3 font-anton`}>
            📸
          </span>
          <span className="text-xs sm:text-sm uppercase">View</span>
        </motion.div>
        <motion.h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-anton tracking-wider leading-tight`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Church <span className="text-[#DEC360]">Gallery</span>
        </motion.h1>
      </div>
    </section>
  );
}

// Gallery images from the new uploads plus pastor image
const galleryImages = [
  {
    id: 1,
    src: "/backgrounds/pastor.png",
    alt: "",
    title: "",
  },
  {
    id: 2,
    src: "/gallery/IMG_0767.JPEG",
    alt: "",
    title: "",
  },
  {
    id: 3,
    src: "/gallery/IMG_0804.JPG",
    alt: "",
    title: "",
  },
  {
    id: 4,
    src: "/gallery/IMG_1583.JPEG",
    alt: "",
    title: "",
  },
  {
    id: 5,
    src: "/gallery/IMG_1639.JPG",
    alt: "",
    title: "",
  },
  {
    id: 6,
    src: "/gallery/IMG_2253.JPEG",
    alt: "",
    title: "",
  },
  {
    id: 7,
    src: "/gallery/IMG_2873.JPEG",
    alt: "",
    title: "",
  },
  {
    id: 8,
    src: "/gallery/IMG_3008.JPEG",
    alt: "",
    title: "",
  },
];

// Transform gallery images for lightbox format
const lightboxSlides = galleryImages.map((image) => ({
  src: image.src,
  alt: image.alt,
  title: image.title,
  description: `Church image: ${image.title}`,
}));

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main>
      <Hero />
      <div className="py-4 sm:py-6 px-4 sm:px-7.5 mt-4 sm:mt-6 flex flex-col items-center">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <motion.div
            className="bg-[#FAFAFA] px-3 sm:px-4 py-1 rounded-full mb-6 sm:mb-8 flex items-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`text-lg sm:text-xl md:text-2xl font-thin mr-2 sm:mr-3 font-anton`}>
              📸
            </span>
            <span className="text-xs sm:text-sm uppercase">View</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-anton text-rccg-dark-blue mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Church Gallery
          </motion.h2>
          <motion.p
            className="max-w-[600px] text-base sm:text-lg text-center font-lato text-rccg-dark-blue px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Capturing moments of fellowship, worship, and God&apos;s blessings
            in our church community.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-medium text-sm">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxSlides}
          index={lightboxIndex}
          plugins={[Captions, Counter, Fullscreen, Zoom]}
        />
      </div>
    </main>
  );
}
