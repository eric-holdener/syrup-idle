import CharacterStats from "./CharacterStats";
import CharacterAbilityPoints from "./CharacterAbilityPoints";
import CharacterInfo from "./CharacterInfo";

export default function CharacterFullStatsView() {

  return (
    <div className="w-full flex justify-center items-center h-full gap-2 p-3">
      <div className="flex flex-col justify-start items-end w-1/2 gap-2">
        <CharacterInfo />
        <CharacterAbilityPoints />
      </div>
      <div className="w-1/2">
        <CharacterStats />
      </div>
    </div>
  )
}