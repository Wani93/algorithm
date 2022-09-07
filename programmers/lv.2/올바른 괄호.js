function solution(s){
  let value = 0;
  for(let i = 0; i < s.length; i++) {
    s[i] === '(' ? value++ : value--;
    if(value < 0) {
      return false;
    }
  }
  return value === 0;
}