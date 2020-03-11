/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: Daniel Amini
 *    Date:   03/11/2020

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];

// ------------------------------- 2: DA ADDED ------------------------------- //
/* Add src values to img elements based on order specified in photoOrder array */
function populateFigures() {
   // Create Variables
   var filename;
   var currentFig;

   // Define Variables & loops through to assign photos to each number
   for (var i = 1; i < 4; i++) {
      filename = 'images/IMG_0' + photoOrder[i] + 'sm.jpg';
      currentFig = document.getElementsByTagName('img')[i - 1];
      currentFig.src = filename;
   }
}
// ------------------------------------------------------------------------- //

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

// ------------------------------- 1: DA ADDED ------------------------------- //
/* Create event listeners for left arrow, right arrow & center figure element */
function createEventListeners() {

   // LEFT ARROW:
   // CREATE Local Variable 'leftarrow' & Assign its value -> ID
   var leftarrow = document.getElementById('leftarrow');

   // LeftArrow Functionality (Modern Browsers & IE)
   if (leftarrow.addEventListener) {
      leftarrow.addEventListener('click', leftArrow, false);
   } else if (leftarrow.attachEvent) {
      leftarrow.attachEvent('onclick', leftArrow);
   }

   // RIGHT ARROW:
   // CREATE Local Variable 'rightarrow' & Assign its value -> ID
   var rightarrow = document.getElementById('rightarrow');

   // RightArrow Functionality (Modern Browsers & IE)
   if (rightarrow.addEventListener) {
      rightarrow.addEventListener('click', rightArrow, false);
   } else if (rightarrow.attachEvent) {
      rightarrow.attachEvent('onclick', rightArrow);
   }

   // PHOTO ZOOM FEATURE
   // CREATE Local Variable 'mainFig' & Assign its value -> 2nd 'img' element
   var mainFig = document.getElementsByTagName('img')[1];

   // Zoom Feature Functionality (Modern Browsers & IE)
   if (mainFig.addEventListener) {
      mainFig.addEventListener('click', zoomFig, false);
   } else if (mainFig.attachEvent) {
      mainFig.attachEvent('onclick', zoomFig);
   }
}
// --------------------------------------------------------------------------- //

/* open center figure in separate window */
function zoomFig() {
   
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}