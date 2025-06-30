import { useState } from "react";

export default function Edit({ setEditting }) {
  const [heading, setHeading] = useState("");
  const [noteBody, setNoteBody] = useState("");
  return (
    <div className="fixed inset-0 z-50 bg-white/10 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-gray-900 text-white rounded-xl shadow-xl w-full max-w-lg p-6 relative">
        <button
          className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-red-500 text-2xl"
          title="Close"
          onClick={() => {
            setEditting(false);
          }}
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-6">Create a New Note:</h2>

        <input
          type="text"
          placeholder="Note Title"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setHeading(e.target.value);
          }}
        />

        <textarea
          placeholder="What's on your mind?"
          className="w-full h-32 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          onChange={(e) => {
            setNoteBody(e.target.value);
          }}
        />

        <div className="mt-6 flex justify-end gap-4">
          <button
            className="bg-gray-700 cursor-pointer hover:bg-gray-600 px-5 py-2 rounded-md font-medium text-sm"
            onClick={() => {
              setEditting(false);
            }}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 cursor-pointer rounded-md font-medium text-sm"
            onClick={() => {
              addNewNote(heading, noteBody);
              isNewPost(false);
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
