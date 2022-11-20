import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import InventoryBox from "./inventory/InventoryBox";
import ItemBox from "./inventory/ItemBox";
import { useState } from "react";

export default function Inventory() {
  const character = useSelector((state) => state.character);
  const [ActiveInventory, SetActiveInventory] = useState(0);

  return (
    <>
      <div className="flex justify-start w-full p-3 gap-3">
        {character.inventory.map((slot, index) => <InventoryBox boxnumber={index} setActive={SetActiveInventory} />)}
      </div>
      <div>
        <button onClick={() => console.log(character.inventory)}>Check Inventory</button>
        {character.inventory[ActiveInventory].map((item) => <ItemBox item={item} />)}
      </div>
    </>

  )
}