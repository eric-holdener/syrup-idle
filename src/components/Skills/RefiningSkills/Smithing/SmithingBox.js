import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function SmithingBox(props) {
  const character = useSelector((state) => state.character);
  const [validCraft, setValidCraft] = useState(true);


  useEffect(() => {
    for (const item of props.recipe.items_req) {
      if (!(item in character.etcInventory)) {
        if (!(item in character.useInventory)) {
          if (!(item in character.equipInventory)) {
            setValidCraft(false);
          }
        }
      }
    }
  }, [props, character.etcInventory, character.useInventory, character.equipInventory]);

  return (
    <div className="w-1/4 h-1/4 bg-slate-800 flex flex-col justify-between">
      <p>{props.recipe.name}</p>
      <div className="flex w-full pb-3 justify-center">
        {validCraft ? (
            <button onClick={() => props.setSmithingTraining(props.recipe)} className="bg-cyan-700 text-white p-1 w-5/6 hover:bg-green-700">Smith</button>
        ) : (
          <button className="p-1 w-5/6 text-white bg-cyan-700 rounded focus:outline-none" disabled>No Materials</button>
        )}
      </div>
      
    </div>
  )
}