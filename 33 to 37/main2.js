let st = "Elzero Web School";
if (st !== "string") {
  console.log("Good");
}
if (st.replace(`${st}`, "number") === "number") {
  console.log("Good");
}
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
if (st.charAt(st.search(/w/i)).toLowerCase() === "w") {
  console.log("Good");
}
