function solution(queue1, queue2) {
    const sum = (queue) => queue.reduce((acc, cur) => acc + cur);
    const goal = sum([...queue1, ...queue2]) / 2;
    let cnt = 0;

    if(sum([...queue1, ...queue2]) === 1 || [...queue1, ...queue2].filter((value) => value > goal).length) {
        return -1;
    }

    while (true) {
        const que1Sum = sum(queue1);
        const que2Sum = sum(queue2);

        if(que1Sum === que2Sum) {
            return cnt;
        }

        if(que1Sum < que2Sum) {
            queue1.push(queue2.shift());
        } else {
            queue2.push(queue1.shift());
        }
        cnt++;
    }
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2],	[1, 10, 1, 2]));
console.log(solution([1, 1],	[1, 5]));