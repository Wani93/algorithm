function solution(lottos, win_nums) {
  const unknownCnt = lottos.filter((num) => num < 1).length; // 모르는 숫자 개수
  const realNum = lottos.filter((num) => num > 0);  // 아는 숫자 개수
  const correctCnt = realNum.length - (new Set([...win_nums, ...realNum]).size - 6);
  const max = correctCnt + unknownCnt;
  const min = correctCnt;
  const makeRank = (count) => {
    return count <= 1 ? 6 : 7 - count;
  }
  var answer = [makeRank(max), makeRank(min)];
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25]	,[31, 10, 45, 1, 6, 19]));
