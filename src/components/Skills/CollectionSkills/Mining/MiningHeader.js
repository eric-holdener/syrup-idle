import StopTraining from "../../../../helpers/StopTrainingButton"
// import TimerBar from "../../../../helpers/TimerBar"
// import { useSelector } from "react-redux"
// import EmptyTimerBar from "../../../../helpers/EmptyTimerBar";
import { useSelector } from "react-redux";
import { deleteItem } from "../../../../state_management/Redux/Character/CharacterSlice";
import { useDispatch } from "react-redux";

export default function MiningHeader() {
  const character = useSelector((state) => state.character);
  // const training = character.currently_training;
  const dispatch = useDispatch();
  const payload = {
    id: 49, 
    quantity: 1, 
    type: 3
  }

  return (
    <div className="w-full h-1/6 bg-slate-800 mb-3">
      {/* {training ? (
        <TimerBar />
      ) : (
        <EmptyTimerBar />
      )} */}
      <p className="text-white">Mining Header</p>
      <StopTraining />
      <div className="flex gap-3">
      <button onClick={() => console.log(character.etcInventory)}>Test Inventory</button>
      <button onClick={() => dispatch(deleteItem(payload))}>Test Deletion</button>
      </div>
    </div>
  )
}