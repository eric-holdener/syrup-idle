import { useDispatch } from "react-redux";
import { clear } from "../../state_management/Redux/Character/CharacterSlice";
import { clearSave } from "../../state_management/Redux/Character/SavegameSlice";
import { useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const save =  useSelector((state) => state.savegame);


  function logout() {
    dispatch(clear());
    dispatch(clearSave());
  }

  return (
    <div className="w-full">
      <button onClick={() => logout()}>Logout</button>
      <button onClick={() => console.log(save)}>Test Pointer</button>
    </div>
  )

}