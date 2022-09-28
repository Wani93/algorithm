function solution (str) {
  let answer = '';
  for(c of str) {
    answer += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  }
  return answer;
}

console.log(solution('StuDY'));