

export default function SidebarItem(props) {
  return (
    <div className="container flex justify-between items-center p-3">
      <div className="flex justify-start items-center gap-3 w-1/2">
        <img src={props.image} className="w-1/4"/>
        <h5 className="text-white">{props.name}</h5>
      </div>
      <div className="flex justify-end items-center w-1/2">
        <p className="text-white text-sm">( 1 / 99 )</p>
      </div>
    </div>
  )

}