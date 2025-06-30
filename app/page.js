"use client";
import { FaRegBookmark, FaEdit, FaTrash } from "react-icons/fa";
import ModalOverLay from "./componet/modalOverlay";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import NewPostModal from "./componet/newPostOverlay";
export default function NoteApp() {
  const [userName, setUserName] = useState();
  const [newPost, isNewPost] = useState(false);
  const [notes, setNotes] = useState([]);
  const [trash, setTrash] = useState([]);
  
  useEffect(() => {
    const username = localStorage.getItem("noteUserName");
    const userNotes = localStorage.getItem("userNotes");
    setUserName(username);
    if (userNotes === null) {
      setNotes([]);
    } else {
      setNotes(JSON.parse(userNotes));
    }
  }, []);

  useEffect(() => {
    if (userName !== null && userName !== undefined) {
      localStorage.setItem("noteUserName", userName);
    }
    if (notes.length >= 0) {
      localStorage.setItem("userNotes", JSON.stringify(notes));
    }
    if (trash.length > 0) {
      localStorage.setItem("trash", JSON.stringify(trash));
    }
  }, [userName, notes, trash]);

  function gettingLastIndex() {
    return notes.length > 0 ? notes.at(-1).id : 0;
  }

  function addNewNote(heading, noteBody) {
    setNotes((prev) => {
      return [
        ...prev,
        {
          id: gettingLastIndex() + 1,
          heading: heading,
          description: noteBody,
          bookmark: false,
        },
      ];
    });
  }

  function bookmarkNote(userId) {
    setNotes((prev) => {
      return prev.map((note) => {
        if (note.id == userId) {
          return {
            ...note,
            bookmark: !note.bookmark,
          };
        }
        return note;
      });
    });
  }

  function deleteNote(userId) {
    const newTrash = notes.find((note) => {
      return note.id === userId;
    });

    setTrash((prev) => {
      const newId = prev.length === 0 ? 0 : prev.at(-1).id;
      return [...prev, { ...newTrash, id: newId + 1 }];
    });

    setNotes((prev) => {
      return prev.filter((note) => {
        return note.id !== userId;
      });
    });
  }
  return (
    <>
      <ToastContainer />
      {userName === null ? <ModalOverLay setUserName={setUserName} /> : null}
      <main className="mt-10 sm:mt-0 flex-1  flex flex-col lg:ml-64 pt-10 lg:pt-0 pb-20 sm:pb-5">
        <div className="p-4  bg-gray-800 shadow-md hidden lg:flex justify-between items-center">
          <h2 className="text-xl font-semibold">All Notes</h2>
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search notes..."
              className="px-3 py-2 border border-white bg-gray-900 text-white rounded-md text-sm placeholder-gray-400"
            />
          </div>
        </div>

        <div className="p-6">
          {userName !== undefined && userName !== null ? (
            <h1 className="text-2xl font-bold mb-2">
              Welcome back, {userName} 👋
            </h1>
          ) : null}
          <p className="text-gray-400 text-sm">
            Here&apos;s a quick look at your notes today.
          </p>
        </div>

        {notes.length > 0 ? (
          <section className="p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(({ id, heading, description, bookmark }) => (
              <div
                key={id}
                className="relative bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-blue-400/20 hover:scale-[1.015] transition duration-300 h-full"
              >
                {/* Floating Bookmark */}
                <button
                  onClick={() => bookmarkNote(id)}
                  title={bookmark ? "Remove Bookmark" : "Add Bookmark"}
                  className={`absolute top-4 right-4 z-10 ${
                    bookmark ? "bg-green-500" : "bg-gray-700"
                  } hover:bg-green-700 p-2 rounded-full shadow transition`}
                >
                  <FaRegBookmark
                    className={`h-4 w-4 text-white ${
                      bookmark ? "fill-white" : ""
                    }`}
                  />
                </button>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {heading}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm whitespace-pre-line flex-grow">
                  {description}
                </p>

                {/* Footer with actions */}
                <div className="mt-6 flex justify-end gap-4 border-t border-gray-700 pt-4">
                  <button
                    className="flex items-center gap-1 text-gray-400 hover:text-green-500 text-sm transition"
                    title="Edit"
                  >
                    <FaEdit className="h-4 w-4" />
                    Edit
                  </button>
                  <button
                    className="flex items-center gap-1 text-gray-400 hover:text-red-500 text-sm transition"
                    title="Delete"
                    onClick={() => {
                      deleteNote(id);
                    }}
                  >
                    <FaTrash className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <div className="p-6 flex flex-col items-center justify-center text-center text-gray-400">
            <div className="text-5xl mb-4">📝</div>
            <h2 className="text-xl font-semibold mb-2">No Notes Yet</h2>
            <p className="text-sm">
              You haven&apos;t written any notes yet. Click the{" "}
              <span className="text-blue-400 font-medium">+ button</span> to add
              your first note.
            </p>
          </div>
        )}
      </main>

      <button
        className="fixed bottom-6 cursor-pointer right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 w-16 h-16 rounded-full shadow-lg text-xl"
        onClick={() => {
          isNewPost(true);
        }}
      >
        +
      </button>
      {newPost ? (
        <NewPostModal isNewPost={isNewPost} addNewNote={addNewNote} />
      ) : null}
    </>
  );
}
