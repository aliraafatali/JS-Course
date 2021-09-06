let nums = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums.reduce(function (acc, car) {
  return car % 2 === 0 ? acc * car : acc + car;
},1);
console.log(newNums)
// 500

let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let newArray = myArray.slice(0, 3).join("") + myArray[3].join("") + myArray[4];
let newArray = myArray.reduce(function (acc, car) {
  return typeof car === "string" ? acc.concat(car) : acc.concat(car.join(""));
});

console.log(newArray);

// Elzero

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let newMix = mix
  .map(function (ele) {
    return isNaN(ele) ? ele : "";
  })
  .reduce(function (acc, car) {
    return acc !== "" ? acc.concat(car) : car;
  });
console.log(newMix);

// Elzero

let myString = "EElllzzzzzzzeroo";

let newString = myString.split("").filter(function (ele, index) {
  return ele !== myString[index + 1];
});
console.log(newString);

// Elzero

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newString10 = numsAndStrings.filter(function (ele) {
  return -!isNaN(ele);
});
console.log(newString10);

// [-1, -10, 10, 20, -5, -3]
