import { useSelector } from "react-redux";

export default function EquipmentTab() {
  const character = useSelector((state) => state.character);

  return (
    <p>Equipment tab</p>
  )
}