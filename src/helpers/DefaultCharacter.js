export default function defaultCharacter(name, job, str, luk, dex, int) {
  let char_job = ""
  if (job === 1) {
    char_job = "Beginner"
  } else if (job === 2) {
    char_job = "Noblesse"
  }

  const default_char = {
    currentHp: 50,
    name: name,
    archetype: job,
    job: char_job,
    level: 1,
    maxHp: 50,
    maxMp: 10,
    currentMp: 10,
    exp: 0,
    availableAp: 0,
    str: str,
    dex: dex,
    int: int,
    luk: luk,
    xpTNL: 1144,
    equipInventory: {},
    useInventory: {},
    etcInventory: {},
    equipment: {
      cap: null,
      medal: null,
      forehead: null,
      ring_1: null,
      ring_2: null,
      ring_3: null,
      ring_4: null,
      eye_acc: null,
      ear_acc: null,
      mantle: null,
      chest: null,
      pendant: null,
      shoulder: null,
      shield: null,
      gloves: null,
      pants: null,
      belt: null,
      shoes: null
    },
    currently_training: null
  }
  return default_char
}