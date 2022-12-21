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
      // item types:
      // 1 - equipment
      // 2 - usables
      // 3 - etc (crafting items)
      let inventoryType = null;
      const id = payload.item.id;

      if (payload.type === 1) {
        inventoryType = "equipInventory";
      } else if (payload.type === 2) {
        inventoryType = "useInventory";
      } else if (payload.type === 3) {
        inventoryType = "etcInventory";
      } else {
        console.log("Invalid inventory type detected");
        return
      }

      if (inventoryType != null) {
        if (id in state[inventoryType]) {
          const quantity = payload.item.quantity + state[inventoryType][id].item.quantity;
          state[inventoryType][id].item = { ...state[inventoryType][id].item, quantity: quantity}
        } else {
          return {
            ...state,
            [inventoryType]: {
              ...state[inventoryType], [id]: payload
            }
          }
        }
      }
    },
    deleteItem: (state, { payload }) => {
      console.log(payload);
      // item types:
      // 1 - equipment
      // 2 - usables
      // 3 - etc (crafting items)
      let inventoryType = null;
      const id = payload.id;

      if (payload.type === 1) {
        inventoryType = "equipInventory";
      } else if (payload.type === 2) {
        inventoryType = "useInventory";
      } else if (payload.type === 3) {
        inventoryType = "etcInventory";
      } else {
        console.log("Invalid inventory type detected");
        return
      };

      if (inventoryType != null) {
        const quantity = state[inventoryType][id].item.quantity - payload.quantity
        if (quantity === 0) {
          return {
            ...state, 
            [inventoryType]: {
              ...state[inventoryType]
            }
          }
        } else {
          state[inventoryType][id].item = { ...state[inventoryType][id].item, quantity: quantity}
        }
      }
    },
  }
})

export const { takeDamage, healCharacter, addExp, increaseStat, addEquip, setCharacter, clear, setTraining, addItem, deleteItem } = characterSlice.actions;
const characterReducer = characterSlice.reducer;

export default characterReducer;