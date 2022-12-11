import LogoImage from "../../images/branding/placeholder-syrup.jpg"

export default function Logo() {
  return (
    <div className="flex">
      <img src={LogoImage} className="w-1/2" alt="syrup idle logo"></img>
      <div className="flex flex-col justify-center items-start pl-3 text-white text-xl">
        <p>Syrup</p>
        <p>Idle</p>
      </div>
    </div>
  )

}