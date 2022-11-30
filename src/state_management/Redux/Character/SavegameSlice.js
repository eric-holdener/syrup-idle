import { createSlice } from "@reduxjs/toolkit";

const savegameSlice = createSlice({
  name: "savegame",
  initialState: null,
  reducers: {
    clearSave: (state) => {
      return null;
    },
    createPointer: (state, { payload }) => {
      return payload;
    }
  }
})

export const { clearSave, createPointer } = savegameSlice.actions;
const savegameReducer = savegameSlice.reducer;

export default savegameReducer;