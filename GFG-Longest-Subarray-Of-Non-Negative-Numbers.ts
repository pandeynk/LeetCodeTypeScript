function longestSubarray(nums: number[]) {
  let totalCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let currentCount = 0;

    for (let j = i; j < nums.length; j++) {
      if (nums[j] >= 0) {
        currentCount++;
        i++;
      } else {
        break;
      }
    }

    totalCount = Math.max(totalCount, currentCount);
  }

  return totalCount;
}

console.log(longestSubarray([1, 0, 4, 0, 1, -1, -1, 0, 0, 1, 0]));
