import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "../globals.css";

export const metadata: Metadata = {
  title: "Avenue Atelier",
  description: "Designed in Stockholm. Made in Italy.",
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <nav className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-xs tracking-wide hover:opacity-70">
              Shop
            </Link>
            <Link
              href="/soon/about"
              className="text-xs tracking-wide hover:opacity-70"
            >
              About
            </Link>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/soon" className="text-sm tracking-[0.2em] font-medium">
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

      {children}

      <footer className="snap-section py-12 px-6 border-t border-gray-200">
        <div className="w-[80%] mx-auto pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            {/* Left Column - Newsletter */}
            <div className="w-[250px]">
              <h4 className="text-sm tracking-wide mb-6">
                Join the world of Avenue Atelier
              </h4>
              <form
                action="https://app.kit.com/forms/18eea8851a/subscriptions"
                method="post"
                className="space-y-3"
              >
                <input
                  type="email"
                  name="email_address"
                  placeholder="your email address"
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-xs focus:outline-none focus:border-gray-900 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full border border-gray-900 py-3 text-xs tracking-wide hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Right Column - Navigation */}
            <div className="grid grid-cols-2 gap-64 ml-auto">
              <div className="space-y-3">
                <Link
                  href="/soon/about"
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

          {/* Bottom - Logo */}
          <div className="mt-16 text-center">
            <p className="text-sm tracking-[0.2em] font-medium">
              AVENUE ATELIER
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
