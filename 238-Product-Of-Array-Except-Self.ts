function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;
  const answer = new Array(length);
  answer[0] = 1;

  for (let i = 1; i < length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }

  let r = 1;
  for (let i = length - 1; i >= 0; i--) {
    answer[i] = answer[i] * r;
    r *= nums[i];
  }

  return answer;
}
