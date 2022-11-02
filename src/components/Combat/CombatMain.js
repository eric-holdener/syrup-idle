import MapGroup from "./MapGroup";
import { useState } from "react";

export default function CombatMain() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentMonster, setCurrentMonster] = useState(null);

  function newMonster() {
    const randomMonster = currentLocation.monsters[Math.floor(Math.random() * currentLocation.monsters.length)];
    setCurrentMonster(randomMonster);
  }

  return (
    <div>
      <p>Combat</p>
      <MapGroup name="Lith Harbor" setLocation={setCurrentLocation} setMonster={setCurrentMonster}/>
      <button onClick={() => console.log(currentLocation)}>Test Location</button>
      {currentLocation ? (
        <>
          <p>Current Location: {currentLocation.name}</p>
          <p>Current Monster: {currentMonster.name}</p>
          
          <button onClick={() => newMonster()}>Roll New Monster</button>
        </>
      ) : (
        <></>
      )}
    </div>

  )
}