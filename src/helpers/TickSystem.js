import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function TickSystem() {
  const character = useSelector((state) => state.character);
  const time = character.currently_training.item.time;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(character.currently_training.item.name);
      console.log(character.currently_training.item.time);
    }, time);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])
}