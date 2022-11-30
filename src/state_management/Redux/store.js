import { configureStore } from "@reduxjs/toolkit"
import characterReducer from "./Character/CharacterSlice";
import savegameReducer from "./Character/SavegameSlice";

const Store = configureStore({
  reducer: {
    character: characterReducer,
    savegame: savegameReducer
  }
})

export default Store;