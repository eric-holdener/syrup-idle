import { useDispatch } from "react-redux";
import { clear } from "../../state_management/Redux/Character/CharacterSlice";
import { clearSave } from "../../state_management/Redux/Character/SavegameSlice";
import { useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const save =  useSelector((state) => state.savegame);
  const character = useSelector((state) => state.character);

  function logoutButton() {
    dispatch(clear());
    dispatch(clearSave());
  }

  function saveButton() {
    let localSaves = localStorage.getItem("savegames");
    let parsedSaves = JSON.parse(localSaves);
    parsedSaves[save] = character;
    localStorage.setItem("savegames", JSON.stringify(parsedSaves));
    console.log("game saved");
  }

  return (
    <div className="w-full">
      <button onClick={() => logoutButton()}>Logout</button>
      <button onClick={() => saveButton()}>Save Game</button>
    </div>
  )

}