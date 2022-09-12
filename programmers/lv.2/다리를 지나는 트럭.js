function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let curWeight = truck_weights[0];
  const drivingTrucks = [{bridgeTime: 0, weight: truck_weights.shift()}];
  while(drivingTrucks.length || truck_weights.length) {
    drivingTrucks.forEach((truck) => {
      truck.bridgeTime += 1;
    })
    if(drivingTrucks[0].bridgeTime > bridge_length) {
      curWeight -= drivingTrucks.shift().weight;
    }
    if(curWeight + truck_weights[0] <= weight) {
      curWeight += truck_weights[0];
      drivingTrucks.push({bridgeTime: 1, weight: truck_weights.shift()});
    }
    time++;
  }

  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]))