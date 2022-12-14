import { useDispatch } from "react-redux"
import { setTraining } from "../../../../state_management/Redux/Character/CharacterSlice";
import FishHeader from "./FishHeader";

export default function Fishing() {
  const dispatch = useDispatch();

  function setFishingTraining(fish) {
    dispatch(setTraining({skill_tree: "fishing", item: fish}));
  }

  return (
    <div className="w-full h-full">
      <FishHeader />
      <div className="flex gap-3 w-full h-5/6 flex-wrap">
        {/* {All_Herbs.map((herb) => <HerbBox herb={herb} setHerbTraining={setHerbTraining} key={herb.name}/>)} */}
      </div>
    </div>
  )
}