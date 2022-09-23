class NumMatrix {
  matrix: number[][];
  constructor(matrix: number[][]) {
    this.matrix = matrix;

    for (let i = 0; i < this.matrix.length; i++) {
      let total = 0;
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (i === 0) {
          total = total + this.matrix[i][j];
          matrix[i][j] = total;
        } else if (j === 0) {
          total = total + this.matrix[i][j] + this.matrix[i - 1][j];
          matrix[i][j] = total;
        } else {
          total =
            matrix[i - 1][j] + matrix[i][j] + total - matrix[i - 1][j - 1];
          matrix[i][j] = total;
        }
      }
    }
  }

  sumRegion(top: number, left: number, bottom: number, right: number): number {
    if (top === 0 && left === 0) {
      return this.matrix[bottom][right];
    } else if (top === 0) {
      return this.matrix[bottom][right] - this.matrix[bottom][left - 1];
    } else if (left === 0) {
      return this.matrix[bottom][right] - this.matrix[top - 1][right];
    } else {
      return (
        this.matrix[bottom][right] -
        this.matrix[bottom][left - 1] -
        this.matrix[top - 1][right] +
        this.matrix[top - 1][left - 1]
      );
    }
  }
}

const mat = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
console.log(mat.sumRegion(1, 2, 2, 4));
