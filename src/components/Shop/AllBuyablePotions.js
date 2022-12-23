// id range 82 - 
// https://bbb.hidden-street.net/items/useable-items/potion
// buyable potions are healing aspects (mostly)
// potion types:
// 1 - flat amount healing
// 2 - percentage based healing (percentage depicted as whole number)
// 3 - other
// healing types:
// 1 - hp
// 2 - mp
// 3 - hp and mp

const red_potion = {
  id: 82,
  name: "Red Potion",
  type: 2,
  skill: null,
  potion_type: 1,
  heal_amount: 50,
  cost: 25,
  level_req: 1,
  healing_type: 1
};

const barbarian_elixir = {
  id: 83,
  name: "Barbarian Elixir",
  type: 2,
  skill: null,
  potion_type: 1,
  heal_amount: 1500,
  cost: 500,
  level_req: 1,
  healing_type: 1
};

const blue_potion = {
  id: 84,
  name: "Blue Potion",
  type: 2,
  skill: null,
  potion_type: 1,
  heal_amount: 100,
  cost: 100,
  level_req: 1,
  healing_type: 2
};

const elixir = {
  id: 85,
  name: "Elixir",
  type: 2,
  skill: null,
  potion_type: 2,
  heal_amount: 50,
  cost: 1000,
  level_req: 1,
  healing_type: 3
};

const ginger_ale = {
  id: 86,
  name: "Ginger Ale",
  type: 2,
  skill: null,
  potion_type: 2,
  heal_amount: 75,
  cost: 1100,
  level_req: 1,
  healing_type: 3
};

const ginseng_root = {
  id: 87,
  name: "Ginseng Root",
  type: 2,
  skill: null,
  potion_type: 2,
  heal_amount: 40,
  cost: 750,
  level_req: 1,
  healing_type: 3
};

const honster = {
  id: 88,
  name: "Honster",
  type: 2,
  skill: null,
  potion_type: 2,
  heal_amount: 60,
  cost: 600,
  level_req: 1,
  healing_type: 1
};

const mana_bull = {
  id: 89,
  name: "Mana Bull",
  type: 2,
  skill: null,
  potion_type: 2,
  heal_amount: 60,
  cost: 600,
  level_req: 1,
  healing_type: 2
};

const mana_elixir = {
  id: 90,
  name: "Mana Elixir",
  type: 2,
  skill: null,
  potion_type: 1,
  heal_amount: 300,
  cost: 310,
  level_req: 1,
  healing_type: 2
};

const orange_potion = {
  id: 91,
  name: "Orange Potion",
  type: 2,
  skill: null,
  potion_type: 1,
  heal_amount: 150,
  cost: 80,
  level_req: 1,
  healing_type: 1
};

const power_elixir = {
  id: 92,
  name: "Power Elixir",
  type: 2,
  skill: null,
  potion_type: 2,
  heal_amount: 100,
  cost: 2500,
  level_req: 1,
  healing_type: 3
};

const sorcerer_elixir = {
  id: 93,
  name: "Sorcerer Elixir",
  type: 2,
  skill: null,
  potion_type: 1,
  heal_amount: 1500,
  cost: 2500,
  level_req: 1,
  healing_type: 2
};

const white_potion = {
  id: 95,
  name: "White Potion",
  type: 2,
  skill: null,
  potion_type: 1,
  heal_amount: 300,
  cost: 2500,
  level_req: 1,
  healing_type: 1
};

const All_Buyable_Potion = [red_potion]