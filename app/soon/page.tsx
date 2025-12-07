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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <nav className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-xs tracking-wide hover:opacity-70">
              Shop
            </Link>
            <Link href="#" className="text-xs tracking-wide hover:opacity-70">
              About
            </Link>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="#" className="text-sm tracking-[0.2em] font-medium">
              AVENUE ATELIER
            </Link>
          </div>
          <div>
            <Link href="#" className="hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </header>

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

      {/* Product Overview */}
      <section className="snap-section h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Tote */}
            <div className="text-center">
              <div className="aspect-[4/5] mb-6 overflow-hidden relative">
                <Image
                  src="/product/tote/1.jpg"
                  alt="Elsa Tote Bag"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xs font-medium mb-3">Elsa Tote Bag</h2>
              <Link
                href="#tote"
                className="inline-block border border-gray-900 px-6 py-3 text-xs tracking-wide hover:bg-gray-900 hover:text-white transition-colors"
              >
                Explore product
              </Link>
            </div>
            {/* Clutch */}
            <div className="text-center">
              <div className="aspect-[4/5] mb-6 overflow-hidden relative">
                <Image
                  src="/product/clutch/1.jpg"
                  alt="Elsa Pouch Bag"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xs font-medium mb-3">Elsa Pouch Bag</h2>
              <Link
                href="#clutch"
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

        <footer className="py-12 px-6">
          <div className="pb-12 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm tracking-[0.2em] font-medium mb-10">
                AVENUE ATELIER
              </p>
              <p className="text-sm tracking-wide mb-2">
                Designed in Stockholm
              </p>
              <p className="text-sm tracking-wide">Made in Italy</p>
            </div>
          </div>
          <div className="max-w-md mx-auto text-center px-6 mb-10">
            <form className="space-y-3">
              <input
                type="email"
                placeholder="your email address"
                className="w-full border border-gray-300 px-4 py-3 text-xs text-center focus:outline-none focus:border-gray-900 transition-colors"
              />
              <button
                type="submit"
                className="w-full border border-gray-900 py-3 text-xs tracking-wide hover:bg-gray-900 hover:text-white transition-colors"
              >
                Join the world of Avenue Atelier
              </button>
            </form>
          </div>
          <div className="max-w-4xl mx-auto border-t border-gray-200 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="space-y-3">
                <Link
                  href="#"
                  className="block text-xs tracking-wide hover:opacity-70"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="block text-xs tracking-wide hover:opacity-70"
                >
                  Contact
                </Link>
              </div>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="block text-xs tracking-wide hover:opacity-70"
                >
                  Sustainability
                </Link>
                <Link
                  href="#"
                  className="block text-xs tracking-wide hover:opacity-70"
                >
                  Craftsmanship
                </Link>
              </div>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="block text-xs tracking-wide hover:opacity-70"
                >
                  Shipping
                </Link>
                <Link
                  href="#"
                  className="block text-xs tracking-wide hover:opacity-70"
                >
                  Returns
                </Link>
              </div>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="block text-xs tracking-wide hover:opacity-70"
                >
                  Product care
                </Link>
                <Link
                  href="#"
                  className="block text-xs tracking-wide hover:opacity-70"
                >
                  Payment
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
