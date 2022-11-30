import SidebarItem from "./SidebarItem";
import SwordSprite from "../../../images/sprites/sword.png"
import RedPotionSprite from "../../../images/sprites/red-potion.png"
import CharacterImage from "../../../images/sprites/character.png"
import ShirtImage from "../../../images/sprites/white-shirt.png"

export default function Sidebar() {

  function testXP() {
    let xp1 = 100;
    let nextLevel = 0;
    console.log("fibonacci + exponential xp system");
    for (let i = 1; i <= 99; i++) {
      console.log(`level = ${i}`)
      console.log(`total xp level = ${xp1}`)
      nextLevel = Math.ceil(xp1 * 1.12);
      console.log(`xp to get to next level = ${nextLevel - xp1}`)
      xp1 = nextLevel;
    }
  }
  return (
    <>
      <div>
        <SidebarItem name="Character" image={CharacterImage} link="/" skill={false} character={true}/>
        <SidebarItem name="Inventory" image={ShirtImage} link="/inventory" skill={false} character={false}/>
      </div>
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

      <button onClick={() => testXP()}>Test xp curve</button>
    </>
  )
}