import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FiRss } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "samuelc-01",
  description: "Blog/Portfólio de Samuel Cristian dos Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm border-b">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center flex-1">
              <a href="/" className="text-2xl font-bold text-gray-900 font-serif tracking-tight">
                samuelc-01
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
                Contact <span className="text-xs">↗</span>
              </Link>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-4 pr-16 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-400 w-48"
                  disabled
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-xs px-2 py-0.5 rounded text-gray-500 select-none">
                  CTRL K
                </span>
              </div>
              <a href="https://github.com/samuelc-01" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-700 hover:text-black text-2xl" title="GitHub">
                <FiRss />
              </a>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-500">© 2024 samuelc-01. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
