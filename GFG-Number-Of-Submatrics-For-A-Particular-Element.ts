function numberOfSubMatrices(matrix: number[][], x: number, y: number): number {
  if (matrix.length < 1 || matrix[0].length < 1) return 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  const topLeftSubMatrices = (x + 1) * (y + 1);
  const bottomRightSubMatrices = (rows - x) * (cols - y);

  return topLeftSubMatrices * bottomRightSubMatrices;
}

console.log(
  numberOfSubMatrices(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1,
    1
  )
);
