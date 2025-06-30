import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        {/* App Wrapper */}
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <nav className="w-full bg-gray-900/80 border-b border-gray-700 shadow-inner backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                📝 NoteApp
              </h1>
              <div className="text-sm text-gray-400">Write & Save Notes</div>
            </div>
          </nav>

          {/* Page Content */}
          <main className="w-full max-w-6xl mx-auto flex-1 px-4 sm:px-6 pt-6 pb-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
