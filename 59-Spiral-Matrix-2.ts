function generateMatrix(n: number): number[][] {
  let top = 0;
  let left = 0;
  let bottom = n;
  let right = n;
  let spiralMatrix: number[][] = [];
  let count = 1;

  while (left < right && top < bottom) {
    // Move right
    for (let i = left; i < right; i++) {
      if (!spiralMatrix[top]) {
        spiralMatrix[top] = [];
      }
      spiralMatrix[top][i] = count++;
    }
    top++;

    // Move down
    for (let i = top; i < bottom; i++) {
      if (!spiralMatrix[i]) {
        spiralMatrix[i] = [];
      }
      spiralMatrix[i][right - 1] = count++;
    }
    right--;
    // Check condition again after updating top and right pointers
    if (!(left < right && top < bottom)) {
      break;
    }
    //Move left
    for (let i = right - 1; i >= left; i--) {
      spiralMatrix[bottom - 1][i] = count++;
    }
    bottom--;
    //Move Up
    for (let i = bottom - 1; i >= top; i--) {
      spiralMatrix[i][left] = count++;
    }
    left++;
  }
  return spiralMatrix;
}
