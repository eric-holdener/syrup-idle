export default function FishBox(props) {
  return (
    <div className="w-1/3 h-1/3 bg-slate-800 opacity-75">
      <p>{props.fish.name}</p>
      <div className="flex flex-col justify-start items-start">
        {props.fish.items.map((fish) => {
          return (
            <button onClick={() => props.setFishingTraining(fish)} className="opacity-100 text-white hover:text-green-600" key={fish.name}>{fish.name}</button>
          )
        })}
      </div>
    </div>
  )
}