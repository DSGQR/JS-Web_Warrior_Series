/*
    JavaScript 6th Edition
    Chapter 7
    Chapter case

    Outer Orbits
    Author: Daniel Amini
    Date: 04/13/2020

    Filename: orbits.js
*/

'use strict'; // Interpret contents in JavaScript stict mode

// Full Code: 470 - 472
// Page 467
var dateObject = new Date();

/*-------------------------------------------------------------------------------------------------*/
/*----------------------------------- DISPLAY CALENDAR FUNCTION -----------------------------------*/
/*-------------------------------------------------------------------------------------------------*/
function displayCalendar(whichMonth) {
    // Page 468
	var date;
	var dateToday = new Date();
	var dayOfWeek;
	var daysInMonth;
	var dateCells;
	var captionValue;
	var month;
	var year;
	var monthArray = [
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
		'December'
	];

	if (whichMonth === -1) {
		dateObject.setMonth(dateObject.getMonth() - 1);
	} else if (whichMonth === 1) {
		dateObject.setMonth(dateObject.getMonth() + 1);
    }
    
    month = dateObject.getMonth();
    year = dateObject.getFullYear();
    dateObject.setDate(1);
    dayOfWeek = dateObject.getDay();
    captionValue = monthArray[month] + ' ' + year;
    
    document.querySelector('#cal table caption').innerHTML = captionValue;

    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
        // Jan, Mar, May, Jul, Aug, Oct, Dec
        // Page 469
        daysInMonth == 31;
    } else if (month === 1) { // Feb
        if (year % 4 === 0) { // Leap Year Test
            if (year % 100 === 0) { // year ending in 00 not a leap year unless divisible by 400
                if (year % 400 === 0) {
                    daysInMonth ==29;
                } else {
                    daysInMonth = 28;
                }
            } else {
                daysInMonth = 29;
            }
        } else {
            daysInMonth = 28;
        }
    } else { // Apr, Jun, Sep, Nov
        daysInMonth = 30;
    }

    dateCells = document.getElementsByTagName('td');
    for (var i = 0; i < dateCells.length; i++) {
        // clear existing table dates
        dateCells[i].innerHTML = '';
        dateCells[i].className = '';
    }

    // Page 470
    for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
        // add dates to days cells
        dateCells[i].innerHTML = dateObject.getDate();
        dateCells[i].classname = 'date';
        if (dateToday < dateObject) {
            dateCells[i].className = 'futuredate';
        }
        date = dateObject.getDate() + 1;
        dateObject.setDate(date);
    }

    dateObject.setMonth(dateObject.getMonth() - 1);
    // reset month to month shown
    document.getElementById('cal').style.display = 'block';
    // display calendar if it's not already visible
}

/*--------------------------------------------------------------------------------------------------*/
/*-------------------------------------- SELECT DATE FUNCTION --------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/
// Full Code: 476
function SelectDate(event) {
    if (event === undefined) { // get caller element in IE8
        event = window.event;
    }
    var callerElement = event.target || event.srcElement;
    if (callerElement.innerHTML === '') {
        // cell contains no date, so don't close the claendar
        document.getElementById('cal').style.display = 'block';
        return false;
    }
    
    dateObject.setDate(callerElement.innerHTML);
    
    var fullDateToday = newDate();
    var dateToday = Date.UTC(fullDateToday.getFullYear(), fullDateToday.getMonth(), fullDateToday.getDate());
    var selectedDate = Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate());

    if (selectedDate <= dateToday) {
        document.getElementById('cal').style.display = 'block';
        return false;
    }
    
    document.getElementById('tripDate').value = dateObject.toLocaleDateString();

    // Page 478
    hideCalendar();
}

/*------------------------------------------------------------------------------------------------*/
/*------------------------------------ HIDE CALENDAR FUNCTION ------------------------------------*/
/*------------------------------------------------------------------------------------------------*/
// Page 476
function hideCalendar() {
    document.getElementById('cal').style.display = 'none';
}

/*------------------------------------------------------------------------------------------------*/
/*----------------------------------- Prev/Next Month FUNCTION -----------------------------------*/
/*------------------------------------------------------------------------------------------------*/
// Page 479
function prevMo() {
    displayCalendar(-1)
}
function nextMo() {
    displayCalendar(1)
}

/*-------------------------------------------------------------------------------------------------*/
/*---------------------------------------- EVENT LISTENERS ----------------------------------------*/
/*-------------------------------------------------------------------------------------------------*/
// Page 472
function createEventListeners() {
    var dateField = document.getElementById('tripDate');
    if (dateField.addEventListenr) {
        dateField.addEventListener('click', displayCalendar, false);
    } else if (dateField.attachEvent) {
        dateField.attachEvent('onclick', displayCalendar);
    }

    // Page 476
    var dateCells = document.getElementsByTagName('td');

    if (dateCells[0].addEventListener) {
        for (var i = 0; i < dateCells.length; i++) {
            dateCells[i].addEventListener('click', selectedDate, false);
        }
    } else if (dateCells[0].attachEvent) {
        for (var i = 0; i < dateCells.length; i++) {
            dateCells[i].attachEvent('onclick', selectedDate);
        }
    }

    // Page 478
    var closeButton = document.getElementById('close');
    if (closeButton.addEventListener) {
        closeButton.addEventListener('click', hideCalendar, false);
    } else if (closeButton.attachEvent) {
        closeButton.attachEvent('onclick', hideCalendar);
    }

    // Page 479
    var prevLink = document.getElementById('prev');
    var nextLink = document.getElementById('next');

    if (prevLink.addEventListener) {
        prevLink.addEventListener('click', prevMo, false);
        nextLink.addEventListener('click', nextMo, false);
    } else if (prevLink.attachEvent) {
        prevLink.attachEvent('onclick', prevMo);
        nextLink.attachEvent('onclick', nextMo);
    }
}

// Page 473
if (window.addEventListener) {
    window.addEventListener('load', createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', createEventListeners);
}