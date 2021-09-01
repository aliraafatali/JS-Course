let day = "   friday    ";
day = day.trim().charAt(0).toUpperCase() + day.trim().slice(1);

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log(`No Appointments Available on ${day}`);
    break;
  case "Monday":
  case "Thursday":
    console.log(`From 10:00 AM To 5:00 PM on ${day}`);
    break;
  case "Tuesday":
    console.log(`From 10:00 AM To 6:00 PM on ${day}`);
    break;
  case "Wednesday":
    console.log(`From 10:00 AM To 7:00 PM on ${day}`);
    break;
  default:
    console.log("Its Not A Valid Day");
}
