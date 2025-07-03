"use client";
import { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";

export default function Page() {
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    var notes = localStorage.getItem("userNotes");
    notes = JSON.parse(notes);
    const myBookMark = notes.filter((n) => {
      return n.bookmark === true;
    });
    setBookmark(myBookMark);
  }, []);
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8  flex items-center gap-2">
        ⭐ Bookmark Notes
      </h1>

      {bookmark && bookmark.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookmark.map(({ bookmark, id, heading, description }) => (
            <div
              key={id}
              className="relative bg-gray-700/40 border border-yellow-500/30 rounded-xl px-6 py-5 shadow-lg hover:shadow-yellow-300/10 hover:scale-[1.01] transition duration-300"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent 0px, transparent 24px, rgba(255,255,255,0.02) 25px)",
                backgroundSize: "100% 26px",
                backdropFilter: "blur(3px)",
              }}
            >
              {/* Floating Bookmark Button */}
              <button
                title={bookmark ? "Remove Bookmark" : "Add Bookmark"}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all shadow ${
                  bookmark
                    ? "bg-yellow-400 hover:bg-yellow-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              >
                <FaRegBookmark className="h-4 w-4 text-white" />
              </button>

              {/* Note Title */}
              <h3 className="text-xl font-semibold text-yellow-200 mb-3 leading-snug break-words">
                {heading}
              </h3>

              {/* Note Description */}
              <p className="text-gray-200 text-sm whitespace-pre-wrap break-words leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-white mt-20">
          <p className="text-5xl mb-4">📂</p>
          <p className="text-lg font-medium">No favourites found.</p>
          <p className="text-sm">
            You haven&apos;t added any notes to your favourites yet.
          </p>
        </div>
      )}
    </section>
  );
}
