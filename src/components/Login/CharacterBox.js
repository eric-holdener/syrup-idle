export default function CharacterBox(props) {
  return (
    <>
      {props.char ? (
        <div className="w-1/2 h-1/6 flex justify-center items-center">
          <p>Character</p>
        </div>
      ) : (
        <div className="w-1/2 h-1/6 flex justify-center items-center">
          <p>No Character</p>
        </div>
      )}
    </>
  )
}