import { useState } from "react"
import Equipment from "./equipment/Equips";
import CharacterFullStatsView from "./stats/CharacterFullStatsView";

export default function Character() {
  const [equipsShowing, setEquipsShowing] = useState(false);

  let statsButtonBg = equipsShowing ? "bg-black" : "bg-teal-400";
  let equipsButtonBg = equipsShowing ? "bg-teal-400" : "bg-black";

  return (
    <div className="w-full h-full">
      <div className="flex gap-3 w-full justify-center pt-3">
        <button onClick={() => setEquipsShowing(false)} className={`rounded-full ${statsButtonBg} text-white px-3 py-1 font-bold`}>Statistics</button>
        <button onClick={() => setEquipsShowing(true)} className={`rounded-full ${equipsButtonBg} text-white px-3 py-1 font-bold`}>Equipment</button>
      </div>
      {equipsShowing ? (
        <div className="flex justify-center h-full items-center">        
          <Equipment />
        </div>
      ) : (
        <CharacterFullStatsView />
      )}
    </div>
  )
}