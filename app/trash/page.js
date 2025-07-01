"use client";
import { useEffect, useState } from "react";
import { FaTrashRestoreAlt, FaTrash } from "react-icons/fa";

export default function TrashPage() {
  const [userTrash, setUserTrash] = useState([]);
  const [userNote, setUserNote] = useState([]);
  useEffect(() => {
    const trash = localStorage.getItem("trash");
    const userNote = localStorage.getItem("userNotes");
    if (trash) {
      setUserTrash(JSON.parse(trash));
    }
    if (userNote) {
      setUserNote(JSON.parse(userNote));
    }
  }, []);

  return (
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-2">
      <h2 className="text-2xl font-bold mb-6 text-white">🗑️ Trash</h2>

      {userTrash && userTrash.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userTrash.map(({ id, heading, description }) => (
            <div
              key={id}
              className="relative bg-[#2d2d2d] border-l-4 border-yellow-400 rounded-lg px-5 py-4 shadow-sm hover:shadow-md transition duration-300"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent 0px, transparent 22px, rgba(255,255,255,0.04) 23px)",
                backgroundSize: "100% 24px",
              }}
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-2 break-words">
                {heading}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap break-words mb-4">
                {description}
              </p>

              {/* Actions */}
              <div className="mt-3 flex justify-between items-center border-t border-gray-700 pt-3 text-sm text-gray-400">
                <button
                  className="flex items-center gap-2 hover:text-green-400 transition"
                  title="Restore"
                  onClick={() => restoreNote(id)}
                >
                  <FaTrashRestoreAlt className="h-4 w-4" />
                  Restore
                </button>
                <button
                  className="flex items-center gap-2 hover:text-red-400 transition"
                  title="Delete Permanently"
                  onClick={() => permanentlyDeleteNote(id)} // <- Define this too
                >
                  <FaTrash className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div className="mt-20 text-center text-gray-400">
          <div className="text-5xl mb-4">🗑️</div>
          <h3 className="text-xl font-semibold mb-2">Trash is empty</h3>
          <p className="text-sm">
            Deleted notes will appear here. Restore or permanently delete them.
          </p>
        </div>
      )}
    </main>
  );
}
