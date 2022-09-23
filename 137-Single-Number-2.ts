function singleNumber(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  const map = new Map();

  for (let i = 0; i < nums.length; ++i) {
    const found = map.get(nums[i]);
    if (found === 2) {
      continue;
    }
    if (found === 1) {
      map.set(nums[i], 2);
    } else {
      map.set(nums[i], 1);
    }
  }

  let num = null;
  map.forEach((value, n) => {
    if (value === 1) {
      num = n;
    }
  });

  return num;
}
