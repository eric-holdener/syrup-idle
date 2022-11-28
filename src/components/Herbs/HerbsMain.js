import { useDispatch } from "react-redux";
import StopTraining from "../../helpers/StopTrainingButton";
import { setTraining } from "../../state_management/Redux/Character/CharacterSlice";
import { useSelector } from "react-redux";

export default function HerbsMain() {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);

  const marjoram_flower = {
    id: 1,
    name: "Marjoram Flower",
    time: 2000,
    drop_range: [1, 2, 3]
  }

  const marjoram_seed = {
    id: 2,
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
      <button onClick={() => console.log(character.inventory)}>Test Inventory</button>
      <button onClick={() => console.log(character.currently_training)}>Test Current training</button>
    </>
  )
}