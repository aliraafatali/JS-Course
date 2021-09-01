let index = 10;
let jump = 2;
let end = 0;

for (i = index; i > jump; i -= jump) {
  document.write(`<div>${i}</div>`);
}

/* Output
10;
8;
6;
4;
*/
