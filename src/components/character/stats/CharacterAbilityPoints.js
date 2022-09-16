import { useDispatch, useSelector } from "react-redux"

export default function CharacterAbilityPoints() {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  return (
    <div>Ability Points</div>
  )
}