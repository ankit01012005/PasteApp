import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/slice";

function Home() {
  const [input, Setinput] = useState("");
  const [Value, setValue] = useState("");
  const [SearchParams, setSearchparams] = useSearchParams();
  const pasteId = SearchParams.get("pasteId");
  const dispatch = useDispatch();

  const allPaste = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPaste.find((p) => p._id === pasteId);
      Setinput(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function Createpaste() {
    const paste = {
      title: input,
      content: Value,
      _id: pasteId || Date.now().toString(36),
      CreatedAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    Setinput("");
    setValue("");
    setSearchparams({});
  }

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <div className="flex gap-4 mb-4">
        <input
          value={input}
          type="text"
          placeholder="Enter Title"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          onChange={(e) => Setinput(e.target.value)}
        />
        <button
          onClick={Createpaste}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <textarea
        placeholder="Enter content here..."
        className="w-full h-60 p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 resize-none"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Home;
