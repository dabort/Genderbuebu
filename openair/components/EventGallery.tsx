"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type EventGalleryProps = {
  title: string;
  images: readonly string[];
};

const INITIAL_COUNT = 5;
const LOAD_MORE_COUNT = 20;

export default function EventGallery({
  title,
  images,
}: EventGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleImages = images.slice(0, visibleCount);
  const allVisible = visibleCount >= images.length;

  function showMore() {
    setVisibleCount((current) =>
      Math.min(current + LOAD_MORE_COUNT, images.length)
    );
  }

  function collapse() {
    setVisibleCount(INITIAL_COUNT);
  }

  function previousImage() {
    if (activeIndex === null) return;

    setActiveIndex(
      activeIndex === 0 ? images.length - 1 : activeIndex - 1
    );
  }

  function nextImage() {
    if (activeIndex === null) return;

    setActiveIndex(
      activeIndex === images.length - 1 ? 0 : activeIndex + 1
    );
  }

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) return null;
          return current === 0 ? images.length - 1 : current - 1;
        });
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) return null;
          return current === images.length - 1 ? 0 : current + 1;
        });
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <section className="py-12 md:py-16">
      <h3 className="mb-8 text-center text-2xl font-black uppercase tracking-[0.12em] md:text-3xl">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
        {visibleImages.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden bg-black"
            aria-label={`${title} – Bild ${index + 1} öffnen`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 20vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {images.length > INITIAL_COUNT && (
        <div className="mt-8 flex justify-center">
          {!allVisible ? (
            <button
              type="button"
              onClick={showMore}
              className="group flex flex-col items-center gap-1 text-xs font-bold uppercase tracking-[0.22em] text-black/55 transition-colors hover:text-black"
            >
              <span>Mehr Bilder</span>
              <span
                aria-hidden="true"
                className="text-xl leading-none transition-transform duration-200 group-hover:translate-y-1"
              >
                ⌄
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={collapse}
              className="group flex flex-col items-center gap-1 text-xs font-bold uppercase tracking-[0.22em] text-black/55 transition-colors hover:text-black"
            >
              <span>Galerie einklappen</span>
              <span
                aria-hidden="true"
                className="text-xl leading-none transition-transform duration-200 group-hover:-translate-y-1"
              >
                ⌃
              </span>
            </button>
          )}
        </div>
      )}

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} Bildergalerie`}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-5 top-5 z-20 text-3xl font-light text-white/70 hover:text-white"
            aria-label="Galerie schließen"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 px-4 py-8 text-5xl font-light text-white/60 hover:text-white md:left-8"
            aria-label="Vorheriges Bild"
          >
            ‹
          </button>

          <div
            className="relative h-[85vh] w-[85vw] max-w-[1500px]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt=""
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 px-4 py-8 text-5xl font-light text-white/60 hover:text-white md:right-8"
            aria-label="Nächstes Bild"
          >
            ›
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-white/50">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
