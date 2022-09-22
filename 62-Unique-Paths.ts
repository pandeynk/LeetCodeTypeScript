function uniquePaths(m: number, n: number): number {
  let matrix = new Array(m);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(n).fill(1);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }

  return matrix[m - 1][n - 1];
}

console.log(uniquePaths(3, 7));
