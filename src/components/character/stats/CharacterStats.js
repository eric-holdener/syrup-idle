import { useDispatch, useSelector } from "react-redux"
import { takeDamage, healCharacter } from "../../../state_management/redux/character/CharacterSlice";

export default function CharacterStats() {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);
  return (
    <div>
      <button onClick={() => dispatch(healCharacter(1))}>+1 HP</button>
      <p>HP: {character.hp}</p>
      <button onClick={() => dispatch(takeDamage(1))}>-1 HP</button>
      <p>Stats</p>
    </div>
  )
}