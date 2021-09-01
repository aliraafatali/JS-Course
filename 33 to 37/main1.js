// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "KSA";

// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "Egypt") {
//   price -= 40;
// } else if (country === "Syria") {
//   price -= 50;
// } else {
//   price -= 10;
// }
// console.log(price);
theName = "Mona";
theGender = "Female";
theName = "Ahmed";
theGender = "Male";
theAge = 20;
theAge = 15;
theAge = 60;
theAge = 1;

// if (theGender === "Male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }
// theGender === "Male" ? console.log("Mr") : console.log("Mrs");
// document.write(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);
// theAge == 20
//   ? document.write("20 years old")
//   : theAge > 20 && theAge <= 30
//   ? document.write("21 to 30")
//   : theAge > 30 && theAge <= 60
//   ? document.write("31 to 60")
//   : theAge > 60
//   ? document.write("Older than 60")
//   : document.write("Younger than 20");

if (theAge === 20) {
  document.write("20 years old");
} else if (theAge > 20 && theAge <= 30) {
  document.write("21 to 30");
} else if (theAge > 30 && theAge <= 60) {
  document.write("31 to 60");
} else if (theAge > 60) {
  document.write("Older than 60");
} else if (theAge < 20 && theAge >= 1) {
  document.write("Younger than 20");
} else {
  document.write("Unknown");
}
