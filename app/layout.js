/* eslint-disable @next/next/no-html-link-for-pages */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NoteApp",
  description: "Write your thoughts and save them",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 text-white font-sans`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <nav className="w-full bg-gray-900/80 border-b border-gray-700 shadow-inner backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                📝 NoteApp
              </h1>
              <div className="flex gap-6 text-sm font-medium text-gray-400">
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
                <a
                  href="/favourite"
                  className="hover:text-blue-400 transition-colors"
                >
                  Favourites
                </a>
                <a
                  href="/trash"
                  className="hover:text-blue-400 transition-colors"
                >
                  Trash
                </a>
              </div>
            </div>
          </nav>

          {/* Page Content */}
          <main className="w-full max-w-6xl mx-auto flex-1 px-4 sm:px-6 pt-6 pb-10">
            {children}
            <Analytics />
          </main>
        </div>
      </body>
    </html>
  );
}
