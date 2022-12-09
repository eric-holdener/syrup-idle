import { useDispatch } from "react-redux";
import { clear } from "../../../state_management/Redux/Character/CharacterSlice";
import { clearSave } from "../../../state_management/Redux/Character/SavegameSlice";
import { useSelector } from "react-redux";
import HeaderButton from "./HeaderButton";

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
  }

  return (
    <div className="w-full flex gap-2 justify-end px-3 py-3 bg-slate-700">
      <HeaderButton name={"Save Game"} function={saveButton}/>
      <HeaderButton name={"Logout"} function={logoutButton}/>
      <p>Character Dropdown</p>
      <p>Inventory Dropdown</p>
      <p>Settings Dropdown</p>
    </div>
  )

}