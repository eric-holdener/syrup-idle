import { createSlice } from "@reduxjs/toolkit"

const characterSlice = createSlice({
  name: "character",
  initialState: {
    name: "Noob",
    currentHp: 10,
    name: "Teidan",
    job: "Warrior",
    level: 10,
    maxHp: 10,
    maxMp: 10,
    currentMp: 10,
    exp: 0,
    availableAp: 5,
    str: 5,
    dex: 5,
    int: 5,
    luk: 5
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