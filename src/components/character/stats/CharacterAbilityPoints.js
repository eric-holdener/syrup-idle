import { useDispatch, useSelector } from "react-redux"

export default function CharacterAbilityPoints() {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-3 justify-end">
        <div className="flex flex-col items-end">
          <h4>Ability Point</h4>
          <p>{character.availableAp}</p>
        </div>
        <div>
          <button>Auto Assign</button>
        </div>
      </div>
      <div className="flex w-full">
        <h5 className="w-1/4 bg-green-200">STR</h5>
        <p className="w-3/4">{character.str}</p>
      </div>
      <div className="flex w-full">
        <h5 className="w-1/4 bg-green-200">DEX</h5>
        <p className="w-3/4">{character.dex}</p>
      </div>
      <div className="flex w-full">
        <h5 className="w-1/4 bg-green-200">INT</h5>
        <p className="w-3/4">{character.int}</p>
      </div>
      <div className="flex w-full">
        <h5 className="w-1/4 bg-green-200">LUK</h5>
        <p className="w-3/4">{character.luk}</p>
      </div>
    </div>
  )
}