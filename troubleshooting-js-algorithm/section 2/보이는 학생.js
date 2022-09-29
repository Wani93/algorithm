function solution(arr) {
  let max = arr[0];
  let answer = 1;
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer
}

console.log(solution([130,135,148,145,150,150,153]));