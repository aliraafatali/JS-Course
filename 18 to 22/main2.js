console.log(((10 * 20 * 15 * 3 * 190) % 10) * 400); // 0

let num = 3;

// Solution One
console.log(num + num); // 6

// // Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log(num ** num / num - num); // 6

// Soultion Four
console.log(num + num + +false); // 6

// Solution Five
console.log(num + num++); // 6

// Solution Six
console.log(++num + true); // 6

let number = "10";

// Solution One
console.log(+number + +number++); // 20

// Solution Two
console.log(number-- + --number); // 20

// Solution Three
console.log(number + +true + ++number); // 20

// Solution Four
console.log(++number - +true + +false + --number); // 20
