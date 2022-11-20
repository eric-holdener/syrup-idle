import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddToInventory from "./AddToInventory";

export default function TickSystem() {
  const character = useSelector((state) => state.character);
  const time = character.currently_training.item.time;
  const drop_range = character.currently_training.item.drop_range;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(character.currently_training.item.name);
      console.log(character.currently_training.item.time);
      const randomQuantity = drop_range[Math.floor(Math.random() * drop_range.length)];
      AddToInventory(character.currently_training.item.name, randomQuantity);
    }, time);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [character])
}