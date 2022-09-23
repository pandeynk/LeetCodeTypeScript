function minMeetingRooms(intervals: number[][]): number {
  if (intervals.length === 0) return 0;

  const start: number[] = new Array(intervals.length).fill(0);
  const end: number[] = new Array(intervals.length).fill(0);

  for (let i = 0; i < intervals.length; i++) {
    start[i] = intervals[i][0];
    end[i] = intervals[i][1];
  }

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let startPointer = 0;
  let endPointer = 0;
  let usedRooms = 0;

  while (startPointer < intervals.length) {
    if (start[startPointer] >= end[endPointer]) {
      usedRooms -= 1;
      endPointer += 1;
    }

    usedRooms += 1;
    startPointer += 1;
  }

  return usedRooms;
}
