// 종류 별 개수 구하기
// 종류 별 개수 + 1 해서 각각 곱하기 - 1
function solution(clothes) {
  const newClothes = clothes.reduce((acc, [name, type]) => {
    return {
      ...acc,
      [type]: acc[type] ? acc[type] + 1 : 1,
    }
  },{});


  const values = Object.values(newClothes);
  const answer = values.reduce((acc, cur) => {
    return acc * (cur + 1);
  }, 1) - 1;
  return answer
}

solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]);