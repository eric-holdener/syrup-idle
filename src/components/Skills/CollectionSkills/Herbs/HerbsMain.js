import { useDispatch } from "react-redux";
import { setTraining } from "../../../../state_management/Redux/Character/CharacterSlice";
import HerbHeader from "./HerbHeader";
import HerbBox from "./HerbBox";
import { All_Herbs } from "./AllHerbs";

export default function HerbsMain() {
  const dispatch = useDispatch();

  function setHerbTraining(herb) {
    dispatch(setTraining({skill_tree: "herbs", item: herb}));
  }

  return (
    <div className="w-full h-full">
      <HerbHeader />
      <div className="flex gap-3 w-full h-5/6 flex-wrap">
        {All_Herbs.map((herb) => <HerbBox herb={herb} setHerbTraining={setHerbTraining} key={herb.name}/>)}
      </div>
    </div>
  )
}