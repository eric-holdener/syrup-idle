import { useDispatch } from "react-redux";
import { setTraining } from "../../../../state_management/Redux/Character/CharacterSlice";
import HerbHeader from "./HerbHeader";
import HerbBox from "./HerbBox";

export default function HerbsMain() {
  const dispatch = useDispatch();

  const marjoram_flower = {
    id: 1,
    name: "Marjoram Flower",
    time: 2000,
    drop_range: [1, 2, 3],
    type: 3,
    skill: 1
  }

  const marjoram_seed = {
    id: 2,
    name: "Marjoram Seed",
    time: 3000,
    drop_range: [2, 3, 4],
    type: 3,
    skill: 1
  }

  const all_herbs = [marjoram_flower, marjoram_seed]


  function setHerbTraining(herb) {
    dispatch(setTraining({skill_tree: "herbs", item: herb}));
  }

  return (
    <div className="w-full h-full">
      <HerbHeader />
      <div className="flex gap-3 w-full h-5/6">
        {all_herbs.map((herb) => <HerbBox herb={herb} setHerbTraining={setHerbTraining} key={herb.name}/>)}
      </div>
    </div>
  )
}