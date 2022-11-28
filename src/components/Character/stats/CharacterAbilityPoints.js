import { useDispatch, useSelector } from "react-redux";
import { increaseStat } from "../../../state_management/Redux/Character/CharacterSlice";

export default function CharacterAbilityPoints() {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-full bg-slate-200 border-2 divide-y divide-black border-black rounded">
      <div className="flex w-full">
        <h5 className="w-1/4">Ability Point:</h5>
        <p className="w-3/4">{character.availableAp}</p>
      </div>
      <div className="flex w-full">
        <div className="w-4/5 flex">
          <h5 className="w-1/4 bg-green-200">STR</h5>
          <p className="w-3/4">{character.str}</p>
        </div>
        <div className="w-1/5 flex justify-end">
          <button onClick={() => dispatch(increaseStat(1))}>+</button>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-4/5 flex">
          <h5 className="w-1/4 bg-green-200">DEX</h5>
          <p className="w-3/4">{character.dex}</p>
        </div>
        <div className="w-1/5 flex justify-end">
          <button onClick={() => dispatch(increaseStat(2))}>+</button>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-4/5 flex">
          <h5 className="w-1/4 bg-green-200">INT</h5>
          <p className="w-3/4">{character.int}</p>
        </div>
        <div className="w-1/5 flex justify-end">
          <button onClick={() => dispatch(increaseStat(3))}>+</button>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-4/5 flex">
          <h5 className="w-1/4 bg-green-200">LUK</h5>
          <p className="w-3/4">{character.luk}</p>
        </div>
        <div className="w-1/5 flex justify-end">
          <button onClick={() => dispatch(increaseStat(4))}>+</button>
        </div>
      </div>
    </div>
  )
}