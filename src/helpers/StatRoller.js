export default function StatRoller() {
  function generate(from, to, size, sum) {
    function iter(right, delta) {
        if (delta < 0) return;
        if (!delta && right.length === size) return result.push(right);
        if (!delta || right.length === size) return;
        
        for (let i = from; i <= Math.min(delta, to); i++)
            iter([...right, i], delta - i);
    }
    
    const result = [];
    iter([], sum);
    return result;
  }

  const min = 4;
  const max = 12;
  const nums = 4;
  const total = 25;

  const result = generate(min, max, nums, total);

  let index = Math.floor(Math.random() * result.length);

  return result[index];
}