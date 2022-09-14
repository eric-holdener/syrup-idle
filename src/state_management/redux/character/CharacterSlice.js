import { createSlice } from "@reduxjs/toolkit"

const characterSlice = createSlice({
  name: "character",
  initialState: {
    name: "Noob",
    hp: 10
  },
  reducers: {
    clear: (state) => {
      return {};
    },
    takeDamage: (state, { payload }) => {
      const damage  = payload;
      state.hp -= damage;
    },
    healCharacter: (state, { payload }) => {
      const healed = payload;
      state.hp += healed;
    }
  }
})

export const { takeDamage, healCharacter } = characterSlice.actions;
const characterReducer = characterSlice.reducer;

export default characterReducer;