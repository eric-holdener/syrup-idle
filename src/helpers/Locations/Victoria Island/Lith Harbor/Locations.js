import DefaultLocation from "../../DefaultLocation";
import MonstersLvl1To10 from "../../../Monsters/level_1_10";

let monsters_1_10 = MonstersLvl1To10();

function Thicket_Around_Beach_1() {
  return DefaultLocation(
    "Thicket Around the Beach 1", 
    [monsters_1_10[red_snail], monsters_1_10[snail], monsters_1_10[blue_snail]]
  )
}

export default function LithHarborLocations() {
  return [Thicket_Around_Beach_1]
}