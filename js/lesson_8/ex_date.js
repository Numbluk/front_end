var today = new Date();

function dateSuffix(date) {
  var suffix = "th";
  var date_string = date.toString();
  var digit;

  if (date_string.length === 1 ) { digit = date_string[0]; }
  else if (date_string[0] !== "1") { digit = date_string[1]; }

  if (digit === "1") { suffix = "st"; }
  else if (digit === "2") { suffix = "nd"; }
  else if (digit === "3") { suffix = "rd"; }

  return date + suffix;
}
//
// console.log("Today's day is " + days_of_week[day] + " the " + dateSuffix(day_of_month));
//
// console.log("Today's day is " + days_of_week[day] + ", " + months[month] + " the " + day_of_month);


function outputWeekDay(date) {
  var days_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var day = days_of_week[date.getDay()];
  return day;
}

function outputDay(date) {
  var day_of_month = date.getDate();
  return day_of_month;
}

function outputMonth(date) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = months[date.getMonth()];
  return month;
}

function fullDate(date) {
  var weekday = outputWeekDay(date);
  var day = dateSuffix(outputDay(date));
  var month = outputMonth(date);

  return "Today's day is " + weekday + ", the " + day + " of " + month;
}

console.log(fullDate(today));

// function outputYear() {
//   return today.getYear() + 1900;
// }

console.log("The year is " + today.getFullYear());

console.log("Milliseconds since Jan 1st, 1970: " + today.getTime());

var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
console.log(fullDate(tomorrow));

var next_week = new Date(today);
console.log(today === next_week);
console.log(today.toDateString() === next_week.toDateString());
next_week.setDate(today.getDate() + 7);
console.log(today.toDateString() === next_week.toDateString());

function formatTime(date) {
  return date.getHours() + ":" + date.getMinutes();
}

console.log(formatTime(today));
