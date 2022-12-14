import FishHeader from "./FishHeader";
import { All_Fish } from "./AllFish";
import FishBox from "./FishBox";
import { useDispatch } from "react-redux";
import { setTraining } from "../../../../state_management/Redux/Character/CharacterSlice";

export default function Fishing() {
  const dispatch = useDispatch();

  function setFishingTraining(fish) {
    dispatch(setTraining({
      skill_tree: "fishing",
      item: {
        time: fish.time,
        items: [fish]
      }
    }))
  }

  return (
    <div className="w-full h-full">
      <FishHeader />
      <div className="flex gap-10 w-full h-5/6 flex-wrap justify-center">
        {All_Fish.map((fish) => <FishBox fish={fish} setFishingTraining={setFishingTraining} key={fish.name}/>)}
      </div>
    </div>
  )
}