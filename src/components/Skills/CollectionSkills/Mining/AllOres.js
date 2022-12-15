// id range: 38 - 

const silver_ore = {
  id: 38,
  name: "Silver Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const opal_ore = {
  id: 39,
  name: "Opal Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const orihalcon_ore = {
  id: 40,
  name: "Orihalcon Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const amethyst_ore = {
  id: 41,
  name: "Amethyst Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const steel_ore = {
  id: 42,
  name: "Steel Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const sapphire_ore = {
  id: 43,
  name: "Sapphire Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const bronze_ore = {
  id: 44,
  name: "Bronze Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const adamantium_ore = {
  id: 45,
  name: "Adamantium Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const dex_crystal_ore = {
  id: 46,
  name: "Dex Crystal Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const mithril_ore = {
  id: 47,
  name: "Mithral Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const emerald_ore = {
  id: 48,
  name: "Emerald Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const gold_ore = {
  id: 49,
  name: "Gold Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const topaz_ore = {
  id: 50,
  name: "Topaz Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const aquamarine_ore = {
  id: 51,
  name: "Aquamarine Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const diamond_ore = {
  id: 52,
  name: "Diamond Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const power_crystal_ore = {
  id: 53,
  name: "Power Crystal Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const garnet_ore = {
  id: 54,
  name: "Garnet Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const dark_crystal_ore = {
  id: 55,
  name: "Dark Crystal Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const black_crystal_ore = {
  id: 56,
  name: "Black Crystal Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const wisdom_crystal_ore = {
  id: 57,
  name: "Wisdom Crystal Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const luk_crystal_ore = {
  id: 58,
  name: "LUK Crystal Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const lidium_ore = {
  id: 59,
  name: "Silver Ore",
  drop_range: [2, 3, 4],
  type: 3,
  skill: 3
};

const silver_vein = {
  name: "Silver Vein",
  skill: 3,
  req_lvl: 1,
  items: [silver_ore, opal_ore]
};

const magenta_vein = {
  name: "Magenta Vein",
  skill: 3,
  req_lvl: 1,
  items: [orihalcon_ore, amethyst_ore]
};
const blue_vein = {
  name: "Blue Vein",
  skill: 3,
  req_lvl: 1,
  items: [steel_ore, sapphire_ore]
};
const brown_vein = {
  name: "Brown Vein",
  skill: 3,
  req_lvl: 1,
  items: [bronze_ore, adamantium_ore]
};
const emerald_vein = {
  name: "Emerald Vein",
  skill: 3,
  req_lvl: 1,
  items: [dex_crystal_ore, mithril_ore, emerald_ore]
};
const gold_vein = {
  name: "Gold Vein",
  skill: 3,
  req_lvl: 1,
  items: [gold_ore, topaz_ore]
};
const aquamarine_vein = {
  name: "Aquamarine Vein",
  skill: 3,
  req_lvl: 1,
  items: [aquamarine_ore, diamond_ore]
};
const red_vein = {
  name: "Red Vein",
  skill: 3,
  req_lvl: 1,
  items: [power_crystal_ore, garnet_ore]
};
const black_vein = {
  name: "Black Vein",
  skill: 3,
  req_lvl: 1,
  items: [dark_crystal_ore, black_crystal_ore]
};
const purple_vein = {
  name: "Purple Vein",
  skill: 3,
  req_lvl: 1,
  items: [wisdom_crystal_ore, luk_crystal_ore, lidium_ore]
};

const All_Ores = [silver_vein, magenta_vein, blue_vein, brown_vein,
                  emerald_vein, gold_vein, aquamarine_vein, red_vein,
                  black_vein, purple_vein];
              
export { All_Ores };