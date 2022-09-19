import SidebarItem from "./SidebarItem";
import SwordSprite from "../../images/sprites/sword.png"
import RedPotionSprite from "../../images/sprites/red-potion.png"
import CharacterImage from "../../images/sprites/character.png"
import ShirtImage from "../../images/sprites/white-shirt.png"

export default function Sidebar() {
  return (
    <>
      <SidebarItem name="Character" image={CharacterImage} link="/" skill={false} character={true}/>
      <SidebarItem name="Inventory" image={ShirtImage} link="/inventory/equip" skill={false} character={false}/>
      <SidebarItem name="Combat" image={SwordSprite} link="/combat" skill={false} character={false}/>
      <SidebarItem name="Potions" image={RedPotionSprite} link="/brewing" skill={true} character={false}/>
    </>
  )
}