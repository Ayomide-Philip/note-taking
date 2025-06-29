import { FaRegBookmark, FaEdit, FaTrash } from "react-icons/fa";

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
              className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition duration-200 border border-gray-700 flex flex-col justify-between h-full"
            >
              {/* Title + Bookmark */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Note Title {i + 1}</h3>
                <button
                  className="text-gray-400 hover:text-blue-500"
                  title="Bookmark"
                >
                  <div
                    className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center"
                    title="Bookmark"
                  >
                    <FaRegBookmark className="text-white h-4 w-4" />
                  </div>
                </button>
              </div>

              {/* Content */}
              <p className="text-sm text-gray-400 flex-grow">
                This is a preview of the note content. It can span multiple
                lines and wrap within the card.
              </p>

              {/* Edit & Delete Buttons */}
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  className="flex items-center gap-1 text-gray-400 hover:text-green-500 text-sm"
                  title="Edit"
                >
                  <FaEdit className="h-4 w-4" />
                  Edit
                </button>
                <button
                  className="flex items-center gap-1 text-gray-400 hover:text-red-500 text-sm"
                  title="Delete"
                >
                  <FaTrash className="h-4 w-4" />
                  Delete
                </button>
              </div>
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
