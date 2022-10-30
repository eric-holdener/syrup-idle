import DefaultLocation from "../../DefaultLocation";
import { BlueSnail, Snail, RedSnail, Stump } from "../../../Monsters/level_1_10"

const Thicket_Around_Beach_1 =  DefaultLocation(
    "Thicket Around the Beach 1", 
    [BlueSnail, Snail,  RedSnail]
  );

// monsters not correct in this location, just for testing purposes
const Thicket_Around_Beach_2 = DefaultLocation(
    "Thicket Around the Beach 2",
    [Snail, Stump]
  )

const Lith_Harbor_All = [Thicket_Around_Beach_1, Thicket_Around_Beach_2]

export { Lith_Harbor_All };