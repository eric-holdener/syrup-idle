import { useDispatch } from "react-redux";
import { setTraining } from "../state_management/Redux/Character/CharacterSlice";

export default function StopTraining() {
  const dispatch = useDispatch();
  return (
    <button onClick={() =>   dispatch(setTraining(null))}>Stop Training</button>
  )
}