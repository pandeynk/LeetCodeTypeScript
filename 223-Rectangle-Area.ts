function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): number {
  //Find area of the 1st rectangle
  const area1 = (ax2 - ax1) * (ay2 - ay1);
  //Find area of the 2nd rectangle
  const area2 = (bx2 - bx1) * (by2 - by1);

  //Check if there is no overlap between the 2 rectangles, if so return the sum of the areas
  if (ax2 < bx1 || bx2 < ax1 || ay2 < by1 || by2 < ay1) return area1 + area2;

  // Find the internal and external intersection points to calculate the common area
  const cx1 = Math.max(ax1, bx1);
  const cx2 = Math.min(ax2, bx2);
  const cy1 = Math.max(ay1, by1);
  const cy2 = Math.min(ay2, by2);

  // Area of the common rectangle
  const cmn = (cx2 - cx1) * (cy2 - cy1);

  // Area covered = Sum of the area of 2 rectangles - Common area
  return area1 + area2 - cmn;
}

console.log(computeArea(-2, -2, 2, 2, -2, -2, 2, 2));
