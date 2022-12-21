// id range 82 - 
// buyable potions are healing aspects (mostly)
// heal types:
// 1 - flat amount
// 2 - percentage based (percentage depicted as whole number)

const red_potion = {
  id: 82,
  name: "Red Potion",
  type: 2,
  skill: null,
  heal_type: 1,
  heal_amount: 50
}

const power_elixir = {
  id: 83,
  name: "Power Elixir",
  type: 2,
  skill: null,
  heal_type: 2,
  heal_amount: 100
}

const All_Buyable_Potion = [red_potion, power_elixir]