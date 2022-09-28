function solution(...str) {
  return [...new Set(str)];

  // return s.filter((v, i) => {
  //   return s.indexOf(v) === i;
  // });
}

console.log(solution('good', 'time', 'good', 'time', 'student'));