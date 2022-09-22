function solution (n, cars) {
  return cars.filter((car) => car % 10 === n).length
}

console.log(solution(3, [25,23,11,47,53,17,33]))
console.log(solution(0, [12,20,54,30,87,91,30]))
