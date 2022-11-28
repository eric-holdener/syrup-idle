import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../state_management/Redux/Character/CharacterSlice";

export default function TickSystem() {
  const character = useSelector((state) => state.character);
  const training = character.currently_training;
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const randomQuantity = training.item.drop_range[Math.floor(Math.random() * training.item.drop_range.length)];
      const payload = {
        item: training.item,
        quantity: randomQuantity
      }
      dispatch(addItem(payload));

    }, training.item.time);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [training])
}