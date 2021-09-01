function checkStatus(a = "unknown", b = "Unknown", c = "Unknown") {
  if (
    typeof a === "string" &&
    typeof b === "number" &&
    typeof c === "boolean"
  ) {
    if (c === true) {
      document.write(`Hello ${a}, Your Age Is ${b} Your Are Availabl For Hire`);
    } else {
      document.write(
        `Hello ${a}, Your Age Is ${b} Your Are Not Availabl For Hire`
      );
    }
  } else if (
    typeof a === "string" &&
    typeof c === "number" &&
    typeof b === "boolean"
  ) {
    if (b === true) {
      document.write(`Hello ${a}, Your Age Is ${c} Your Are Availabl For Hire`);
    } else {
      document.write(
        `Hello ${a}, Your Age Is ${c} Your Are Not Availabl For Hire`
      );
    }
  } else if (
    typeof c === "string" &&
    typeof b === "number" &&
    typeof a === "boolean"
  ) {
    if (a === true) {
      document.write(`Hello ${c}, Your Age Is ${b} Your Are Availabl For Hire`);
    } else {
      document.write(
        `Hello ${c}, Your Age Is ${b} Your Are Not Availabl For Hire`
      );
    }
  } else if (
    typeof b === "string" &&
    typeof a === "number" &&
    typeof c === "boolean"
  ) {
    if (c === true) {
      document.write(`Hello ${b}, Your Age Is ${a} Your Are Availabl For Hire`);
    } else {
      document.write(
        `Hello ${b}, Your Age Is ${a} Your Are Not Availabl For Hire`
      );
    }
  } else if (
    typeof c === "string" &&
    typeof a === "number" &&
    typeof b === "boolean"
  ) {
    if (b === true) {
      document.write(`Hello ${c}, Your Age Is ${a} Your Are Availabl For Hire`);
    } else {
      document.write(
        `Hello ${c}, Your Age Is ${a} Your Are Not Availabl For Hire`
      );
    }
  }
}
checkStatus(26, false, "Ali");

// Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hi
