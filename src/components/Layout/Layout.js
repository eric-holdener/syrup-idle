import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import { useSelector } from "react-redux";
import InfoSplash from "../Login/InfoSplash";
import Header from "./Header/Header";
import TickSystem from "../../helpers/TickSystem";

export default function Layout () {
  const character = useSelector((state) => state.character);

  return (
    <div className="container min-h-screen">
      <div className="container w-1/6 h-screen fixed inset-y-0 left-0 bg-slate-700">
        {character ? (<Sidebar />) : (<InfoSplash />)}
      </div>
      <div className="main-content w-5/6 h-full fixed inset-y-0 right-0 bg-maple-splash bg-cover">
        {character ? (
          <>
            <Header />
            {character.currently_training ? (
              <TickSystem />
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
        <Outlet />
      </div>
    </div>
  )
}