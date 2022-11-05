// magic types:
// 1 - fire
// 2 - poison
// 3 - ice
// 4 - lightning
// 5 - holy

function MonsterCreator(name, exp, drops, low_meso, high_meso, speed, 
                        accuracy, avoidability, w_att, m_att, w_def, m_def, 
                        pd_rate, md_rate, unique_att, hp_recov, mp_recov,
                        weak_to_magic, normal_to_magic, strong_against_magic, level,
                        ) {
  return {
    name: name,
    exp: exp,
    drops: drops,
    low_meso: low_meso,
    high_meso: high_meso,
    speed: speed,
    accuracy: accuracy,
    avoidability: avoidability,
    w_att: w_att,
    m_att: m_att,
    w_def: w_def,
    m_def: m_def,
    pd_rate: pd_rate,
    md_rate: md_rate,
    unique_att: unique_att,
    hp_recov: hp_recov,
    mp_recov: mp_recov,
    weak_to_magic: weak_to_magic,
    normal_to_magic: normal_to_magic,
    strong_against_magic: strong_against_magic,
    level: level
  }
}

function BossCreator() {

}

export { MonsterCreator, BossCreator }