function maxChunksToSorted(arr: number[]): number {
  const rMin = new Array(arr.length).fill(0);
  rMin[arr.length] = Number.MAX_SAFE_INTEGER;

  for (let i = arr.length - 1; i >= 0; i--) {
    rMin[i] = Math.min(arr[i], rMin[i + 1]);
  }

  let lMax = Number.MIN_SAFE_INTEGER;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    lMax = Math.max(arr[i], lMax);

    if (lMax <= rMin[i + 1]) {
      count++;
    }
  }

  return count;
}
