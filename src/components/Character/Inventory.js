import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import InventoryBox from "./inventory/InventoryBox";
import ItemBox from "./inventory/ItemBox";
import { useState } from "react";

export default function Inventory() {
  const character = useSelector((state) => state.character);
  const [ActiveInventory, SetActiveInventory] = useState(0);

  function DisplayAllInventory(inventory) {
    for (let i = 0; i < inventory.length; i++) {
      return (
        <InventoryBox boxnumber={i} setActive={SetActiveInventory}/> 
      )
    }
  }

  function DisplayActiveInventory(inventory) {
    const display_active = inventory[ActiveInventory];
    for (let i = 0; i < display_active.length; i++) {
      return (
        <ItemBox item={display_active[i]} />
      )
    }
  }

  return (
    <>
      <div className="flex justify-start w-full p-3 gap-3">
        {DisplayAllInventory(character.inventory)}
      </div>
      <div>
        {DisplayActiveInventory(character.inventory)}
      </div>
    </>

  )
}