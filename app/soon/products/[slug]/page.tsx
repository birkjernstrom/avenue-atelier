"use client";

import Image from "next/image";
import { useState, use } from "react";

const PRODUCTS = {
  tote: {
    name: "Elsa Tote Bag",
    description: "Black croco",
    price: 7995,
    image: "/product/tote/1.jpg",
  },
  pouch: {
    name: "Elsa Pouch Bag",
    description: "Black croco",
    price: 3995,
    image: "/product/clutch/1.jpg",
  },
};

export default function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const product = PRODUCTS[slug as keyof typeof PRODUCTS];
  if (!product) {
    return <div>Product not found</div>;
  }

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <section className="snap-section flex flex-col py-80 px-8 min-h-screen">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
          {/* Product Image */}
          <div className="flex items-start justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-start w-[320px]">
            <h1 className="text-sm font-semibold mb-4">{product.name}</h1>
            <p className="text-base text-gray-800 mb-3">
              {product.description}
            </p>
            <p className="text-base text-gray-800 mb-8">{product.price} SEK</p>

            <button className="w-full border border-black py-4 text-sm tracking-[0.1em] hover:bg-black hover:text-white transition-colors mb-10">
              ADD TO CART
            </button>

            <div className="border-t border-gray-200">
              {/* Details */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection("details")}
                  className="w-full flex justify-between items-center py-4 text-sm text-gray-700 hover:text-black"
                >
                  <span>Details</span>
                  <span className="text-lg">
                    {openSection === "details" ? "−" : "+"}
                  </span>
                </button>
                {openSection === "details" && (
                  <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                    Crafted from premium black croco-embossed leather, the Elsa
                    Tote Bag features a spacious interior with a secure zip
                    closure. The structured silhouette and refined details make
                    it perfect for everyday use.
                  </div>
                )}
              </div>

              {/* Measurements */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection("measurements")}
                  className="w-full flex justify-between items-center py-4 text-sm text-gray-700 hover:text-black"
                >
                  <span>Measurements</span>
                  <span className="text-lg">
                    {openSection === "measurements" ? "−" : "+"}
                  </span>
                </button>
                {openSection === "measurements" && (
                  <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                    <p>Height: 30 cm</p>
                    <p>Width: 40 cm</p>
                    <p>Depth: 15 cm</p>
                    <p>Handle drop: 20 cm</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection("shipping")}
                  className="w-full flex justify-between items-center py-4 text-sm text-gray-700 hover:text-black"
                >
                  <span>Shipping & Returns</span>
                  <span className="text-lg">
                    {openSection === "shipping" ? "−" : "+"}
                  </span>
                </button>
                {openSection === "shipping" && (
                  <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                    <p>Free shipping on all orders over 1000 SEK.</p>
                    <p className="mt-2">
                      Returns accepted within 14 days of delivery. Items must be
                      unused and in original packaging.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
