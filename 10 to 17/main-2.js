let numberOne = 10,
  numberTwo = 20;
console.log(String(numberOne) + String(numberTwo));
console.log(typeof ("" + numberOne + numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberTwo + "\n" + numberOne);
console.log(`${numberTwo}
${numberOne}`);
let elzero = [10, 15, 17];
elzero.innerHTML = "object";
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_
