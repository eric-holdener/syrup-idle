import FishHeader from "./FishHeader";
import { All_Fish } from "./AllFish";
import FishBox from "./FishBox";

export default function Fishing() {

  return (
    <div className="w-full h-full">
      <FishHeader />
      <div className="flex gap-3 w-full h-5/6 flex-wrap">
        {All_Fish.map((fish) => <FishBox fish={fish} key={fish.name}/>)}
      </div>
    </div>
  )
}