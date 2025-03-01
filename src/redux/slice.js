import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;

      //console.log(typeof state.pastes);
      state.pastes.push(paste);
      //console.log(paste);

      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Yes you have created new paste");
    },
    updateToPastes: (state, action) => {
      const paste  = action.payload;
      const index = state.pastes.findIndex((item)=>
        item._id===paste._id
      );

      if(index>=0){
        state.pastes[index] = paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste Updates ");
      }
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      console.log(pasteId);

      const index = state.pastes.findIndex((item)=>item._id===pasteId);

      if(index>=0){
        state.pastes.splice(index,1);

        localStorage.setItem("paste",JSON.stringify(state.pastes));
        toast.success("Paste Deleted")
      }

    },
    resetAllPaste: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, removeFromPastes, resetAllPaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
