import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function TimerBar() {
  const character = useSelector((state) => state.character);
  const training = character.currently_training;
  const intervalTime = training.item.time / 100;
  const [barTicks, setBarTicks] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (barTicks === 100) {
        setBarTicks(1);
      } else {
        setBarTicks(barTicks + 1);
      }
    }, intervalTime)

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