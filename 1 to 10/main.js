document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";
console.log(
  "%cElzero %cWep %cSchool",
  "font-size:40px; color:red",
  "font-size:40px; color:green; font-weight:bold",
  "font-size:40px; color:white; background-color:blue"
);
console.group("Group 1");
console.log("massage one");
console.log("massage two");
console.group("Child Group");
console.log("massage one");
console.log("massage two");
console.group("Grand Child Group");
console.log("massage one");
console.log("massage two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("massage one");
console.log("massage two");

console.table(["Elzero", "ali", "ahmed", "mohamed"]);

// console.log("Iam In Console");
// document.write("Iam In Page");