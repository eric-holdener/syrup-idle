import CharacterStats from "./CharacterStats";
import CharacterAbilityPoints from "./CharacterAbilityPoints";
import CharacterInfo from "./CharacterInfo";

export default function CharacterFullStatsView() {

  return (
    <div>
      <CharacterInfo />
      <CharacterAbilityPoints />
      <CharacterStats />
    </div>
  )
}