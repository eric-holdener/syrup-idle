import SidebarItem from "./SidebarItem";
import SwordSprite from "../../images/sprites/sword.png"
import RedPotionSprite from "../../images/sprites/red-potion.png"
import CharacterImage from "../../images/sprites/character.png"

export default function Sidebar() {
  return (
    <>
      <SidebarItem name="Character" image={CharacterImage}/>
      <SidebarItem name="Combat" image={SwordSprite}/>
      <SidebarItem name="Potions" image={RedPotionSprite}/>
    </>

  )
}