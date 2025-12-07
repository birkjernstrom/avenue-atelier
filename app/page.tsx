"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <nav className="flex items-center justify-center px-6 py-4">
          <Link href="#" className="text-sm tracking-[0.2em] font-medium">
            AVENUE ATELIER
          </Link>
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
              <span className="text-white tracking-[0.3em] font-medium mb-2">
                AVENUE ATELIER
              </span>
              <span className="text-white text-sm tracking-[0.2em] font-light">
                Launching Soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
