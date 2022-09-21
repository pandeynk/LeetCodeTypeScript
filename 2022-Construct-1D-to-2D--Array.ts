function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  if (original.length < 1 || m * n !== original.length) return [];

  let start = 0;
  let arr = [];
  for (let i = 0; i < m; i++) {
    arr.push(original.slice(start, (i + 1) * n));
    start = (i + 1) * n;
  }

  return arr;
}
