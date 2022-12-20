import StopTraining from "../../../../helpers/StopTrainingButton"
// import TimerBar from "../../../../helpers/TimerBar"
// import { useSelector } from "react-redux"
// import EmptyTimerBar from "../../../../helpers/EmptyTimerBar";

export default function SmithingHeader() {
  // const character = useSelector((state) => state.character);
  // const training = character.currently_training;

  return (
    <div className="w-full h-1/6 bg-slate-800 mb-3">
      {/* {training ? (
        <TimerBar />
      ) : (
        <EmptyTimerBar />
      )} */}
      <p className="text-white">Smithing</p>
      <StopTraining />
    </div>
  )
}