function solution (arr) {
  // const len = arr.length;
  // const answer = [];
  // arr.forEach((v) => {
  //   answer.push(len - arr.filter((h) => v >= h).length + 1);
  // })
  //
  // return answer;

  const answer = Array.from({length: arr.length}).fill(1);

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] < arr[j]) {
        ++answer[i];
      }
    }
  }

  return answer;
}

console.log(solution([87,89,92,100,76]))