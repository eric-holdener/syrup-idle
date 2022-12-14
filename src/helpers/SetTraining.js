import { useDispatch } from "react-redux";
import { setTraining } from "../state_management/Redux/Character/CharacterSlice";

export default function DispatchTraining(training, item) {
  const dispatch = useDispatch();

  dispatch(setTraining({skill_tree: training, item: item}));
}