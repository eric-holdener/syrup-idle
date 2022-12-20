import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../state_management/Redux/Character/CharacterSlice";
import StopTraining from "./StopTrainingButton";

export default function TickSystem() {
  const character = useSelector((state) => state.character);
  const training = character.currently_training;
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      // for gathering type skills
      // skills that take nothing and give something
      if (training.skill_tree === "gathering" || training.skill_tree === "mining" || training.skill_tree === "fishing") {
        for (const item of Object.values(training.item.items)) {
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
      } else if (training.skill_tree === "smithing") {
        // for refining type skills
        // skills that take something and give something
        console.log(training);
        let item = training.item;
        let stop = false;
        let negativeLeftover = false;
        let subtractPayload = [];
        // gets rid of requirements
        // item reqs are structured as payloads already
        // checks for quantity are controlled on the item box level, but extra checks are added as well for safety
        for (const payload of item.items_req) {
          let inventoryType = null;
          console.log(payload);
          if (payload.type === 1) {
            inventoryType = "equipInventory";
          } else if (payload.type === 2) {
            inventoryType = "useInventory";
          } else if (payload.type === 3) {
            inventoryType = "etcInventory";
          } else {
            console.log("Invalid inventory type detected");
            return
          };

          if (inventoryType != null) {
            const id = payload.id
            const leftover = character.inventoryType.id.item.quantity - payload.quantity;
            if (leftover < payload.quantity && leftover >= 0) {
              stop = true;
            } else if (leftover < 0) {
              // breaks out of 
              negativeLeftover = true;
              break
            } else {
              subtractPayload.push(payload);
            };
          }
        };

        if (!negativeLeftover) {
          const payload = {
            type: item.type,
            item: {
              quantity: 1,
              id: item.id,
              name: item.name
            }
          };

          // dispatch(addItem(payload));

          // dispatch(deleteItems(subtractPayload))
        }

        if (stop) {
          StopTraining();
        };

      }
 
    }, training.item.time);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [training, dispatch])
}