import CharacterCreationModal from "./CharacterCreationModal";
import { useState } from "react";

export default function CharacterBox(props) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  };

  return (
    <>
      {props.char ? (
        <div className="w-1/2 h-1/6 flex justify-center items-center">
          <p>Character</p>
        </div>
      ) : (
        <div className="w-1/2 h-1/6 flex justify-center items-center" onClick={(e) => {
          openModal();
        }}>
          <p>No Character</p>
        </div>
      )}
      <CharacterCreationModal closeModal={closeModal} show={showModal} sampletext={props.id}>
          Message in Modal
      </CharacterCreationModal>
    </>
  )
}