let start = 1;
let end = 6;
let breaker = 2;
for (i = +false; i < end; i++) {
  document.write(`<div>${i + 1}</div>`);
  document.write(`-- ${breaker}`);
  document.write(`<div> --${end - breaker}</div>`);
}

/* Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/
