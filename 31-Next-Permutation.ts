/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length > 1) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }

    if (i >= 0) {
      let j = nums.length - 1;
      while (nums[j] <= nums[i]) {
        j--;
      }
      // swap
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }

    // reverse the array
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
}
