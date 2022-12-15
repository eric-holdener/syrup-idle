import MiningHeader from "./MiningHeader";
import MiningBox from "./MiningBox";
import { useDispatch } from "react-redux";
import { setTraining } from "../../../../state_management/Redux/Character/CharacterSlice";

export default function Mining() {
  const dispatch = useDispatch();

  function setMiningTraining(ore) {
    dispatch(setTraining({
      skill_tree: "mining",
      // item: {
      //   time: fish.time,
      //   items: [fish]
      // }
    }))
  }

  return (
    <div className="w-full h-full">
      <MiningHeader />
      <div className="flex gap-10 w-full h-5/6 flex-wrap justify-center">
        {/* {All_Fish.map((fish) => <MiningBox fish={fish} setFishingTraining={setFishingTraining} key={fish.name}/>)} */}
      </div>
    </div>
  )
}