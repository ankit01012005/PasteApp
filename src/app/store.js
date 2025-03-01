import { configureStore } from '@reduxjs/toolkit'
import pasteSlice from '../redux/slice'
export const store = configureStore({
  reducer: {
    paste: pasteSlice,
    //console.log(paste);
  },
})