export default function HeaderButton(props) {
  return (
    <button onClick={() => props.function()} className="bg-slate-200 p-1 rounded-none">
      {props.name}
    </button>
  )
}