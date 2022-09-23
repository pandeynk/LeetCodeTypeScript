function transpose(matrix: number[][]): number[][] {
  let arr = new Array(matrix[0].length)
    .fill(0)
    .map(() => new Array(matrix.length).fill(0));

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      arr[col][row] = matrix[row][col];
    }
  }

  return arr;
}

console.log(
  transpose([
    [1, 2],
    [3, 4],
  ])
);
