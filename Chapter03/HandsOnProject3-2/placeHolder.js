/* ------------------------------------------------
Note: This is for Internet Explorer v9 and Earlier
------------------------------------------------ */

function insertPlaceholders() {
  if (!Modernizr.input.placeholder) {
    // Name Placeholder
    document.getElementById('nameinput').value =
    'first and last name';
    // Email Placeholder
    document.getElementById('emailinput').value =
    'address@example.com'
    // Phone # Placeholder
    document.getElementById('phoneinput').value =
    '###-###-####';
  }
}

if (window.addEventListener) {
  window.addEventListener('load', insertPlaceholders, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', insertPlaceholders);
}