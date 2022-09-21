function numSpecial(mat: number[][]): number {
  if (mat.length < 1 || mat[0].length < 1) return 0;

  let specialPositions = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        console.log(i, j);
        let vOnes = 0;
        let hOnes = 0;

        for (let k = 0; k < mat[0].length; k++) {
          if (mat[i][k] === 1 && k !== j) {
            hOnes++;
          }
        }

        for (let l = 0; l < mat.length; l++) {
          if (mat[l][j] === 1 && l !== i) {
            vOnes++;
          }
        }

        if (vOnes === 0 && hOnes === 0) {
          specialPositions.push([i, j]);
        }
      }
    }
  }

  return specialPositions.length;
}
