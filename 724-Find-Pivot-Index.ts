function pivotIndex(nums: number[]): number {
  let sum = 0;
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) {
      return i;
    } else {
      leftSum += nums[i];
    }
  }

  return -1;
}
