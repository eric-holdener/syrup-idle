import { useDispatch } from "react-redux";
import { addItem } from "../state_management/redux/Character/CharacterSlice";

export default function AddToInventory(item, quantity) {
  const dispatch = useDispatch();

  const payload = {
    item: item,
    quantity: quantity
  }

  dispatch(addItem(payload));
};