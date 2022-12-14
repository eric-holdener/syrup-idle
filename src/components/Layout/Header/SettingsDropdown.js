import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../../state_management/Redux/Character/CharacterSlice";
import { clearSave } from "../../../state_management/Redux/Character/SavegameSlice";
import HeaderButton from "./HeaderButton";


export default function SettingsDropdown() {
  const [dropDownState, setDropDownState] = useState(false);
  const settingsMenu = useRef(null);
  const dispatch = useDispatch();
  const save =  useSelector((state) => state.savegame);
  const character = useSelector((state) => state.character);


  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (settingsMenu.current && dropDownState && !settingsMenu.current.contains(e.target)) {
        setDropDownState(false);
      }
    });
  }, [dropDownState]);

  function saveButton() {
    let localSaves = localStorage.getItem("savegames");
    let parsedSaves = JSON.parse(localSaves);
    parsedSaves[save] = character;
    localStorage.setItem("savegames", JSON.stringify(parsedSaves));
  };

  function logoutButton() {
    dispatch(clear());
    dispatch(clearSave());
  };


  return (
    <div>
      <button onClick={() => setDropDownState(true)}>Settings</button>
      {dropDownState ? (
        <div className="bg-white absolute right-1 flex flex-col z-50" ref={settingsMenu}>
          <HeaderButton name={"Save Game"} function={saveButton}/>
          <HeaderButton name={"Logout"} function={logoutButton}/>
        </div>
      ) : (
        <></>
      )}
    </div>

  );
}