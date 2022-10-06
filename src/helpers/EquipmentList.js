import MarkOfTheBeta from "../images/sprites/Equipment/mark_of_the_beta.png"
import { Equipment } from "./ItemDefaults"

function createMarkOfBeta() {
  let item = new Equipment(
    "Equipment", "Mark of the Beta", 0, 0, 0, 0, 0, 15, 0, "common",
    1, 1, 1, 1, 7, MarkOfTheBeta
  )
  return item;
}

export { createMarkOfBeta }