function solution (str) {
  let answer = [...str].filter(c => c >= 'A' && c <= 'Z').length;
  return answer;
}

console.log(solution('KoreaTimeGood'))