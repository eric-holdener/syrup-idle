export default function EmptyTimerBar() {
  return (
    <div className='h-3 w-full bg-gray-300'>
      <div
          style={{ width: `0%`}}
          className={`h-full bg-blue-500`}>
      </div>
    </div>
  )
}