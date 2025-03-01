import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import {addToPastes,updateToPastes} from '../redux/slice'



function Viewpaste() {

  const {id} = useParams();
  console.log(id)
  const allPastes = useSelector((state)=>state.paste.pastes);
  const paste = allPastes.filter((p)=>p._id===id)[0]
  console.log(allPastes)
  console.log(paste)

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between p-1 h-13">
        <input
          value={paste.title}
          type="text"
          placeholder="Enter Title"
          className=" mt-2 rounded-2xl w-[66%] pl-4 pt-1 pb-1 bg-black"
          disabled
          onChange={(e) => {
            Setinput(e.target.value);
          }}
        />
       
      </div>
      <div>
        <textarea
        disabled
          placeholder="Enter content here..."
          className=" rounded-2xl bg-black p-6 m-5 min-w-90 min-h-105"
          value={paste.content}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  )
}

export default Viewpaste