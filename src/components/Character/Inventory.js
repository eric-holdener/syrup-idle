import { useSelector } from "react-redux";
import InventoryBox from "./inventory/InventoryBox";
import ItemBox from "./inventory/ItemBox";
import { useState } from "react";

export default function Inventory() {
  const character = useSelector((state) => state.character);
  const [ActiveInventory, SetActiveInventory] = useState("equipInventory");

  return (
    <>
      <div className="flex justify-start w-full p-3 gap-3">
        <InventoryBox boxname={"Equipment"} setActive={SetActiveInventory} inventoryType="equipInventory"/>
        <InventoryBox boxname={"Use"} setActive={SetActiveInventory} inventoryType="useInventory"/>
        <InventoryBox boxname={"Etc"} setActive={SetActiveInventory} inventoryType="etcInventory"/>
      </div>
      <div>
        <button onClick={() => console.log(character.inventory)}>Check Inventory</button>
        {
          Object.keys(character[ActiveInventory]).map((key, index) => {
            return (
              <p>{character[ActiveInventory][key].item.name}</p>
            )
          })
        }
      </div>
    </>

  )
}