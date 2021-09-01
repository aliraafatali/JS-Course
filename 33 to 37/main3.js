let numOne = 9;
// Condition Output => "009"

let numTwo = 20;
// Condition Output => "020"

let numThree = 110;
// Condition Output => "110"

numOne < 10
  ? console.log(Number(`00${numOne}`))
  : numOne > 10 && numOne < 100
  ? console.log(Number(`0${numOne}`))
  : numOne >= 100
  ? console.log(numOne)
  : console.log("Unknown");
numTwo < 10
  ? console.log(Number(`0${numTwo}`))
  : numTwo > 10 && numTwo < 100
  ? console.log(Number(`0${numTwo}`))
  : numTwo >= 100
  ? console.log(Number(`0${numTwo}`))
  : console.log("Unknown");
numThree < 10
  ? console.log(Number(`00${numThree}`))
  : numThree > 10 && numThree < 100
  ? console.log(Number(`0${numThree}`))
  : numThree >= 100
  ? console.log(numThree)
  : console.log("Unknown");

let num1 = 9;
let str = "9";
let num2 = "20";
num1 == str
  ? console.log('"{num1} Is The Same Value As {str}')
  : console.log('Unknown"');
num1 !== str && num1 == str
  ? console.log('"{num1} Is The Same Value As {str} But Not The Same Type"')
  : console.log("Unknown");
num1 != num2
  ? console.log('"{num1} Is Not The Same Value Or The Same Type As {num2}"')
  : console.log("Unknown");
// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {num2}"

