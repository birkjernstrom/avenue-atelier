"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: "left" | "right") => {
    if (!galleryRef.current) return;
    const img = galleryRef.current.querySelector("img");
    if (!img) return;
    const scrollAmount =
      direction === "left" ? -(img.offsetWidth + 16) : img.offsetWidth + 16;
    galleryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Video */}
      <section className="snap-section h-screen pt-[53px]">
        <div className="w-full h-full">
          <div className="relative h-full overflow-hidden bg-white">
            <video
              className="absolute inset-0 w-full h-full object-cover grayscale"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-white text-xl tracking-[0.3em] font-medium mb-2">
                AVENUE ATELIER
              </span>
              <span className="text-white text-sm tracking-[0.2em] font-light">
                Launching Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="snap-section h-screen">
        <div className="relative w-full h-full">
          <Image
            src="/media/feature.jpg"
            alt="Feature"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Product Overview */}
      <section className="snap-section h-screen flex items-center justify-center">
        <div className="mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Tote */}
            <div className="text-center">
              <div className="h-[500px] w-[400px] mb-6 overflow-hidden relative mx-auto">
                <Image
                  src="/product/tote/1.jpg"
                  alt="Elsa Tote Bag"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xs font-medium mb-3">Elsa Tote Bag</h2>
              <Link
                href="/soon/products/tote"
                className="inline-block border border-gray-900 px-6 py-3 text-xs tracking-wide hover:bg-gray-900 hover:text-white transition-colors"
              >
                Explore product
              </Link>
            </div>
            {/* Clutch */}
            <div className="text-center">
              <div className="h-[500px] w-[400px] mb-6 overflow-hidden relative mx-auto">
                <Image
                  src="/product/clutch/1.jpg"
                  alt="Elsa Pouch Bag"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xs font-medium mb-3">Elsa Pouch Bag</h2>
              <Link
                href="/soon/products/pouch"
                className="inline-block border border-gray-900 px-6 py-3 text-xs tracking-wide hover:bg-gray-900 hover:text-white transition-colors"
              >
                Explore product
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery & Footer */}
      <section className="snap-section h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-[80%] mx-auto">
            <div className="relative">
              <div
                ref={galleryRef}
                className="flex gap-4 overflow-hidden scroll-smooth"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <img
                    key={num}
                    src={`/gallery/${num}.jpg`}
                    alt="Gallery image"
                    className="flex-shrink-0 h-[19rem] w-auto"
                  />
                ))}
              </div>
              {/* Navigation Arrows */}
              <button
                onClick={() => scrollGallery("left")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow z-10"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scrollGallery("right")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow z-10"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
