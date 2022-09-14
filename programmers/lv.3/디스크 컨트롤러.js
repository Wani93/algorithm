function solution(jobs) {
  jobs.sort((a,b) => {
    if(a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  const jobCnt = jobs.length;
  const [requestTime, runTime] = jobs.shift();
  let curTime = requestTime + runTime;
  let totalTime = runTime;
  while(jobs.length) {
    let findTarget = false;
    jobs.sort((a, b) => a[1] - b[1]);
    for(let i = 0; i < jobs.length; i++) {
      if(jobs[i][0] <= curTime) {
        const [requestTime, runTime] = jobs.splice(i, 1)[0];
        curTime += runTime;
        totalTime += curTime - requestTime;
        findTarget = true;
        break;
      }
    }
    if(!findTarget) {
      jobs.sort((a,b) => {
        if(a[0] === b[0]) {
          return a[1] - b[1];
        }
        return a[0] - b[0];
      });
      const [requestTime, runTime] = jobs.shift();
      curTime = requestTime + runTime;
      totalTime += curTime - requestTime;
    }
  }
  return Math.floor(totalTime / jobCnt);
}