function solution (...str) {
  return Math.max(...str.map(c => c.length));
}

console.log(solution('5', 'teacher', 'time'))