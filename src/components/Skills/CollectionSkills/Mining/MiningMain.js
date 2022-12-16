import MiningHeader from "./MiningHeader";
import MiningBox from "./MiningBox";
import { All_Ores } from "./AllOres";
import { useDispatch } from "react-redux";
import { setTraining } from "../../../../state_management/Redux/Character/CharacterSlice";

export default function Mining() {
  const dispatch = useDispatch();

  function setMiningTraining(ore) {
    dispatch(setTraining({
      skill_tree: "mining",
      item: ore
    }))
  }

  return (
    <div className="w-full h-full overflow-scroll">
      <MiningHeader />
      <div className="flex gap-10 w-full h-5/6 flex-wrap justify-center">
        {All_Ores.map((vein) => <MiningBox vein={vein} setMiningTraining={setMiningTraining} key={vein.name}/>)}
      </div>
    </div>
  )
}