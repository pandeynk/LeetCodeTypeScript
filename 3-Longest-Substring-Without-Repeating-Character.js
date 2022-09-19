var lengthOfLongestSubstring = function (s) {
  let hash = {};
  let max = 0;
  let temp = 0;
  const arr = s.split("");

  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
      temp++;
      max = max > temp ? max : temp;
    } else {
      temp = 1;
      hash = {};
      j = i;
      hash[arr[j]] = i;
    }
    console.log(hash);
    i++;
  }

  return max;
};

console.log(lengthOfLongestSubstring("dvdf"));
