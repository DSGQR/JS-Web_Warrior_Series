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

// ------------------------------- 4: DA ADDED ------------------------------- //
// Page 318 - Step 9
var figureCount = 3;


// ------------------------------- 2: DA ADDED ------------------------------- //
/* Add src values to img elements based on order specified in photoOrder array */
function populateFigures() {
   // Create Variables
   var filename;
   var currentFig;

   // Page 318 - Step 10
   if (figureCount === 3) {

      // Define Variables & loops through to assign photos to each number
      for (var i = 1; i < 4; i++) {
         filename = 'images/IMG_0' + photoOrder[i] + 'sm.jpg';
         currentFig = document.getElementsByTagName('img')[i - 1];
         currentFig.src = filename;
      } 
   } else {
      for (var i = 0; i < 5; i++) {
         filename = 'images/IMG_0' + photoOrder[i] + 'sm.jpg';
         currentFig = document.getElementsByTagName('img')[i];
         currentFig.src = filename;
      }
   }
   // Page 319 - Step 12
   figureCount = 5;
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

// ------------------------------- 3: DA ADDED ------------------------------- //
// Switch Photo Feature From 4 -> 5 Photos
function previewFive() {
   var articleE1 = document.getElementsByTagName('article')[0];

   // CREATE Figure & img elements for fifth image
   var lastFigure = document.createElement('figure');
   lastFigure.id = 'fig5';
   lastFigure.style.zIndex = '5';
   lastFigure.style.position = 'absolute';
   lastFigure.style.right = '45px';
   lastFigure.style.top = '67px';

   var lastImage = document.createElement('img');
   lastImage.width = '240';
   lastImage.height= '135';

   lastFigure.appendChild(lastImage);

   articleE1.appendChild(lastFigure);

   // Page 316 - Step 2
   // Clone figure element for fifth image and edit to be first image.
   var firstFigure = lastFigure.cloneNode(true);

   // Page 317 - Step 3
   firstFigure.id = 'fig1';
   firstFigure.style.right = '';
   firstFigure.style.left = '45px';

   // Page 317 - Step 4
   articleE1.appendChild(firstFigure);

   // Page 318 - Step 8
   // add appropriate src values to two new img elements
   document.getElementsByTagName('img')[3].src = 
   'images/IMG_0' + photoOrder[4] + 'sm.jpg';
   document.getElementsByTagName('img')[4].src = 
   'images/IMG_0' + photoOrder[0] + 'sm.jpg';
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

   // Evet listener calling the previewFive() when user clicks 'show more'
   var showAllButton = document.querySelector('#fiveButton p');
   if (showAllButton.addEventListener) {
      showAllButton.addEventListener('click', previewFive, false);
   } else if (showAllButton.attachEvent) {
      showAllButton.attachEvent('onclick', previewFive);
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