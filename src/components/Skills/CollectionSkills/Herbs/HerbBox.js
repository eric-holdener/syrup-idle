export default function HerbBox(props) {
  return (
    <button onClick={() => props.setHerbTraining(props.herb)} className="w-1/6 h-1/6 bg-slate-800 opacity-75 hover:opacity-100">
      <p className="text-white">{props.herb.name}</p>
    </button>
  )
}