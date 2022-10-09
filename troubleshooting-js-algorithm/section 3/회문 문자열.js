function solution(str) {
  debugger
  str = str.toLowerCase();
  const pivot = Math.floor(str.length / 2);

  for(let i = 0; i < pivot; i++) {
    if(str[i] !== str[str.length - 1 - i]) {
      return 'NO';
    }
  }
  return 'YES';
}

console.log(solution('gooG'))