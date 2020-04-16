/*    
      JavaScript 6th Edition
      Chapter 7
      Hands-on Project 7-4

      Author: Daniel Amini
      Date:   04/15/2020

      Filename: index.htm

      Purpose:
      In this project, you’ll create a custom object containing delivery information entered by a user on a pizza 
      delivery order form, and then you’ll display the object property values in a confirmation section on the same page.
*/

'use strict'; // Interpret contents in JavaScript stict mode

var delivInfo = {};
var delivSummary = document.getElementById('deliverTo');

function processDeliveryInfo() {
	var prop;
	delivInfo.name = document.getElementById('nameinput').value;
	delivInfo.address = document.getElementById('addrinput').value;
	delivInfo.city = document.getElementById('cityinput').value;
	delivInfo.email = document.getElementById('emailinput').value;
	delivInfo.phone = document.getElementById('phoneinput').value;

	for (prop in delivInfo) {
		delivSummary.innerHTML += '<p>' + delivInfo[prop] + '</p>';
	}
}

function previewOrder() {
	processDeliveryInfo();
    document.getElementById('summary').style.display = 'block';
}

function createEventListener() {
	var previewButton = document.getElementById('previewBtn');
	if (previewButton.addEventListener) {
		previewButton.addEventListener('click', previewOrder, false);
	} else if (previewButton.attachEvent) {
		previewButton.attachEvent('onclick', previewOrder);
	}
}

if (window.addEventListener) {
	window.addEventListener('load', createEventListener, false);
} else if (window.attachEvent) {
	window.attachEvent('onload', createEventListener);
}
