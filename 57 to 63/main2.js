function sayHello(theName, theGender) {
  if (theGender === "Male") {
    document.write(`<div>Hello Mr ${theName}</div>`);
  } else if (theGender === "Female") {
    document.write(`<div>Hello Miss ${theName}</div>`);
  } else if (theGender === undefined) {
    document.write(`<div>Hello ${theName}</div>`);
  }
}

//Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

function calculate(firstNum, secondNum, operation) {
  if (operation === "add") {
    document.write(`<div>${firstNum + secondNum}</div>`);
  } else if (operation === "subtract") {
    document.write(`<div>${firstNum - secondNum}</div>`);
  } else if (operation === "multiply") {
    document.write(`<div>${firstNum * secondNum}</div>`);
  } else if (secondNum === undefined || firstNum === undefined) {
    document.write("Second Number Not Found");
  } else if (operation === undefined) {
    document.write(`<div>${firstNum + secondNum}</div>`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`Months Example => ${theAge * 12} Months`);
    console.log(`weeks Example => ${theAge * 12 * 4} Weeks`);
    console.log(`days Example => ${theAge * 12 * 4 * 7} Days`);
    console.log(`hours Example => ${theAge * 12 * 4 * 7 * 24} Hours`);
    console.log(`minutes Example => ${theAge * 12 * 4 * 7 * 24 * 60} Minutes`);
    console.log(
      `seconds Example => ${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`
    );
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(26); // Months Example => 456 Months

function createSelectBox(startYear, endYear) {
  document.write(`<div>`);
  document.write(`<label for="rangYears">Rang Years</label>`);
  document.write(`<select id="rangYears">`);
  for (i = startYear; i <= endYear; i++) {
    document.write(`<option>${i}<option>`);
  }
  document.write(`</select>`);

  document.write(`<div>`);
}
createSelectBox(2000, 2021);
createSelectBox(1995, 2021);

function multiply(...ab) {
  let result = 1;
  for (i = 0; i < ab.length; i++) {
    if (typeof ab[i] === "string") {
      continue;
    }
    ab[i] === Math.floor(ab[i]);
    result = result * Math.floor(ab[i]);
  }

  document.write(`<div>${result}</div>`);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
