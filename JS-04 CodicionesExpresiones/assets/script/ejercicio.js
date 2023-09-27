var temperaturaF = 95;

let celsius = (temperaturaF - 32) * 5/9;
console.log(celsius);


const currentDate = new Date();


const year = currentDate.getFullYear();
console.log("Current year", year);

const month = currentDate.getMonth() + 1; // Monts are zero-based
console.log("Current month:", month);

const day = currentDate.getDate();
console.log("Current day", day);

const dayWeek = currentDate.getDay();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const dayOfWeek = daysOfWeek[currentDate.getDay()];
console.log("Current day of the week", dayOfWeek);
