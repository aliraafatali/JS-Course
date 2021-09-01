let start = 10;
let end = 0;
let stop = 3;

for (i = start; i > stop; i--) {
  if (i < start) {
    document.write(`<div>0${i}</div>`);
  } else {
    document.write(`<div>${i}</div>`);
  }
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
