import { createSlice } from "@reduxjs/toolkit"

const characterSlice = createSlice({
  name: "character",
  initialState: null,
  reducers: {
    clear: (state) => {
      return null;
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
      console.log(payload);
      switch(payload) {
        case 1:
          state.str += 1;
          break;
        case 2:
          state.dex += 1;
          break;
        case 3:
          state.int += 1;
          break;
        case 4:
          state.luk += 1;
          break;
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
    },
    addEquip: (state, { payload }) => {
      state.equip_inventory.push(payload);
    }
  }
})

export const { takeDamage, healCharacter, addExp, increaseStat, addEquip } = characterSlice.actions;
const characterReducer = characterSlice.reducer;

export default characterReducer;

//{
//   currentHp: 10,
//   name: "Teidan",
//   job: "Warrior",
//   level: 10,
//   maxHp: 10,
//   maxMp: 10,
//   currentMp: 10,
//   exp: 0,
//   availableAp: 5,
//   str: 5,
//   dex: 5,
//   int: 5,
//   luk: 5,
//   xpTNL: 1144,
//   inventory: {},
//   equipment: {
//     cap: null,
//     medal: null,
//     forehead: null,
//     ring_1: null,
//     ring_2: null,
//     ring_3: null,
//     ring_4: null,
//     eye_acc: null,
//     ear_acc: null,
//     mantle: null,
//     chest: null,
//     pendant: null,
//     shoulder: null,
//     shield: null,
//     gloves: null,
//     pants: null,
//     belt: null,
//     shoes: null
//   },
//   equip_inventory: [],
//   use_inventory: [],
//   etc_inventory: []
// }