import { MonsterCreator } from "../MonsterCreator";
import DropCreator from "../DropCreator";

function Snail() {
  drops = DropCreator();

  return MonsterCreator("Snail", 3, drops, 4, 6, -65, 20, 0, 22, 0, 0, 0, 0, 0, null, 0, 0, [], [1, 2, 3, 4, 5], [], 1)
}