import { useSelector, useDispatch } from "react-redux";
import { createMarkOfBeta } from "../../../helpers/EquipmentList";
// import { addEquip } from "../../../state_management/redux/Character/CharacterSlice";

export default function EquipmentTab() {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  return (
    <>
      <p>Equipment tab</p>

    </>
  )
}

// add back in later

// {character.equip_inventory.map((equipment) => <p>{equipment.name}</p>)}
// <button onClick={() => {
//   let mark_of_beta = createMarkOfBeta();
//   console.log(mark_of_beta);
//   dispatch(addEquip(mark_of_beta));
// }}>Add Mark of Beta to inventory</button>