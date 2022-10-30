import AllLocations from "../../helpers/Locations/AllLocations"

export default function MapCard(props) {
  maps = AllLocations[props.locationName];
  return (
    <>
      <p>map card</p>
      <button onClick={() => console.log(maps)}>Test</button>
    </>
  )
}