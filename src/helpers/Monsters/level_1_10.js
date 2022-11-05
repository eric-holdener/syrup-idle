import { MonsterCreator } from "../MonsterCreator";
import DropCreator from "../DropCreator";

const Snail = MonsterCreator(
    "Snail", 3, {}, 4, 6, -65, 20, 
    0, 22, 0, 0, 0, 0, 0, null, 0, 0, 
    [], [1, 2, 3, 4, 5], [], 1);

const BlueSnail = MonsterCreator(
  "Blue Snail", 4, {}, 8, 12, -50, 20, 
  0, 27, 0, 0, 0, 0, 0, null, 0, 0, 
  [], [1, 2, 3, 4, 5], [], 2);

const RedSnail = MonsterCreator(
    "Red Snail", 8, {}, 12, 18, -50, 30, 
    0, 35, 0, 3, 10, 0, 0, null, 0, 0, 
    [], [1, 2, 3, 4, 5], [], 5);

const Stump = MonsterCreator(
    "Stump", 8, {}, 12, 18, -70, 30,
    0, 40, 0, 3, 10,0, 0, null, 0, 0,
    [1], [2, 3, 4, 5], [], 4);

export { Snail, BlueSnail, RedSnail, Stump }