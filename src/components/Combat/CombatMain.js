import MapGroup from "./MapGroup";
import { useState } from "react";

export default function CombatMain() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentMonster, setCurrentMonster] = useState(null);

  function newMonster() {
    const randomMonster = currentLocation.monsters[Math.floor(Math.random() * currentLocation.monsters.length)];
    setCurrentMonster(randomMonster);
  }

  function resetStates() {
    setCurrentLocation(null);
    setCurrentMonster(null);
  }

  return (
    <div>
      <p>Combat</p>
      <MapGroup name="Lith Harbor" setLocation={setCurrentLocation} setMonster={setCurrentMonster}/>
      {currentLocation ? (
        <div className="flex flex-col m-3 p-3 items-left gap-3">
          <p>Current Location: {currentLocation.name}</p>
          <p>Current Monster: {currentMonster.name}</p>
          
          <button onClick={() => newMonster()} className="bg-black text-white rounded p-1">Roll New Monster</button>
          <button onClick={() => resetStates()} className="bg-black text-white rounded p-1">Run from Fight</button>
        </div>
      ) : (
        <>
          <p>No location currently selected</p>
        </>
      )}
    </div>

  )
}