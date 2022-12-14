import FishHeader from "./FishHeader";

export default function Fishing() {

  return (
    <div className="w-full h-full">
      <FishHeader />
      <div className="flex gap-3 w-full h-5/6 flex-wrap">
        {/* {All_Herbs.map((herb) => <HerbBox herb={herb} setHerbTraining={setHerbTraining} key={herb.name}/>)} */}
      </div>
    </div>
  )
}