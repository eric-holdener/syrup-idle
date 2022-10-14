import { useState } from "react";
import defaultCharacter from "../../helpers/DefaultCharacter";
import { setCharacter } from "../../state_management/redux/Character/CharacterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CharacterCreationModal(props) {

  const [name, setName] = useState("");
  const [archetype, setArchetype] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onClassChange(e) {
    // 1 = explorer
    // 2 = cygnus knight
    setArchetype(e.target.value);
  }

  function createCharacter() {
    let character = defaultCharacter(name, archetype)
    dispatch(setCharacter(character));
    props.closeModal(false);
    navigate("/");
  }

  function renderModal() {
    if(!props.show){
        return null;
    };
    return (
      <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    New Character
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.closeModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto text-slate-500 text-lg">
                  <div className="flex gap-2">
                    <p>Character Name:</p>
                    <input type="text" name="nameId" value={name} onChange={(e) => setName(e.target.value)} className="grow border-solid border-slate-500 text-black border-b-2 pl-2 hover:border-2"/>
                  </div>
                  <div className="flex gap-2">
                    <p>Archetype:</p>
                    <div onChange={(e) => onClassChange(e)} className="flex flex-col">
                      <div className="flex">
                        <input type="radio" value={1} name="class" />
                        <p>Explorer</p>
                      </div>
                      <div className="flex">
                        <input type="radio" value={2} name="class" disabled={true}/>
                        <p>Cygnus Knight</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.closeModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => createCharacter()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
  }

  return (
    <>
      {renderModal()}
    </>
  )
}

{/* <button onClick={() => props.closeModal()}>
Close
</button> */}