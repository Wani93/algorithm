function solution (str) {
  // const onlyEng = str.toLowerCase().replace(/[^a-z]/g, '');
  const onlyEng = str
    .split('')
    .filter((c) =>
      (c >= 'A' && c <= 'Z') ||
      (c >= 'a' && c <= 'z'))
    .join()
    .toLowerCase();

  for(let i = 0; i < onlyEng.length; i++) {
    if(onlyEng[i] !== onlyEng[onlyEng.length - 1 - i]) {
      return 'NO';
    }
  }

  return 'YES';
}

console.log(solution('found7, time: study: Yduts: emit, 7Dnuof'));