function maxProduct(nums: number[]): number {
  if (nums.length <= 0) return 0;

  let maxSoFar = nums[0];
  let minSoFar = nums[0];
  let result = maxSoFar;

  for (let i = 1; i < nums.length; i++) {
    const tempMax = Math.max(nums[i], maxSoFar * nums[i], minSoFar * nums[i]);
    minSoFar = Math.min(nums[i], maxSoFar * nums[i], minSoFar * nums[i]);

    maxSoFar = tempMax;
    result = Math.max(maxSoFar, result);
  }

  return result;
}
