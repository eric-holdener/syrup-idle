import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../state_management/Redux/Character/CharacterSlice";

export default function TickSystem() {
  const character = useSelector((state) => state.character);
  const training = character.currently_training;
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      for (const [key, item] of Object.entries(training.item.items)) {
        console.log(item);
        const randomQuantity = item.drop_range[Math.floor(Math.random() * item.drop_range.length)];
        if (randomQuantity > 0) {
          const payload = {
            type: item.type,
            item: {
              quantity: randomQuantity,
              id: item.id,
              name: item.name,
            }
          }
          dispatch(addItem(payload));
        }
      }
    }, training.item.time);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [training, dispatch])
}