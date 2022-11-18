import { useDispatch, useSelector } from "react-redux";
import StopTraining from "../../helpers/StopTrainingButton";
import { setTraining } from "../../state_management/redux/Character/CharacterSlice";

export default function HerbsMain() {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  const marjaram_flower = {
    name: "Marjaram Flower",
    time: 2000,
    drop_range: [1, 2, 3]
  }

  function setHerbTraining(herb) {
    dispatch(setTraining({skill_tree: "herbs", item: herb}));
  }

  return (
    <>
      <p>Herbs</p>
      <button onClick={() => setHerbTraining(marjaram_flower)}>Marjaram Flower</button>
      <StopTraining/>
    </>
  )
}