// id range: 25 - 37

const sailfish = {
  id: 25,
  name: "Sailfish",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const whitebait = {
  id: 26,
  name: "Whitebait",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const crucian_carp = {
  id: 27,
  name: "Crucian Carp",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const salmon = {
  id: 28,
  name: "Salmon",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const common_carp = {
  id: 29,
  name: "Common Carp",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const tuna = {
  id: 30,
  name: "Tuna",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const cutlassfish = {
  id: 31,
  name: "Cutlass Fish",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const mackeral = {
  id: 32,
  name: "Mackeral",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const eel = {
  id: 33,
  name: "Eel",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const halibut = {
  id: 34,
  name: "Sailfish",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const bass = {
  id: 35,
  name: "Bass",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const mystery_fish = {
  id: 36,
  name: "? Fish",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const rare_fish = {
  id: 37,
  name: "Rare Fish",
  time: 3000,
  drop_range: [2, 3, 4],
  type: 3,
  skill: 2
};

const pond = {
  name: "Pond",
  skill: 2,
  req_lvl: 1,
  items: [common_carp, crucian_carp, whitebait]
}

const river = {
  name: "River",
  skill: 2,
  req_lvl: 1,
  items: [halibut, sailfish, salmon]
}

const ocean = {
  name: "Ocean",
  skill: 2,
  req_lvl: 1,
  items: [bass, rare_fish, mackeral, tuna]
}

const deep_sea = {
  name: "Deep Sea",
  skill: 2,
  req_lvl: 1,
  items: [mystery_fish, eel, cutlassfish]
}

const All_Fish = [pond, river, ocean, deep_sea];

export { All_Fish };