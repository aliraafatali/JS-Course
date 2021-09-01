let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 7)); // Zero
// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.substr(0, 6).split()); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6) + a.substr(10)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  a.charAt(0).toLowerCase() +
    a.substr(1, 15).toUpperCase() +
    a.charAt(16).toLowerCase()
); // eLZERO WEB SCHOOl
console.log(
  a.charAt(0).toLowerCase() + a.slice(1, -1).toUpperCase() + a.slice(-1)
); // eLZERO WEB SCHOOl
