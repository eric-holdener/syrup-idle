import { useState } from "react"
import MapCard from "./MapCard";

export default function MapGroup(props) {
  const [showing, setShowing] = useState(false);
  return (
    <div className="bg-white w-1/2 m-3 p-3">
      <p>{props.name}</p>
      {showing ? (
        <div className="flex flex-col">
          <MapCard locationName="lith_harbor" setLocation={props.setLocation} setMonster={props.setMonster}/>
          <button onClick={() => setShowing(false)} className="bg-black text-white rounded p-1">Close</button>
        </div>
      ) : (
        <>
          <button onClick={() => setShowing(true)} className="bg-black text-white rounded p-1">Expand</button>
        </>
      )}
    </div>
  )
}