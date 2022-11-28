import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddToInventory from "./AddToInventory";

export default function TickSystem() {
  const character = useSelector((state) => state.character);
  const training = character.currently_training;

  useEffect(() => {
    const interval = setInterval(() => {
      const randomQuantity = training.item.drop_range[Math.floor(Math.random() * training.item.drop_range.length)];
      AddToInventory(training.item.name, randomQuantity);
    }, training.item.time);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [training])
}