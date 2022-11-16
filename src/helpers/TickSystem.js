import { useEffect } from "react";

export default function TickSystem(time) {
  const MINUTE_MS = time;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Logs every minute');
    }, MINUTE_MS);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])
}