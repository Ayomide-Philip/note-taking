import { useState } from "react";
import { toast } from "react-toastify";
export default function ModalOverLay({ setUserName }) {
  const [inputedUserName, setInputedUserName] = useState("");
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-gray-800 text-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
          title="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">
          Choose a Username of Your Choice:
        </h2>

        <input
          type="text"
          placeholder="e.g. johndoe"
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setInputedUserName(e.target.value);
          }}
        />

        <div className="mt-6 flex justify-end">
          <button
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
            onClick={() => {
              if (inputedUserName.length <= 3) {
                toast("Your Username should be greater than 3 letters");
              } else {
                setUserName(inputedUserName);
              }
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
