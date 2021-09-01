let checker = (zName) =>
  function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };


console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// let names = function (...ab) {
//   return `String [${ab.join("],[")}] => Done`;
// };
let names = (...ab) => {
  return `String [${ab.join("],[")}] => Done`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ebrahim"));

// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => +one + +two + +nums;
// console.log(calc(10, 20, 50)); //80

let myNumbers = [20, 50, 10, 60];
function calc(one, two, ...nums) {
  return +one + +two + +nums;
}
console.log(calc(10, 20, 50)); //80
