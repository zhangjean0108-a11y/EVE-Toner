"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useMemo, useState } from "react";

type ProductGalleryProps = {
  productName: string;
  images: string[];
};

export function ProductGallery({ productName, images }: ProductGalleryProps) {
  const galleryImages = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const activeImage = galleryImages[activeIndex] ?? galleryImages[0];

  const goToImage = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + galleryImages.length) % galleryImages.length);
  };

  if (!activeImage) {
    return null;
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xl shadow-cyan-950/10">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative aspect-square w-full overflow-hidden rounded-lg bg-white p-4 text-left"
        aria-label="Open product image gallery"
      >
        <Image
          src={activeImage}
          alt={productName}
          width={760}
          height={760}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
          priority
        />
        <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/85 text-white shadow-lg backdrop-blur transition group-hover:bg-[var(--brand-cyan)]">
          <Maximize2 className="h-5 w-5" />
        </span>
      </button>

      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {galleryImages.map((image, index) => (
          <button
            type="button"
            key={`${image}-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`aspect-square rounded-md border bg-white p-1.5 transition hover:border-[var(--brand-cyan)] ${
              activeIndex === index ? "border-[var(--brand-cyan)] ring-2 ring-cyan-100" : "border-slate-200"
            }`}
            aria-label={`View product image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${productName} product view ${index + 1}`}
              width={160}
              height={160}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg transition hover:bg-cyan-50"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>
          {galleryImages.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => goToImage(-1)}
                className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg transition hover:bg-cyan-50"
                aria-label="Previous product image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() => goToImage(1)}
                className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg transition hover:bg-cyan-50"
                aria-label="Next product image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          ) : null}
          <div className="w-full max-w-5xl rounded-xl bg-white p-4 shadow-2xl">
            <div className="relative aspect-square max-h-[78vh] w-full">
              <Image
                src={activeImage}
                alt={`${productName} enlarged product view`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="mt-3 text-center text-sm font-bold text-slate-600">
              Image {activeIndex + 1} of {galleryImages.length}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
