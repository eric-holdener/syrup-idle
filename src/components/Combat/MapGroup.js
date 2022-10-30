import { useState } from "react"
import MapCard from "./MapCard";

export default function MapGroup(props) {
  const [showing, setShowing] = useState(false);
  return (
    <div>
      <p>{props.name}</p>
      <button onClick={() => setShowing(true)}>Show location</button>
      {showing ? (
        <div>
          <MapCard locationName="lith_harbor"/>
          <button onClick={() => setShowing(false)}>Close</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}