// id range 82 - 
// buyable potions are healing aspects (mostly)
// potion types:
// 1 - flat amount healing
// 2 - percentage based healing (percentage depicted as whole number)
// 3 - other
// healing types:
// 1 - hp
// 2 - mp

const red_potion = {
  id: 82,
  name: "Red Potion",
  type: 2,
  skill: null,
  potion_type: 1,
  heal_amount: 50,
  cost: 100,
  level_req: 1,
  healing_type: 1
}

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
}

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
}



const All_Buyable_Potion = [red_potion]