function dayOfTheWeek(day: number, month: number, year: number): string {
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let sum = 4; // 1971 1st Jan, 5th week days, ie friday
  for (let i = 1971; i < year; i++) {
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) sum += 366;
    else sum = sum + 365;
  }
  for (let i = 0; i < month - 1; i++) {
    if (i == 1 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0))
      sum++;
    sum = sum + months[i];
  }
  sum = sum + day;

  return daysOfWeek[sum % 7];
}
