function solution(n, arr1, arr2) {
  let answer = '';
  arr1.forEach((value, idx) => {
    if(value - arr2[idx] === 0) {
      answer += 'D';
    } else {
      switch (value) {
        case 1:
          answer += arr2[idx] === 2 ? 'B' : 'A';
          break;
        case 2:
          answer += arr2[idx] === 3 ? 'B' : 'A';
          break;
        case 3:
          answer += arr2[idx] === 1 ? 'B': 'A';
          break;
      }
    }
  })
  return answer;
}

console.log(solution(5, [2,3,3,1,3], [1,1,2,2,3]))