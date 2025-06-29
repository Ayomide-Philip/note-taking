"use client";
import { FaRegBookmark, FaEdit, FaTrash } from "react-icons/fa";
import ModalOverLay from "./componet/modalOverlay";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import NewPostModal from "./componet/newPostOverlay";
export default function NoteApp() {
  const [userName, setUserName] = useState();
  const [newPost, isNewPost] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 1,
      heading: "Note Title",
      description:
        " This is a preview of the note content. It can span multiple lines and wrap within the card.",
    },
    {
      id: 2,
      heading: "Note Title",
      description:
        " This is a preview of the note content. It can span multiple lines and wrap within the card.",
    },
    {
      id: 3,
      heading: "Note Title",
      description:
        " This is a preview of the note content. It can span multiple lines and wrap within the card.",
    },
  ]);

  useEffect(() => {
    const username = localStorage.getItem("noteUserName");
    setUserName(username);
  }, []);

  useEffect(() => {
    if (userName !== null && userName !== undefined) {
      localStorage.setItem("noteUserName", userName);
    }
  }, [userName]);
  return (
    <>
      <ToastContainer />
      {userName === null ? <ModalOverLay setUserName={setUserName} /> : null}
      <main className="flex-1  flex flex-col lg:ml-64 pt-16 lg:pt-0">
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

        <section className="p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map(({ id, heading, description }) => (
            <div
              key={id}
              className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition duration-200 border border-gray-700 flex flex-col justify-between h-full"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{heading}</h3>
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

              <p className="text-sm text-gray-400 flex-grow">{description}</p>

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
      <button
        className="fixed bottom-6 cursor-pointer right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 w-16 h-16 rounded-full shadow-lg text-xl"
        onClick={() => {
          isNewPost(true);
        }}
      >
        +
      </button>
      {newPost ? <NewPostModal isNewPost={isNewPost} /> : null}
    </>
  );
}
