import { configureStore } from "@reduxjs/toolkit"
import characterReducer from "./character/CharacterSlice";

const Store = configureStore({
  reducer: {
    character: characterReducer
  }
})

export default Store;