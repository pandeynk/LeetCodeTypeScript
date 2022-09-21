function runningRum(nums: number[]): number[] {
  let total = 0;
  nums.forEach(function (num, index) {
    nums[index] = total + num;
    total = nums[index];
  });

  return nums;
}
