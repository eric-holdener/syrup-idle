import SidebarItem from "./SidebarItem";
import SwordSprite from "../../../images/sprites/sword.png";
import RedPotionSprite from "../../../images/sprites/red-potion.png";
import Logo from "../Logo";

export default function Sidebar() {

  return (
    <div>
      <Logo />
      <div>
        <SidebarItem name="Combat" image={SwordSprite} link="/combat" skill={false} character={false}/>
      </div>
      <div>
        <SidebarItem name="Gathering" image={RedPotionSprite} link="/gathering" skill={true} character={false}/>
        <SidebarItem name="Fishing" image={RedPotionSprite} link="/fishing" skill={true} character={false}/>
        <SidebarItem name="Mining" image={RedPotionSprite} link="/mining" skill={true} character={false}/>
        <SidebarItem name="Farming" image={RedPotionSprite} link="/farming" skill={true} character={false}/>
        <SidebarItem name="Thieving" image={RedPotionSprite} link="/thieving" skill={true} character={false}/>
      </div>
      <div>
        <SidebarItem name="Herbalism" image={RedPotionSprite} link="/herbalism" skill={true} character={false}/>
        <SidebarItem name="Cooking" image={RedPotionSprite} link="/cooking" skill={true} character={false}/>
        <SidebarItem name="Smithing" image={RedPotionSprite} link="/smithing" skill={true} character={false}/>
      </div>
      <div>
        <SidebarItem name="Alchemy" image={RedPotionSprite} link="/alchemy" skill={true} character={false}/>
        <SidebarItem name="Forging" image={RedPotionSprite} link="/forging" skill={true} character={false}/>
        <SidebarItem name="Crafting" image={RedPotionSprite} link="/crafting" skill={true} character={false}/>
      </div>
    </div>
  )
}