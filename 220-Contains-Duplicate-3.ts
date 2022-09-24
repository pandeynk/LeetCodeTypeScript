const getBucketKey = (val: number, w: number) => {
  // generate a canonical key for this value

  // this also works for negative numbers:
  // Math.floor(-3 / 5) is mapped to -1
  // Math.floor(-6 / 5) is mapped to -2
  return Math.floor(val / w);
};

const containsNearbyAlmostDuplicate = (
  nums: number[],
  indexDiff: number,
  valueDiff: number
): boolean => {
  const buckets = new Map();

  // a bucket represents the values [0, valueDiff], so has valueDiff + 1 values
  const w = valueDiff + 1;

  for (let i = 0; i < nums.length; i++) {
    // check this bucket for almost duplicate
    const bucketKey = getBucketKey(nums[i], w);
    if (buckets.has(bucketKey)) {
      // found almost duplicate
      return true;
    }

    // check neighboring buckets for almost duplicate
    if (
      buckets.has(bucketKey - 1) &&
      Math.abs(nums[i] - buckets.get(bucketKey - 1)) <= valueDiff
    ) {
      // found almost duplicate
      return true;
    }
    if (
      buckets.has(bucketKey + 1) &&
      Math.abs(nums[i] - buckets.get(bucketKey + 1)) <= valueDiff
    ) {
      // found almost duplicate
      return true;
    }

    // since we haven't found an almost duplicate, we
    // can claim the bucket for this value
    buckets.set(bucketKey, nums[i]);

    // maintain a sliding window for indexes by deleting
    // the element that falls off the window
    if (i >= indexDiff) {
      buckets.delete(getBucketKey(nums[i - indexDiff], w));
    }
  }
  return false;
};
