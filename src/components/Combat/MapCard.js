import { All_Locations } from "../../helpers/Locations/AllLocations";

export default function MapCard(props) {
  const maps = All_Locations[props.locationName];
  return (
    <>
      <p>map card</p>
      <button onClick={() => console.log(maps)}>Test</button>
    </>
  )
}