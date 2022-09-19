function maxSubArray(nums: number[]): number {
  let curMax = nums[0];
  let totalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(nums[i], curMax + nums[i]);
    totalMax = Math.max(curMax, totalMax);
  }

  return totalMax;
}
