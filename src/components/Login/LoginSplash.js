import CharacterBox from "./CharacterBox";
import { useState } from "react";

export default function LoginSplash() {

  const [characters, setCharacters] = useState(() => {
    const saved = localStorage.getItem("savegames");
    let savegames = []
    if (saved) {
      const initialValue = JSON.parse(saved);
      for (const [key, value] of Object.entries(initialValue)) {
        savegames.push([value, key]);
      }
    };

    return savegames;
  });

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {characters.map((character) => <CharacterBox char={character[0]} id={character[1]} key={character[1]}/>)}
      <CharacterBox char={null} id={characters.length}/>
    </div>
  )
}