let admins = ["Ahmed", "Osama", "Sayad", "Stop", "Samera"];
let myEmployees = [
  "Amged",
  "Sameh",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
let adminsStop = [];
for (i = 0; admins[i] !== "Stop"; i++) {
  adminsStop.push(admins[i]);
}
document.write(`We Have ${adminsStop.length} Admins`);
document.write(`<hr>`);
for (k = 0; k < adminsStop.length; k++) {
  document.write(`<div>`);
  count = 1;
  document.write(`The Admin For The Team ${k + 1} Is ${adminsStop[k]}`);
  document.write(`<h3>Team Member: </h3>`);
  for (j = 0; j < myEmployees.length; j++) {
    if (admins[k][0] === myEmployees[j][0]) {
      document.write(`<p>${count}-${myEmployees[j]}</p>`);
      count++;
    }
  }
  document.write(`<hr>`);
  document.write(`</div>`);
}
