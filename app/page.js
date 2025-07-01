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
    const note = localStorage.getItem("userNotes");
    setUserName(username);
    if (note === null) {
      setNotes([]);
    } else {
      setNotes(JSON.parse(note));
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
    toast("New Idea Added to your Collection 💡💡💡");
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
        {userName && (
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">
              Welcome back, {userName} 👋.
            </h1>
            <p className="text-gray-400 text-sm">
              Here&apos;s a quick look at your notes today.
            </p>
          </div>
        )}

        {notes.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(({ id, heading, description, bookmark }) => (
              <div
                key={id}
                className="relative bg-[#2d2d2d] border-l-4 border-yellow-400 rounded-lg px-5 py-4 shadow-sm hover:shadow-md transition duration-300"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(transparent 0px, transparent 22px, rgba(255,255,255,0.04) 23px)",
                  backgroundSize: "100% 24px",
                }}
              >
                {/* Bookmark */}
                <button
                  onClick={() => {
                    bookmarkNote(id);
                    const updated = notes.find((n) => n.id === id);
                    toast(
                      updated?.bookmark
                        ? "Bookmark removed"
                        : "Added to bookmarks successfully"
                    );
                  }}
                  title={bookmark ? "Remove Bookmark" : "Add Bookmark"}
                  className={`absolute top-3 right-3 z-10 ${
                    bookmark ? "bg-green-500" : "bg-gray-700"
                  } hover:bg-green-600 p-2 rounded-full shadow transition`}
                >
                  <FaRegBookmark className="h-4 w-4 text-white" />
                </button>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 break-words">
                  {heading}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap break-words">
                  {description}
                </p>

                {/* Actions */}
                <div className="mt-4 flex justify-end gap-3 text-sm border-t border-gray-700 pt-3">
                  <button
                    className="flex items-center gap-1 text-gray-400 hover:text-green-400 transition"
                    onClick={() => {
                      setEdittingDetails(notes.find((n) => n.id === id));
                      setEditting(true);
                    }}
                  >
                    <FaEdit className="h-4 w-4" />
                    Edit
                  </button>
                  <button
                    className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition"
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

      <button
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 w-16 h-16 rounded-full shadow-lg text-2xl"
        onClick={() => isNewPost(true)}
      >
        +
      </button>

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
