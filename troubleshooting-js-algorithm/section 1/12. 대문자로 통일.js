function solution (str) {
  let answer = '';
  for(c of str) {
    answer += c.toUpperCase();
  }
  return answer;
}

console.log(solution('ItisTimeToStudy'));