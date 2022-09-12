import SidebarItem from "./SidebarItem";
import SwordSprite from "../../images/sprites/sword.png"
import RedPotionSprite from "../../images/sprites/red-potion.png"

export default function Sidebar() {
  return (
    <div className="container w-1/6 h-full fixed inset-y-0 left-0 bg-slate-500">
      Sidebar
      <SidebarItem name="Combat" image={SwordSprite}/>
      <SidebarItem name="Potions" image={RedPotionSprite}/>
    </div>

  )
}