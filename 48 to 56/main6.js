let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
n = friends.indexOf("Sayed");
for (i = +false; i < friends.length; i++) {
  if (
    friends[i][+false] !== letter &&
    friends[i][+false] !== letter.toUpperCase()
  ) {
    document.write(`<div>${n} => ${friends[i]}</div>`);
    n++;
  }
}
/* Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"*/

