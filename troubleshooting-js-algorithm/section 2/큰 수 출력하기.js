function solution(nums) {
  let answer = `${nums[0]}`;
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] > nums[i-1]) {
      answer += ` ${nums[i]}`;
    }
  }
  return answer;
}

console.log(solution([7,3,9,5,6,12]))