const daysNum = new Date();
console.log(daysNum.getDay());
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let month = daysNum.getMonth();
let year = daysNum.getFullYear();
let currentDay = daysNum.getDay();
let currentDate = daysNum.getDate();
let totalDays = daysInMonth(month, year);
let lastDay = totalDays;
let firstDay = totalDays;
console.log(currentDate);
console.log(lastDay);

const currMonth = document.getElementById('currMonth');

const monthText = document.createTextNode(months[month]);
currMonth.appendChild(monthText);

const yearText = document.createTextNode(year);
currMonth.appendChild(yearText);

for (let i = 1; i < months.length + 1; i++) {}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

const prevMonth = document
  .getElementById('prevMonth')
  .addEventListener('click', function() {
    if (month >= 0) {
      month -= 1;
      totalDays = daysInMonth(month - 1, year);
    } else {
      month = 11;
      year -= 1;
    }
  });
const nextMonth = document
  .getElementById('nextMonth')
  .addEventListener('click', function() {
    if (month < 12) {
      month += 1;
      totalDays = daysInMonth(month + 1, year);
    } else {
      month = 0;
      year += 1;
    }
  });
//https://www.w3schools.com/code/tryit.asp?filename=FED216E6BIIJ
