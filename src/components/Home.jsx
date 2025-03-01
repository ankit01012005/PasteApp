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

  const allPaste = useSelector((state) => {
    return state.paste.pastes;
  });
  console.log(allPaste);
  useEffect(() => {
    if (pasteId) {
      //console.log(pasteId)

      const paste = allPaste.find((p) => p._id === pasteId);
      console.log(paste);
      Setinput(paste.title);

      setValue(paste.content);
      console.log("Exit in effect");
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
      dispatch(updateToPastes(paste)); //updateToPastes
      // update
    } else {
      dispatch(addToPastes(paste)); //addToPastes
      //Create
    }

    Setinput("");
    setValue("");
    setSearchparams({});
  }

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between p-1 h-13">
        <input
          value={input}
          type="text"
          placeholder="Enter Title"
          className=" mt-2 rounded-2xl w-[66%] pl-4 pt-1 pb-1 bg-black"
          onChange={(e) => {
            Setinput(e.target.value);
          }}
        />
        <button
          onClick={Createpaste}
          className=" text-xs bg-black rounded-2xl p-2 mt-2 overflow-hidden text-8 pb-2 "
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <div>
        <textarea
          placeholder="Enter content here..."
          className=" rounded-2xl bg-black p-6 m-5 min-w-90 min-h-105"
          value={Value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default Home;
