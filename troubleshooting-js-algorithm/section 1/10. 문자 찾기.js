function solution (str1, str2) {
  let answer = [...str1]
  return answer.filter((c) => c === str2).length;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'))