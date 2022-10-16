import CharacterCreationModal from "./CharacterCreationModal";
import LoadCharacterNodal from "./LoadCharacterModal";
import { useState } from "react";

export default function CharacterBox(props) {
  const [showNewModal, setShowNewModal] = useState(false);
  const [showCharModal, setShowCharModal] = useState(false);

  return (
    <>
      {props.char ? (
        <>
          <div className="w-1/2 h-1/6 flex justify-center items-center" onClick={(e)=> {setShowCharModal(true);}}>
            <p>{props.char.name}</p>
            <p>{props.char.level}</p>
          </div>
          <LoadCharacterNodal closeModal={setShowCharModal} show={showCharModal} char={props.char}/>
        </>
      ) : (
        <>
        <div className="w-1/2 h-1/6 flex justify-center items-center" onClick={(e) => {setShowNewModal(true);}}>
          <p>No Character</p>
        </div>
        <CharacterCreationModal setModal={setShowNewModal} show={showNewModal} />
        </>
      )}
    </>
  )
}