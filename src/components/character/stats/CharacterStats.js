import { useDispatch, useSelector } from "react-redux"

export default function CharacterStats() {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Stats</p>
    </div>
  )
}