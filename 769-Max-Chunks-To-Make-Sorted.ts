function maxChunksToSorted(arr: number[]): number {
  let max = 0;
  let chuckCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    max = Math.max(max, arr[i]);
    if (max === i) {
      chuckCount++;
    }
  }

  return chuckCount;
}
