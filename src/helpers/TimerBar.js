import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function TimerBar() {
  const character = useSelector((state) => state.character);
  const training = character.currently_training;
  const trainingTime = training.item.time;
  const [barTicks, setBarTicks] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (barTicks === 100) {
        setBarTicks(0);
      } else {
        setBarTicks(barTicks + 1);
      }
    }, trainingTime/100)

    return () => clearInterval(interval);
  })

  return (
    <div className='h-3 w-full bg-gray-300'>
      <div
          style={{ width: `${barTicks}%`}}
          className={`h-full bg-blue-500`}>
      </div>
    </div>
  )
}