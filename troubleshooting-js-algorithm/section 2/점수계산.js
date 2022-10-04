function solution (arr) {
  let score = 0;
  let curScore = 0;

  arr.forEach((value) => {
    if(value) {
      score += ++curScore;
    } else {
      curScore = 0;
    }
  })

  return score;
}

console.log(solution([1,0,1,1,1,0,0,1,1,0]))