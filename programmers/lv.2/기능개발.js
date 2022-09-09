function solution(progresses, speeds) {
  const answer = [];
  const done = 100;
  const days = progresses.map((progress, idx) => Math.ceil((done - progress) / speeds[idx]));
  let max = days.shift();
  let cnt = 1;

  while(days.length) {
    const day = days.shift();
    if(max >= day) {
      cnt++;
    } else {
      max = day;
      answer.push(cnt);
      cnt = 1;
    }
  }
  answer.push(cnt);
  return answer;
}