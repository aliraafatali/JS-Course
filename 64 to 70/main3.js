let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

function specialMix(...data) {
  let x = 0;
  for (i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i])) === true || isNaN(parseInt(data[i])) === 0) {
      continue;
    } else {
      x = x + parseInt(data[i]);
    }
  }
  if (x === 0) {
    return "All Is Strings";
  } else {
    return x;
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

