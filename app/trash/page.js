"use client";
export default function Page() {
  return (
    <main className="mt-10 sm:mt-0 flex-1 flex flex-col lg:ml-64 pt-10 lg:pt-0 pb-20 sm:pb-5">
      <div className="p-4 bg-gray-800 shadow-md hidden lg:flex justify-between items-center">
        <h2 className="text-xl font-semibold">Trashed Notes</h2>
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search trashed notes..."
            className="px-3 py-2 border border-white bg-gray-900 text-white rounded-md text-sm placeholder-gray-400"
          />
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-2">Trash Bin 🗑️</h1>
        <p className="text-gray-400 text-sm">
          These are notes you’ve deleted. Restore or remove them permanently.
        </p>
      </div>

      <section className="p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="relative bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 flex flex-col justify-between shadow hover:shadow-red-400/20 hover:scale-[1.015] transition duration-300 h-full"
          >
            {/* Title */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-red-300">
                Trashed Note {i + 1}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm whitespace-pre-line flex-grow">
              This is a deleted note that used to live happily on your board.
              Now it&apos;s waiting to be restored or wiped forever.
            </p>

            {/* Footer Actions */}
            <div className="mt-6 flex justify-end gap-4 border-t border-gray-700 pt-4">
              <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 text-sm transition">
                Restore
              </button>
              <button className="flex items-center gap-1 text-gray-400 hover:text-red-500 text-sm transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
