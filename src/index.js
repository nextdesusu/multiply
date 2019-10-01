module.exports = function multiply(first, second) {
  let num1r = first.split('').reverse(), num2r = second.split('').reverse();
  let res = new Array(num1r.length + num2r.length - 1), mult = 0;
  //Common length is equal to length of both numbers - 1
  for (let i = 0; i < num1r.length; i++){
    for (let j = 0; j < num2r.length; j++){
      mult = Number(num1r[i]) * Number(num2r[j]);
      if (res[i + j]){
        res[i + j] = res[i + j] + mult;
      } else {
        res[i + j] = mult; 
      }
    }
  }
  for (let ind = 0; ind < res.length; ind++){
    let str = String(res[ind]).split('').reverse();
    for (let chr = 1; chr < str.length; chr++){
      res[ind] = str[0];
      if (res[ind + chr] === undefined){
        res.push(0);
      }
      res[ind + chr] += Number(str[chr]);
    }
  }
  return res.reverse().join('');
}