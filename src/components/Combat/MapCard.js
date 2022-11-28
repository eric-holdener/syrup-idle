import { All_Locations } from "../../helpers/Locations/AllLocations";

export default function MapCard(props) {
  const maps = All_Locations[props.locationName];

  function handleClick(location) {
    props.setLocation(location);
    const randomMonster = location.monsters[Math.floor(Math.random() * location.monsters.length)];
    props.setMonster(randomMonster);
  }
  return (
    <div className="flex flex-col gap-3 m-2">
      {maps.map((location) => 
        <button key={location.name} onClick={() => handleClick(location)} className="bg-teal-600 text-white rounded p-1 w-full">
          <p>{location.name}</p>
          <div>
            <p>Monsters:</p>
            {location.monsters.map((monster) => 
              <div className="bg-white text-black p-1 m-1 flex justify-between" key={location.name + "_" + monster.name}>
                <p>{monster.name}</p>
                <p>Level: {monster.level}</p>
              </div>
            )}
          </div>
        </button>
      )}
    </div>
  )
}