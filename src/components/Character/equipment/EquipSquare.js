import { useSelector } from "react-redux"

export default function EquipSquare(props) {
  const character = useSelector((state) => state.character);

  return (
    <div className={"w-20 h-20 bg-slate-300 opacity-70"}>
      <h5 className="text-xs font-thin">{props.name}</h5>
      {character["equipment"][`${props.equip}`] ? (
        <img src={character["equipment"][`${props.equip}`]["image"]} alt={`${props.name}-equipment`}/>
      ) : (
        <></>
      )}
    </div>
  )
}