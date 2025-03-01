import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPastes } from "../redux/slice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

function Pastes() {
  const pastes = useSelector((state) => {
    return state.paste.pastes;
  });
  //console.log(pastes);
  //console.log(Pastes);
  const dispatch = useDispatch();

  const [searchTerm, setsearchTerm] = useState("");

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filterData);
  function handledelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
        value={searchTerm}
        type="search"
        placeholder="Search here"
        className="p-1 pl-3 mt-5 rounded-2xl border-amber-50  min-w-[500px] bg-black"
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 rounded  mt-5">
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div className="border rounded-l" key={paste?._id}>
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <button className=" p-1 rounded-xl border mt-1 mb-1">
                    {" "}
                    <NavLink to={`/pastes/${paste?._id}`}>View</NavLink>
                  </button>
                  <button className=" p-1 rounded-xl border mt-1 mb-1">
                    <NavLink to={`/?pasteId=${paste?._id}`}>Edit</NavLink>
                  </button>
                  <button
                    className=" p-1 rounded-xl border mt-1 mb-1"
                    onClick={() => handledelete(paste?._id)}
                  >
                    Delete
                  </button>
                  <button
                    className=" p-1 rounded-xl border mt-1 mb-1"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied");
                    }}
                  >
                    Copy
                  </button>
                  <button className=" p-1 rounded-xl border mt-1 mb-1">
                    Share
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Pastes;
