import { useDispatch, useSelector } from "react-redux"

export default function CharacterInfo() {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  return (
    <div>Info</div>
  )
}