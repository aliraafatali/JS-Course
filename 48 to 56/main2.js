let start = 10;
let end = 100;
let exclude = 40;
for (i = start; i <= end; ) {
  if (i !== exclude) {
    document.write(`<p>${i}</p>`);
  }

  i = i + start;
}

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
