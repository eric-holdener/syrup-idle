import { useState } from "react"
import ShowDrops from "../../../../helpers/ShowDrops";

export default function MiningBox(props) {
  const [dropsShowing, setDropsShowing] = useState(false);

  return (
    <>
      <div className="w-1/4 h-1/4 bg-slate-800 flex flex-col justify-between">
        <p>{props.vein.name}</p>
        <div className="flex w-full pb-3">
          <div className="w-1/2 flex justify-end pr-1">
            <button onClick={() => setDropsShowing(true)} className="bg-cyan-700 text-white p-1 w-5/6 hover:bg-green-700">View Drops</button>
          </div>
          <div className="w-1/2 pl-1">
            <button onClick={() => props.setMiningTraining(props.vein)} className="bg-cyan-700 text-white p-1 w-5/6 hover:bg-green-700">Mine</button>
          </div>
        </div>
      </div>
      <ShowDrops show={dropsShowing} item={props.vein} closeModal={setDropsShowing}/>
    </>

  )
}