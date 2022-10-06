import React from "react";

export default function CharacterCreationModal(props) {

  function renderModal() {
    if(!props.show){
        return null;
    };
    return (
      <div>
        <div>{props.children}</div>
        <div>
          <button onClick={() => props.closeModal()}>
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {renderModal()}
    </>
  )
}