export default function DropCreator(etc=[], ore=[], common_equips=[], warrior_equips=[],
                                    magician_equips=[], bowman_equips=[], thief_equips=[],
                                    pirate_equips=[], useable_drops=[], maker_items=[]) {
  return {
    etc: etc,
    ore: ore,
    common_equips: common_equips,
    warrior_equips: warrior_equips,
    magician_equips: magician_equips,
    bowman_equips: bowman_equips,
    thief_equips: thief_equips,
    pirate_equips: pirate_equips,
    useable_drops: useable_drops,
    maker_items: maker_items
  }
}