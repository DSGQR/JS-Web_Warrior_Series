/* 
  JavaScript 6th Edition
  Chapter 7
  Hands-on Project 8-2

  Author: Daniel Amini
  Date: 04/20/2020
  
  Filename: script.js

  Purpose:
  In this project, you’ll modify the document you 
  worked with in Hands-on Project 8-1 to store input 
  in an object rather than an array. You’ll also 
  convert the object contents to a JSON string.
*/

'use strict'; // Interpret contents in JavaScript stict mode

// var newAccountArray = [];
var newAccountObject = {};
var newAccountSubmission = {};

function createID() {
  var fname = document.getElementById('fnameinput');
  var lname = document.getElementById('lnameinput');
  var zip = document.getElementById('zipinput');
  var account = document.getElementById('accountidbox');
  var fields = document.getElementsByTagName('input');
  var acctid;
  var firstInit;
  var lastInit;

  if (fname != '' || lname != '' || zip != '') {
    firstInit = fname.value.charAt(0).toUpperCase();
    lastInit = lname.value.charAt(0).toUpperCase();
    acctid = firstInit + lastInit + zip.value;
    account.value = acctid;
    // newAccountArray = [];
    newAccountObject = {};
    for (var i = 0; i < fields.length - 1; i++) {
      // newAccountArray.push(fields[i].value);
      newAccountObject[fields[i].name] = fields[i].value;
    }
  }
}

function createString() {
  newAccountSubmission = JSON.stringify(newAccountObject);
}

function createEventListeners() {
  var fname = document.getElementById('fnameinput');
  var lname = document.getElementById('lnameinput');
  var zip = document.getElementById('zipinput');
  if (fname.addEventListener) {
    fname.addEventListener('change', createID, false);
    lname.addEventListener('change', createID, false);
    zip.addEventListener('change', createID, false);
  } else if (fname.attachEvent) {
    fname.attachEvent('onchange', createID);
    lname.attachEvent('onchange', createID);
    zip.attachEvent('onchange', createID);
  }
  var button = document.getElementById('submitBtn');
  if (button.addEventListener) {
    button.addEventListener('click', createString, false);
  } else if (button.attachEvent) {
    button.attachEvent('onlick', createString);
  }
}

if (window.addEventListener) {
  window.addEventListener('load', createEventListeners, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', createEventListeners);
}