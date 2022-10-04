function solution(arr) {
  const n = arr.length;
  let max = 0;
  let sum = 0;

  // for(let i = 0; i < n; i++) {
  //   sum = 0;
  //   for(let j = 0; j < n; j++) {
  //     sum += arr[i][j];
  //   }
  //   if(sum > max) {
  //     max = sum;
  //   }
  // }
  // for(let j = 0; j < n; j++) {
  //   sum = 0;
  //   for(let i = 0; i < n; i++) {
  //     sum += arr[i][j];
  //   }
  //   if(sum > max) {
  //     max = sum;
  //   }
  // }
  // sum = 0;
  // for(let i = 0; i < n; i++) {
  //   sum += arr[i][i];
  // }
  // if(sum > max) {
  //   max = sum;
  // }
  // sum = 0;
  // for(let i = n - 1; i < 0; i--) {
  //   sum += arr[i][n - i - 1];
  // }
  // if(sum > max) {
  //   max = sum;
  // }
  // return max;

  let answer = 0;
  let sum1,sum2 = 0;

  for(let i = 0; i < n; i++) {
    sum1=sum2=0;
    for(let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  sum1=sum2=0;
  for(let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i -1];
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

console.log(solution([
  [10,13,10,12,15],
  [12,39,30,23,11],
  [11,25,50,53,15],
  [19,27,29,37,27],
  [19,13,30,13,19]
]))