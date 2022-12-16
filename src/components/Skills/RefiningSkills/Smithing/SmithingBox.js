import { useSelector } from "react-redux";
import { useState } from "react";

export default function SmithingBox(props) {
  const character = useSelector((state) => state.character);
  const valid_craft_arr = new Array(props.recipe.items_req.length).fill(false);
  const [validCraft, setValidCraft] = useState(false);
  let valid_craft_arr_iterator = 0;

  function allTrue(arr) {
    return arr.every(element => element === true);
  }

  console.log(character);
  console.log(valid_craft_arr);

  function determineValidity() {
    for (const [key, value] of Object.entries(character.etcInventory)) {
      if (props.recipe.items_req.includes(parseInt(key))) {
        valid_craft_arr[valid_craft_arr_iterator] = true;
        console.log(valid_craft_arr);
        valid_craft_arr_iterator += 1;
        if (allTrue(valid_craft_arr)) {
          console.log("all true")
          setValidCraft(true);
          break;
        }
      }
    };
  }

  return (
    <>
      {determineValidity()}
      {validCraft ? (
        <p>Smithing Box</p>
      ) : (
        <p>not valid</p>
      )}
      <button onClick={() => console.log(validCraft)}>test valid craft</button>
    </>
  )
}