function solution(a, b, c){
    // case 1
    const values = [a,b,c].sort();
    return values[0] + values[1] > values[2] ? 'YES': 'NO';

    // case 2
    const sum = a + b + c;
    const max = Math.max([a,b,c]);
    return sum - max > max ? 'YES' : 'NO'
}
console.log(solution(13, 33, 17));