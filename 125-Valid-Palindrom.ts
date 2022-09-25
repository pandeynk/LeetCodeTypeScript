function isPalindrome(s: string): boolean {
  s = s.toLowerCase().replace(/[\W_]/g, "");
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
