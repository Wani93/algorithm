function solution(arr) {
  const oddList = arr.filter((val) => val % 2 === 1);
  return [
    oddList.reduce((acc, cur) => acc + cur),
    Math.min(...oddList),
  ]
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]))