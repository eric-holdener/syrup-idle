import { useDispatch, useSelector } from "react-redux";
import { setTraining } from "../../state_management/redux/Character/CharacterSlice";

export default function HerbsMain() {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  function setHerbTraining() {
    console.log("set training");
    dispatch(setTraining("Herbs"));
  }

  return (
    <>
      <p>Herbs</p>
      <button onClick={() => setHerbTraining()}>Set Training</button>
      <button onClick={() => console.log(character.currently_training)}>Test</button>
    </>
  )
}