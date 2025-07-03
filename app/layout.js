/* eslint-disable @next/next/no-html-link-for-pages */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/next";

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
  description: "Write out you idea and come back to ruminate on it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 text-white font-sans`}
      >
        <div className="min-h-screen flex flex-col">
          <nav className="w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-700 shadow">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
              <div className="text-md sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                📝 <span>NoteApp</span>
              </div>

              <div className="flex gap-6 text-sm font-medium text-gray-300">
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
                <a
                  href="/favourite"
                  className="hover:text-blue-400 transition-colors"
                >
                  Bookmark
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

          <main className="w-full max-w-6xl mx-auto flex-1 px-4 sm:px-6 pt-6 pb-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
