function countNegatives(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let left = 0,
    right = n - 1,
    count = 0;
  while (left < m && right >= 0) {
    if (grid[left][right] < 0) {
      count += m - left;
      right -= 1;
    } else {
      left += 1;
    }
  }
  return count;
}
