function solution (str) {
  const onlyNum = str.toLowerCase().replace(/[a-z]/g, '');
  return +onlyNum;
}

console.log(solution('g0en2T0s8eSoft'));