function solution(n, left, right) {
  let x = Math.floor(left / n);
  let y = left % n;
  const answer = [];
  for(let i = 0; i < right - left + 1; ++i) {
    answer.push(Math.max(x,y) + 1);
    ++y;
    if(y === n) {
      ++x;
      y = 0;
    }
  }
  return answer;
}