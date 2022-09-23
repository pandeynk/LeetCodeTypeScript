function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length < 1 || matrix[0].length < 1) return false;

  const rows = matrix.length;
  const cols = matrix[0].length;

  let top = 0;
  let left = 0;
  let bottom = rows - 1;
  let right = cols - 1;

  let isFound = false;
  while (right >= left && top <= bottom) {
    console.log(top, left, bottom, right);
    if (target === matrix[top][right]) {
      isFound = true;
      break;
    } else if (target < matrix[top][right]) {
      right--;
    } else if (target > matrix[top][right]) {
      top++;
    }
    console.log(top, left, bottom, right);
  }

  return isFound;
}

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
);
