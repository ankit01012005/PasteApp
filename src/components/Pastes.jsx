import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPastes } from "../redux/slice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

function Pastes() {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setsearchTerm] = useState("");

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handledelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  const handleShare = (pasteId) => {
  const shareUrl = `${window.location.origin}/paste/${pasteId}`;
  if (navigator.share) {
    navigator.share({
      title: 'Check out my paste',
      url: shareUrl
    });
  } else {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard');
  }
};


  return (
    <div className="max-w-5xl mx-auto mt-6">
      <input
        value={searchTerm}
        type="search"
        placeholder="Search here..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring focus:ring-blue-200"
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <div className="mt-6 space-y-4">
        {filterData.length > 0 &&
          filterData.map((paste) => (
            <div key={paste?._id} className="p-4 rounded-xl shadow-md bg-white">
              <h2 className="text-lg font-semibold text-blue-700">{paste.title}</h2>
              <p className="mt-2 text-gray-700">{paste.content}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <NavLink to={`/pastes/${paste?._id}`} className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">View</NavLink>
                <NavLink to={`/?pasteId=${paste?._id}`} className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600">Edit</NavLink>
                <button onClick={() => handledelete(paste?._id)} className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                <button onClick={() => { navigator.clipboard.writeText(paste?.content); toast.success("Copied"); }} className="px-4 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">Copy</button>
                <button onClick={()=>handleShare(paste?._id)} className="px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600">Share</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Pastes;
