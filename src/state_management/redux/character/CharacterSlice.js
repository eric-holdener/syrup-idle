import { createSlice } from "@reduxjs/toolkit"

const characterSlice = createSlice({
  name: "character",
  initialState: {
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
    luk: 5,
    xpTNL: 1144
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
    },
    increaseStat: (state, { payload }) => {
      switch(payload) {
        case 1:
          state.str += 1;
        case 2:
          state.dex += 1;
        case 3:
          state.int += 1;
        case 4:
          state.luk += 1;
      };
      state.availableAp -= 1;
    },
    addExp: (state, { payload }) => {
      state.exp += payload;
      if (state.exp >= state.xpTNL) {
        state.exp = state.exp - state.xpTNL;
        state.xpTNL = state.xpTNL * 1.2;
        state.level += 1;
      }
    }
  }
})

export const { takeDamage, healCharacter } = characterSlice.actions;
const characterReducer = characterSlice.reducer;

export default characterReducer;