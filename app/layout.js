import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  description: "Write your thought and save them",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-900 text-white font-sans">
          
          {/* Top Nav for Mobile */}
          <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center border-b border-gray-700 mb-24">
            <h1 className="font-bold text-sm tracking-wide">📝 NotesApp</h1>
            <nav className="flex gap-4 text-sm font-medium">
              <a href="#" className="hover:text-blue-400 transition-colors">All</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Favorites</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Trash</a>
            </nav>
          </header>

          {/* Sidebar Nav for Desktop */}
          <aside className="hidden lg:flex fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg flex-col z-40 border-r border-gray-700">
            <div className="p-6 text-2xl font-extrabold border-b border-gray-700 tracking-tight">
              📝 NotesApp
            </div>
            <nav className="flex flex-col gap-2 px-4 py-6 text-sm font-medium">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                All Notes
              </Link>
              <Link
                href="#"
                className="px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Favorites
              </Link>
              <Link
                href="#"
                className="px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Trash
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          {children}
        </div>
      </body>
    </html>
  );
}
