import CharacterBox from "./CharacterBox";
import { useState } from "react";

export default function LoginSplash() {

  const [characters, setCharacters] = useState(() => {
    const saved = localStorage.getItem("savegames");
    let savegames = {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    };

    if (saved) {
      const initialValue = JSON.parse(saved);
      if (initialValue[1]) {
        savegames[1] = initialValue[1]
      };
      if (initialValue[2]) {
        savegames[2] = initialValue[2]
      };
      if (initialValue[3]) {
        savegames[3] = initialValue[3]
      };
      if (initialValue[4]) {
        savegames[4] = initialValue[4]
      };
      if (initialValue[5]) {
        savegames[5] = initialValue[5]
      };
    };

    return savegames;
  });

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <CharacterBox char={characters[1]} id="1"/>
      <CharacterBox char={characters[2]} id="2"/>
      <CharacterBox char={characters[3]} id="3"/>
      <CharacterBox char={characters[4]} id="4"/>
      <CharacterBox char={characters[5]} id="5"/>
    </div>
  )
}