import { useDispatch } from "react-redux";
import { clear } from "../../state_management/Redux/Character/CharacterSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <button onClick={() => dispatch(clear())}>Logout</button>
    </div>
  )

}