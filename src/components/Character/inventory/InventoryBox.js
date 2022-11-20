export default function InventoryBox(props) {
  return (
    <button onClick={() => props.setActive(props.boxnumber)}>
      <div>
        <p>{props.boxnumber}</p>
      </div>
    </button>
  )
}