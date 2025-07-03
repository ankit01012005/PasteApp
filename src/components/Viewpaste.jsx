import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Viewpaste() {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <input
        value={paste?.title}
        type="text"
        disabled
        className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300"
      />
      <textarea
        value={paste?.content}
        disabled
        className="w-full mt-4 h-60 p-4 rounded-lg bg-gray-100 border border-gray-300 resize-none"
      ></textarea>
    </div>
  );
}

export default Viewpaste;
