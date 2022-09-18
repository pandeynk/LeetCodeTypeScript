function findMaxConsecutiveOnes(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let max = 0;
  let tempMax = 0;

  nums.forEach(function (num, i) {
    if (i === 0 && num === 1) {
      max = 1;
      tempMax = max;
    } else {
      if (num === 1 && num === nums[i - 1]) {
        tempMax++;
      } else if (num === 1) {
        max = Math.max(max, tempMax);
        tempMax = 1;
      }
    }
  });

  return Math.max(max, tempMax);
}
