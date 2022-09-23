function gcd(a: number, b: number): number {
  if (a === 0) {
    return b;
  } else {
    return gcd(b % a, a);
  }
}

function findGCD(nums: number[]): number {
  if (nums.length < 2) return 0;

  let largest = 0;
  let smallest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    largest = Math.max(largest, nums[i]);
    smallest = Math.min(smallest, nums[i]);
  }

  return gcd(largest, smallest);
}

console.log(findGCD([2, 5, 6, 9, 10]));
