function solution (str) {
  const len = str.length;
  const idx = len / 2;
  if(len % 2 === 0) {
    return str[idx -1] + str[idx]; // str.substring(idx-1, idx+1)
  } else {
    return str[Math.floor(idx)];
  }
}

console.log(solution('study'));