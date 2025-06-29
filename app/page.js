export default function NoteApp() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-900 text-white">
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">NotesApp</h1>
        <nav className="flex gap-4 text-sm">
          <a href="#" className="hover:text-blue-400">
            All Notes
          </a>
          <a href="#" className="hover:text-blue-400">
            Favorites
          </a>
          <a href="#" className="hover:text-blue-400">
            Trash
          </a>
        </nav>
      </header>

      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-md flex-col z-40">
        <div className="p-6 font-bold text-2xl border-b border-gray-700">
          NotesApp
        </div>
        <nav className="p-4 space-y-4">
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            All Notes
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            Favorites
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            Trash
          </a>
        </nav>
      </aside>

      <main className="flex-1  flex flex-col lg:ml-64 pt-16 lg:pt-0">
        <div className="p-4  bg-gray-800 shadow-md hidden lg:flex justify-between items-center">
          <h2 className="text-xl font-semibold">All Notes</h2>
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search notes..."
              className="px-3 py-2 border border-gray-600 bg-gray-900 text-white rounded-md text-sm placeholder-gray-400"
            />
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">Welcome back 👋</h1>
          <p className="text-gray-400 text-sm">
            Here&apos;s a quick look at your notes today.
          </p>
        </div>

        <section className="p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="relative bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition duration-200 border border-gray-700"
            >
              {/* Action Icons */}
              <div className="absolute top-3 right-3 flex space-x-2">
                <button
                  className="text-gray-400 hover:text-blue-500"
                  title="Bookmark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5v14l7-5 7 5V5z"
                    />
                  </svg>
                </button>
                <button
                  className="text-gray-400 hover:text-green-500"
                  title="Edit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4h2M12 4v16m9 0H3"
                    />
                  </svg>
                </button>
                <button
                  className="text-gray-400 hover:text-red-500"
                  title="Delete"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Note Content */}
              <h3 className="text-lg font-semibold mb-2">Note Title {i + 1}</h3>
              <p className="text-sm text-gray-400">
                This is a preview of the note content. It can span multiple
                lines and wrap within the card.
              </p>
            </div>
          ))}
        </section>
      </main>

      <button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg text-xl">
        +
      </button>
    </div>
  );
}
