import { useDispatch } from "react-redux";
import { clear } from "../../state_management/redux/Character/CharacterSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-1">
      <button onClick={() => dispatch(clear())}>Logout</button>
    </div>
  )

}