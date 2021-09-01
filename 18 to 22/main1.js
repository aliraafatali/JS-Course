let a = 10;
let b = "10";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
// pre increment
// add
// unary plus, post increment
// add
// unary plus, post increment
// subtract
// unary plus, post increment
console.log(`${11 + 10 + 80 - 11}`);

console.log(++a + -b + +c++ - -a++ + +a);
// pre increment
// add
// unary negation
// add
// unary plus, post increment
// subtract
// unary negation, post increment
// add
// pre increment
console.log(`${13 + -11 + 81 + 13 + 14}`);

// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*pre decrement
add
unary plus
add
pre decrment
multiply
unary plus, post increment
subtract
unary plus
multipy
add
pre negation
subtract
unary plus*/
console.log(`${81 + 11 + 13 * 11 - 12 * 13 + 12 - 1}`);

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * e); // 2000
console.log(++g * ++e + ++f + -d); // 173
