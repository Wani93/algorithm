function solution(operations) {
  const answer = [];
  while (operations.length) {
    const [operation, value] = operations.shift().split(' ');
    switch (operation) {
      case 'I':
        answer.push(+value);
        break;
      case 'D':
        if(!answer.length) {
          break;
        }
        answer.sort((a, b) => a - b);
        if(+value === 1) {
          answer.pop();
        } else {
          answer.shift();
        }
        break;
    }
  }
  if(answer.length) {
    answer.sort((a, b) => a - b);
    return [answer[answer.length - 1], answer[0]];
  }
  return [0, 0];
}