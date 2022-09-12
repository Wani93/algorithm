function solution(priorities, location) {
  const newPriorities = priorities.map((value, idx) => ({
    id: idx,
    value,
  }))
  const sortedPriorities = [];
  while(newPriorities.length) {
    const target = newPriorities.shift();
    newPriorities.find(({value}) => value > target.value) ? newPriorities.push(target) : sortedPriorities.push(target);
  }
  return sortedPriorities.findIndex(({id}) => id === location) + 1;
}
solution([2, 1, 3, 2], 2);