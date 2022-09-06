function solution(nums) {
  const max = nums.length / 2;
  const newNumSize = new Set(nums).size;

  return newNumSize > max ? max : newNumSize
}