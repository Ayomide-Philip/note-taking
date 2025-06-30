"use client";
import { FaRegBookmark, FaEdit, FaTrash } from "react-icons/fa";
import ModalOverLay from "./componet/modalOverlay";
import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import NewPostModal from "./componet/newPostOverlay";
import Edit from "./componet/edit";
export default function NoteApp() {
  const [userName, setUserName] = useState();
  const [newPost, isNewPost] = useState(false);
  const [editting, setEditting] = useState(false);
  const [notes, setNotes] = useState([]);
  const [trash, setTrash] = useState([]);
  const [edittingDetails, setEdittingDetails] = useState();

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
    toast("New Note Added Sucessfully.");
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
    toast("Note moved to trash sucessfully.");
  }

  function edittingUserNote({ id, heading, description, bookmark }) {
    setNotes((prev) => {
      return prev.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            heading: heading,
            description: description,
            bookmark: bookmark,
          };
        }
        return note;
      });
    });
  }

  return (
    <>
      <ToastContainer />
      {userName === null && <ModalOverLay setUserName={setUserName} />}

      <main className="w-full max-w-6xl mx-auto p-6 flex-1">
        {/* Welcome message */}
        {userName && (
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">
              Welcome back, {userName} 👋
            </h1>
            <p className="text-gray-400 text-sm">
              Here&apos;s a quick look at your notes today.
            </p>
          </div>
        )}

        {/* Notes Display */}
        {notes.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(({ id, heading, description, bookmark }) => (
              <div
                key={id}
                className="relative bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-blue-400/20 hover:scale-[1.015] transition duration-300"
              >
                {/* Floating Bookmark */}
                <button
                  onClick={() => {
                    bookmarkNote(id);
                    const updated = notes.find((n) => n.id === id);
                    toast(
                      updated?.bookmark
                        ? "Added to bookmarks successfully"
                        : "Bookmark removed"
                    );
                  }}
                  title={bookmark ? "Remove Bookmark" : "Add Bookmark"}
                  className={`absolute top-4 right-4 z-10 ${
                    bookmark ? "bg-green-500" : "bg-gray-700"
                  } hover:bg-green-600 p-2 rounded-full shadow transition`}
                >
                  <FaRegBookmark className="h-4 w-4 text-white" />
                </button>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {heading}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm whitespace-pre-line flex-grow">
                  {description}
                </p>

                {/* Actions */}
                <div className="mt-6 flex justify-end gap-4 border-t border-gray-700 pt-4">
                  <button
                    className="flex items-center gap-1 text-gray-400 hover:text-green-500 text-sm transition"
                    title="Edit"
                    onClick={() => {
                      setEdittingDetails(notes.find((n) => n.id === id));
                      setEditting(true);
                    }}
                  >
                    <FaEdit className="h-4 w-4" />
                    Edit
                  </button>
                  <button
                    className="flex items-center gap-1 text-gray-400 hover:text-red-500 text-sm transition"
                    title="Delete"
                    onClick={() => deleteNote(id)}
                  >
                    <FaTrash className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <div className="flex flex-col items-center justify-center text-center text-gray-400 mt-20">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-semibold mb-2">No Notes Yet</h2>
            <p className="text-sm">
              You haven&apos;t written any notes yet. Click the{" "}
              <span className="text-blue-400 font-medium">+ button</span> to get
              started.
            </p>
          </div>
        )}
      </main>

      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 w-16 h-16 rounded-full shadow-lg text-2xl"
        onClick={() => isNewPost(true)}
      >
        +
      </button>

      {/* Modals */}
      {newPost && (
        <NewPostModal isNewPost={isNewPost} addNewNote={addNewNote} />
      )}
      {editting && (
        <Edit
          setEditting={setEditting}
          edittingDetails={edittingDetails}
          edittingUserNote={edittingUserNote}
        />
      )}
    </>
  );
}
