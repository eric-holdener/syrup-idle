import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function TickSystem() {
  const character = useSelector((state) => state.character);
  const time = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Logs every minute');
    }, time);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])
}