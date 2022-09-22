function singleNumber(nums: number[]): number {
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    a = a ^ nums[i];
  }
  return a;
}

console.log(singleNumber([2, 2, 1]));
