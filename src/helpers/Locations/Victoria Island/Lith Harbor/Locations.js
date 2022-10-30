import DefaultLocation from "../../DefaultLocation";
import MonstersLvl1To10 from "../../../Monsters/level_1_10";

let monsters_1_10 = MonstersLvl1To10();

function Thicket_Around_Beach_1() {
  return DefaultLocation(
    "Thicket Around the Beach 1", 
    [monsters_1_10[red_snail], monsters_1_10[snail], monsters_1_10[blue_snail]]
  )
}

// monsters not correct in this location, just for testing purposes
function Thicket_Around_Beach_2() {
  return DefaultLocation(
    "Thicket Around the Beach 2",
    [monsters_1_10[snail], monsters_1_10[stump]]
  )
}

export default function LithHarborLocations() {
  return [Thicket_Around_Beach_1, Thicket_Around_Beach_2]
}