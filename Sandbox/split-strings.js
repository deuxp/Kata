function solution(str) {
  let pairs = [];
  if (str) {
    for (let i = 0; i < str.length; i += 2) {
      pairs.push(str.substr(i, 2))
    }
    let last = pairs[pairs.length - 1];
    if (last.length < 2) pairs[pairs.length - 1] += '_';
  }
  return pairs;
}

// console.log(solution('abc')) // should return ['ab', 'c_']

console.log(solution('')) // should return ['ab', 'cd', 'ef']

/*
function solution(s){
  return (s+"_").match(/.{2}/g)||[]
} */