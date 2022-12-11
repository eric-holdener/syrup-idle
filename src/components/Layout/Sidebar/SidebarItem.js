import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

export default function SidebarItem(props) {
  const character = useSelector((state) => state.character);

  return (
    <Link to={props.link}>
      <div className="container flex justify-between items-center p-3">
        <div className="flex justify-start items-center gap-3 w-1/2">
          <img src={props.image} className="w-1/4" alt={`${props.name} skill`}/>
          <h5 className="text-white">{props.name}</h5>
        </div>
        {props.skill ? (
          <div className="flex justify-end items-center w-1/2">
            <p className="text-white text-sm">( 1 / 99 )</p>
          </div>
        ) : (
          <></>
        )}
        {props.character ? (
          <div className="flex justify-end items-center w-1/2">
            <p className="text-white text-sm">Lvl. {character.level}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Link>
  )

}