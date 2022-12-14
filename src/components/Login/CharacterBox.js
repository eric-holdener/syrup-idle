import CharacterCreationModal from "../Character/Creation/CharacterCreationModal";
import LoadCharacterModal from "./LoadCharacterModal";
import { useState } from "react";

export default function CharacterBox(props) {
  const [showNewModal, setShowNewModal] = useState(false);
  const [showCharModal, setShowCharModal] = useState(false);

  function deleteCharacter() {
    let saves = localStorage.getItem("savegames");
    let json = JSON.parse(saves);
    for (let i = 0; i < json.length; i++) {
      json.splice(props.id, 1);
    };
    localStorage.setItem("savegames", JSON.stringify(json));
    window.location.reload(true);
  }

  return (
    <>
      {props.char ? (
        <>
          <div className="w-1/2 h-1/6 flex bg-white my-2">
            <button className="w-5/6 h-full flex flex-col justify-center items-center" onClick={()=> {setShowCharModal(true)}}>
              <p>{props.char.name}</p>
              <p>Level {props.char.level}</p>
            </button>
            <button className="w-1/6 h-full border-l-2 border-solid border-slate-500" onClick={() => deleteCharacter()}>
              Delete Character
            </button>
          </div>
          <LoadCharacterModal closeModal={setShowCharModal} show={showCharModal} char={props.char} id={props.id}/>
        </>
      ) : (
        <>
        <div className="w-1/2 h-1/6 flex justify-center items-center bg-white my-2">
          <button className="w-full h-full" onClick={() => {setShowNewModal(true)}}>
            <p>New Character</p>
          </button>
        </div>
        <CharacterCreationModal setModal={setShowNewModal} show={showNewModal} id={props.id} />
        </>
      )}
    </>
  )
}