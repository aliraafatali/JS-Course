let start = 0;
let swappedName = "elZerO";
let newName = [];
for (j = 0; j < swappedName.length; j++) {
  if (swappedName[j] === swappedName[j].toUpperCase()) {
    newName.push(swappedName[j].toLowerCase());
  } else if (swappedName[j] === swappedName[j].toLowerCase()) {
    newName.push(swappedName[j].toUpperCase());
  }
}
document.write(newName.join(""));

// Output
// "ELzERo"

let starts = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (i = starts; i < mix.length; i++) {
  if (mix[i] > mix[starts]) {
    document.write(`<div>${mix[i]}</div>`);
  }
}

/* Output
2
3
4*/

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (counter < friends.length) {
  if (friends[counter][index] !== "A" && typeof friends[counter] !== "number") {
    document.write(`<div>${friends[counter]}</div>`);
  }
  counter++;
}

/* Output
"1 => Sayed"
"2 => Mahmoud" */
