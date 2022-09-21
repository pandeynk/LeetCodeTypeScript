function contributionOfElementIntoSubMatrices(
  matrix: number[][],
  x: number,
  y: number
): number {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const topLeftSubMatrices = (x + 1) * (y + 1);
  const bottomRightSubMatrices = (rows - x) * (cols - y);

  return topLeftSubMatrices * bottomRightSubMatrices * matrix[x][y];
}

function matrixSum(matrix: number[][]): number {
  if (matrix.length < 1 || matrix[0].length < 1) return 0;

  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      sum += contributionOfElementIntoSubMatrices(matrix, i, j);
    }
  }

  return sum;
}

console.log(
  matrixSum([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ])
);
