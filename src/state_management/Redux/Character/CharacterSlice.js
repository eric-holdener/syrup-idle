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
      if (state.availableAp > 0) {
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
          default:
            console.log("Increase stat error - stat not recognized.");
        };
        state.availableAp -= 1;
      } else {
        console.log("Increase stat error - not enough AP to process.");
      }
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
    },
    setCharacter: (state, { payload}) => {
      return payload;
    },
    setTraining: (state, { payload }) => {
      state.currently_training = payload;
    },
    addItem: (state, { payload }) => {
      console.log(payload);
      const id = payload.item.id
      if (id in state.inventory) {
        const quantity = payload.quantity + state.inventory[id].quantity;
        state.inventory[id] = { ...state.inventory[id], quantity: quantity}
      } else {
        return {
          ...state,
          inventory: {
            ...state.inventory, [id]: payload
          }
        }
      }
    }
  }
})

export const { takeDamage, healCharacter, addExp, increaseStat, addEquip, setCharacter, clear, setTraining, addItem } = characterSlice.actions;
const characterReducer = characterSlice.reducer;

export default characterReducer;