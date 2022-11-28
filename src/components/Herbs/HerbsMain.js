import { useDispatch } from "react-redux";
import StopTraining from "../../helpers/StopTrainingButton";
import { setTraining } from "../../state_management/Redux/Character/CharacterSlice";

export default function HerbsMain() {
  const dispatch = useDispatch();

  const marjoram_flower = {
    name: "Marjoram Flower",
    time: 2000,
    drop_range: [1, 2, 3]
  }

  const marjoram_seed = {
    name: "Marjoram Seed",
    time: 3000,
    drop_range: [2, 3, 4]
  }


  function setHerbTraining(herb) {
    dispatch(setTraining({skill_tree: "herbs", item: herb}));
  }

  return (
    <>
      <p>Herbs</p>
      <button onClick={() => setHerbTraining(marjoram_flower)}>Marjaram Flower</button>
      <button onClick={() => setHerbTraining(marjoram_seed)}>Marjaram Seed</button>
      <StopTraining/>
    </>
  )
}