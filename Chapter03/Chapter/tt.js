/* JavaScript
 * Chapter 3 
 * Chapter case 
 * Tipton Turbines 
 * Variables and functions 
 * Author: Daniel 
 * Date:  Now
 * Filename: tt.js
*/

// golobal variables 
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var opponents = ["Lightning", "Combines", "Combines", "Combines",
  "Lightning", "Lightning", "Lightning", "Lightning",
  "Barn Raisers", "Barn Raisers", "Barn Raisers",
  "Sodbusters", "Sodbusters", "Sodbusters", "Sodbusters",
  " (off) ", "River Riders", "River Riders", "River Riders",
  "Big Dippers", "Big Dippers", "Big Dippers", " (off) ",
  "Sodbusters", "Sodbusters", "Sodbusters", "Combines",
  "Combines", "Combines", " (off) ", " (off) "];

var gameLocation = ["away", "away", "away", "away", "home", "home", "home", "home", "home", "home", "home",
  "away", "away", "away", "away", "", "away", "away", "away", "away", "away", "away", "",
  "home", "home", "home", "home", "home", "home", "", ""];

// function to place daysOfWeek vlaues in header row cells
function addColumnHeaders() {
  var i = 0;
  while (i < 7) {
    document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
    i++;
  }
}

// Function to place day of month value in first p element
function addCalendarDates() {
  var i = 1;
  var paragraphs = "";
  do {
    var tableCell = document.getElementById("08-" + i);
    paragraphs = tableCell.getElementsByTagName("p");
    paragraphs[0].innerHTML = i;
    i++;
  } while (i <= 31);
}

/* --------------------------------------------------
Function to place opponents value in second p element
within each table data cell that has an id
 -------------------------------------------------- */ 
 function addGameInfo() {
    var paragraphs = "";
    for (var i = 0; i < 31; i++) {
      var date = i + 1;
      var tableCell = document.getElementById("08-" + date);
      paragraphs = tableCell.getElementsByTagName("p");
      paragraphs[1].innerHTML = opponents[i];
    }
 }

// Function to populate calendar
function setUpPage() {
  addColumnHeaders();
  addCalendarDates();
  addGameInfo();
}

// runs setUpPage() function when page loads
window.addEventListener("load", setUpPage, false);