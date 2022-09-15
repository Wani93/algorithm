const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}
const getDungeonCnt = (k, dungeon) => {
  let cnt = 0;
  dungeon.forEach(([need, consumption]) => {
    if(k >= need) {
      k -= consumption;
      cnt++;
    }
  })
  return cnt;
}

function solution(k, dungeons) {
  const dungeonList = getPermutations(dungeons, dungeons.length);
  const cntList = dungeonList.map((dungeon) => getDungeonCnt(k, dungeon));
  return Math.max(...cntList);
}

console.log(solution(80,[[80,20],[50,40],[30,10]]));