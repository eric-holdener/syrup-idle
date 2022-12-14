import HerbHeader from "./HerbHeader";
import HerbBox from "./HerbBox";
import { All_Herbs } from "./AllHerbs";

export default function HerbsMain() {

  return (
    <div className="w-full h-full">
      <HerbHeader />
      <div className="flex gap-3 w-full h-5/6 flex-wrap">
        {All_Herbs.map((herb) => <HerbBox herb={herb} key={herb.name}/>)}
      </div>
    </div>
  )
}