function diagonalSum(mat: number[][]): number {
  let a = 0;
  let b = mat.length - 1;
  for (let i = 0; i < mat.length; i++) {
    if (i === b) {
      a += mat[i][i];
    } else {
      a += mat[i][b] + mat[i][i];
    }
    b--;
  }
  return a;
}
