import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../state_management/Redux/Character/CharacterSlice";

export default function TickSystem() {
  const character = useSelector((state) => state.character);
  const training = character.currently_training;
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(training);
      console.log(training.skill_tree)
      if (training.skill_tree === "gathering" || training.skill_tree === "mining" || training.skill_tree === "fishing") {
        console.log("here");
      } else if (training.skill_tree === "smithing") {
        console.log("there");
      }
      // for (const item of Object.values(training.item.items)) {
      //   const randomQuantity = item.drop_range[Math.floor(Math.random() * item.drop_range.length)];
      //   if (randomQuantity > 0) {
      //     const payload = {
      //       type: item.type,
      //       item: {
      //         quantity: randomQuantity,
      //         id: item.id,
      //         name: item.name,
      //       }
      //     }
      //     dispatch(addItem(payload));
      //   }
      // }
    }, training.item.time);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [training, dispatch])
}