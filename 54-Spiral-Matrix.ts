function spiralOrder(matrix: number[][]): number[] {
  let left = 0,
    right = matrix[0].length,
    spiralMatrix = [],
    top = 0,
    bottom = matrix.length;
  while (left < right && top < bottom) {
    // Move right
    for (let i = left; i < right; i++) {
      spiralMatrix.push(matrix[top][i]);
    }
    top++;
    // Move down
    for (let i = top; i < bottom; i++) {
      spiralMatrix.push(matrix[i][right - 1]);
    }
    right--;
    // Check condition again after updating top and right pointers
    if (!(left < right && top < bottom)) {
      break;
    }
    //Move left
    for (let i = right - 1; i >= left; i--) {
      spiralMatrix.push(matrix[bottom - 1][i]);
    }
    bottom--;
    //Move Up
    for (let i = bottom - 1; i >= top; i--) {
      spiralMatrix.push(matrix[i][left]);
    }
    left++;
  }
  return spiralMatrix;
}
