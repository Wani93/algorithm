function solution(n) {
  const DOZEN = 12;
  return Math.ceil(n / DOZEN);
}

console.log(solution(25));
console.log(solution(178));
