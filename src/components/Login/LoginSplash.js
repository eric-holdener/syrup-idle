import CharacterBox from "./CharacterBox";
import { useState } from "react";

export default function LoginSplash() {

  const [characters, setCharacters] = useState(() => {
    const saved = localStorage.getItem("savegames");
    let savegames = null
    if (saved) {
      const initialValue = JSON.parse(saved);
    } else {
      savegames = {
        1: {},
        2: {},
        3: {},
        4: {},
        5: {}
      }
    }
    return savegames;
    console.log(saved)
  })
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <CharacterBox />
      <CharacterBox />
      <CharacterBox />
      <CharacterBox />
      <CharacterBox />
    </div>
  )
}