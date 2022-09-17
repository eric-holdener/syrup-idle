
class Item {
  constructor(type) {
    this.type = type
  }
}

class Equipment extends Item {

  constructor(type, name, req_level, req_str, req_luk, req_int, req_dex, 
    wep_def, mag_def, job, str_bonus, dex_bonus, int_bonus, luk_bonus,
    upgrades_available, image) {
    super(type);
    this.name = name;
    this.req_level = req_level;
    this.req_str = req_str;
    this.req_luk = req_luk;
    this.req_int = req_int;
    this.req_dex = req_dex;
    this.wep_def = wep_def;
    this.mag_def = mag_def;
    this.job = job;
    this.str_bonus = str_bonus;
    this.dex_bonus = dex_bonus;
    this.int_bonus = int_bonus;
    this.luk_bonus = luk_bonus;
    this.upgrades_available = upgrades_available;
    this.image = image
  }

  scrollEquip(stat, bonus) {
    switch(stat) {
      case 1:
        this.str_bonus += bonus;
        break;
      case 2:
        this.dex_bonus += bonus;
        break;
      case 3:
        this.luk_bonus += bonus;
        break;
      case 4:
        this.int_bonus += bonus;
        break;
    }
    this.upgrades_available -= 1;
  }

  failedScroll() {
    this.upgrades_available -= 1;
  }
}

export {Equipment}