import CharacterBox from "./CharacterBox";
import { useState } from "react";

export default function LoginSplash() {

  const [characters, setCharacters] = useState(() => {
    const saved = localStorage.getItem("savegames");
    let savegames = {}
    if (saved) {
      const initialValue = JSON.parse(saved);
    } else {
      savegames = {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null
      }
    }
    return savegames;
  });

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <CharacterBox char={characters[1]}/>
      <CharacterBox char={characters[2]}/>
      <CharacterBox char={characters[3]}/>
      <CharacterBox char={characters[4]}/>
      <CharacterBox char={characters[5]}/>
    </div>
  )
}