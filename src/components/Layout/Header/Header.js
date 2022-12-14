import SettingsDropdown from "./SettingsDropdown";
import CharacterDropdown from "./CharacterDropdown";
import InventoryDropdown from "./InventoryDropdown";

export default function Header() {

  return (
    <div className="w-full flex gap-2 justify-end px-3 py-3 bg-slate-700">
      <CharacterDropdown />
      <InventoryDropdown />
      <SettingsDropdown />
    </div>
  )

}