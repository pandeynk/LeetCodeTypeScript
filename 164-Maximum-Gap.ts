// Approach 1
// function maximumGap(nums: number[]): number {
//   const sortedNums = nums.sort((a: number, b: number) => a - b);
//
//   let maxDiff = 0;
//   for (let i = 1; i < nums.length; i++) {
//     maxDiff = Math.max(nums[i] - nums[i - 1], maxDiff);
//   }
//
//   return maxDiff;
// }

// Approach 2 - Pigeonhole Principle
function maximumGap(nums: number[]): number {
  if (nums.length < 2) return 0;

  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const bucketSize = Math.ceil((max - min) / (nums.length - 1));
  const numberOfBuckets = (max - min) / bucketSize;
  const buckets: any = [];

  for (let i = 0; i < nums.length; i++) {
    let bucketIndex = Math.floor((nums[i] - min) / bucketSize);
    if (!buckets[bucketIndex]) {
      buckets[bucketIndex] = {};
    }
    buckets[bucketIndex].used = true;
    buckets[bucketIndex].minVal = Math.min(
      nums[i],
      buckets[bucketIndex].minVal || Number.MAX_VALUE
    );
    buckets[bucketIndex].maxVal = Math.max(
      nums[i],
      buckets[bucketIndex].maxVal || 0
    );
  }

  const filteredBuckets = buckets.filter((bucket: any) => !!bucket);

  let maxGap = 0;
  for (let i = 1; i < filteredBuckets.length; i++) {
    maxGap = Math.max(
      maxGap,
      filteredBuckets[i].minVal - filteredBuckets[i - 1].maxVal
    );
  }
  return maxGap;
}

console.log(maximumGap([1, 1, 1, 1, 1, 5, 5, 5, 5, 5]));
