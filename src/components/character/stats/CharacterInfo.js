import { useDispatch, useSelector } from "react-redux"

export default function CharacterInfo() {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full">
        <h5 className="w-1/4 bg-red-500">Name</h5>
        <p className="w-3/4">{character.name}</p>
      </div>
      <div className="flex w-full">
        <h5 className="w-1/4 bg-red-500">Job</h5>
        <p className="w-3/4">{character.job}</p>
      </div>
      <div className="flex w-full">
        <h5 className="w-1/4 bg-red-500">Level</h5>
        <p className="w-3/4">{character.level}</p>
      </div>
      <div className="flex w-full">
        <h5 className="w-1/4 bg-red-500">HP</h5>
        <p className="w-3/4">{character.currentHp} / {character.maxHp}</p>
      </div>
      <div className="flex w-full">
        <h5 className="w-1/4 bg-red-500">MP</h5>
        <p className="w-3/4">{character.currentMp} / {character.maxMp}</p>
      </div>
      <div className="flex w-full">
        <h5 className="w-1/4 bg-red-500">Exp</h5>
        <p className="w-3/4">{character.exp}</p>
      </div>
    </div>
  )
}