function solution(a, b, c) {
    // case 1
    let value = a < b ? a : b;
    return value < c ? value : c;


    // case 2
    const max = 100;
    const values = [a,b,c];
    let answer = max;
    values.forEach((value) => {
        answer = answer > value ? value : answer;
    })
    return answer

}
console.log(solution(2, 5, 1));