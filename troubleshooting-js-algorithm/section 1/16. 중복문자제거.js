function solution (str) {
  let answer = '';

  for(c of new Set(str)) {
    answer += c;
  };

  return answer;
}

console.log(solution('ksekkset'))