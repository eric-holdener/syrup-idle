export default function ItemBox(props) {
  return (
    <div>
      <p>Name: {props.item.name}</p>
      <p>Quantity: {props.item.quantity}</p>
    </div>
  )
}