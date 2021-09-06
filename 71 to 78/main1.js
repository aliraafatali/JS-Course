let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z";
let solution = myString
  .split("")
  .filter(function (ele) {
    return isNaN(ele);
  })
  .filter(function (ele) {
    return ele !== ",";
  })
  .join("")
  .slice(1, -1)
  .split("_")
  .join(" ");

console.log(solution); //Elzero web school
