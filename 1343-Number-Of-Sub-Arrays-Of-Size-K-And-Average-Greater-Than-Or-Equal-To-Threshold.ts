function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let windowStart = 0;
  let windowSum = 0;
  let result = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      const windowSize = windowEnd - windowStart + 1;
      const average = windowSum / windowSize;
      if (average >= threshold) result++;
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return result;
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
