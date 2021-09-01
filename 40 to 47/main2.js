let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false, true + true + true)); // ["Ahmed", "Elham", "Osama"];
myFriends.pop();
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.splice(false, true);
friends.splice(true + true, true);
console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = arrOne.concat(arrTwo).sort().reverse();
// Write One Single Line Of Code
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[+true + true][+false].slice(+true + true)); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
haystack.indexOf(needle);
haystack.lastIndexOf(needle);
haystack.join().search("JS");
if (haystack.indexOf(needle) >= 0) console.log("Found");
else console.log("Not found");

// Write 3 Solutions

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
allArrs = arr2[2].toLowerCase() + arr1[2].toLowerCase() + arr2[3].toLowerCase();
console.log(allArrs); // fxy
