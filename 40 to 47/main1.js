let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.reverse().splice(false, true + true);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(true, true + true + true)); // ["Elham", "Mazero"]

console.log(
  my[+true][+false] +
    my[+true][+true] +
    my[+true + true][+true + true] +
    my[+true + true][+true + true + true] +
    my[+true + true][+true + true + true + true] +
    my[+true + true][+true + true + true + true + true]
); // "Elzero"

console.log(
  my[+true + true][+true + true + true + true] +
    my[+true + true][+true + true + true + true + true].toUpperCase()
); // "rO"
