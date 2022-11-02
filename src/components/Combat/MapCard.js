import { All_Locations } from "../../helpers/Locations/AllLocations";

export default function MapCard(props) {
  const maps = All_Locations[props.locationName];

  function handleClick(location) {
    props.setLocation(location);
    const randomMonster = location.monsters[Math.floor(Math.random() * location.monsters.length)];
    props.setMonster(randomMonster);
  }
  return (
    <div className="flex flex-col">
      {maps.map((location) => 
        <button key={location.name} onClick={() => handleClick(location)}>
          <p>{location.name}</p>
        </button>
      )}
      <button onClick={() => console.log(maps)}>Test</button>
    </div>
  )
}