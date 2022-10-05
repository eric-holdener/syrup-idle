import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Inventory() {

  return (
    <>
      <div className="flex justify-start w-full p-3 gap-3">
        <Link to="equip" className="border-black border bg-white rounded-full w-1/12 flex justify-center">Equipment</Link>
        <Link to="use" className="border-black border bg-white rounded-full w-1/12 flex justify-center">Use</Link>
        <Link to="etc" className="border-black border bg-white rounded-full w-1/12 flex justify-center">Etc</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>

  )
}