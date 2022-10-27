import { MonsterCreator } from "../MonsterCreator";
import DropCreator from "../DropCreator";

function Snail() {
  drops = DropCreator();

  return MonsterCreator("Snail", 3, drops, 4, 6, -65, 20, 0, 22, 0, 0, 0, 0, 0, null, 0, 0, [], [1, 2, 3, 4, 5], [], 1);
}

function BlueSnail() {
  drops = DropCreator();

  return MonsterCreator("Blue Snail", 4, drops, 8, 12, -50, 20, 0, 27, 0, 0, 0, 0, 0, null, 0, 0, [], [1, 2, 3, 4, 5], [], 2);
}

function RedSnail() {
  drops = DropCreator();

  return MonsterCreator("Red Snail", 8, drops, 12, 18, -50, 30, 0, 35, 0, 3, 10, 0, 0, null, 0, 0, [], [1, 2, 3, 4, 5], [], 5);
}

export default function MonstersLvl1To10() {
  return {
    red_snail: RedSnail,
    blue_snail: BlueSnail,
    snail: Snail
  }
}