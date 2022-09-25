function subarraySum(nums: number[], k: number): number {
  let ans = 0;
  let sum = 0;
  const prefixSum: any = { 0: 1 };

  for (const n of nums) {
    sum += n;
    const diff = sum - k;
    ans += prefixSum[diff] ?? 0;
    prefixSum[sum] = ++prefixSum[sum] || 1;
  }

  return ans;
}

console.log(subarraySum([1, 1, 1], 2));
