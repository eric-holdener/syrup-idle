

export default function SidebarItem(props) {
  return (
    <div className="container flex justify-between items-center p-3">
      <div className="flex justify-center items-center gap-3">
        <img src={props.image}/>
        <h5 className="text-white">{props.name}</h5>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-white text-sm">( 1 / 99 )</p>
      </div>
    </div>
  )

}