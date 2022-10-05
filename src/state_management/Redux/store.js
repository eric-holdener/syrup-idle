import { configureStore } from "@reduxjs/toolkit"
import characterReducer from "./Character/CharacterSlice";

const Store = configureStore({
  reducer: {
    character: characterReducer
  }
})

export default Store;