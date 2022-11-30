export default function InventoryBox(props) {
  return (
    <button onClick={() => props.setActive(props.inventoryType)}>
      <div>
        <p>{props.boxname}</p>
      </div>
    </button>
  )
}