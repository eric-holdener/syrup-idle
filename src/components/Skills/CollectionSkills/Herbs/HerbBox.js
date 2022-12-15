export default function HerbBox(props) {
  return (
    <button onClick={() => props.setHerbTraining(props.herb)} className="w-1/6 h-1/6 bg-slate-800 hover:bg-green-600">
      <p className="text-white">{props.herb.name}</p>
    </button>
  )
}