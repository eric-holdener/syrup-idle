export default function StatRoller() {
  let max = 25;
  let str = randombetween(4, max-3);
  let luk = randombetween(4, max-2-str);
  let dex = randombetween(4, max-1-str-luk);
  let int = max - str - luk - dex;
  
  
  function randombetween(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  return [str, luk, dex, int]
}