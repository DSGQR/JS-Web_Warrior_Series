var i = 1;
var listItem = " ";

function processInput() {
  function processInput() {
    if (i <= 5) {
      listItem = `item${1}`;

      document.getElementById(listItem).innerHTML =
        document.getElementById('toolBox').value;

      document.getElementById('toolBox').value = '';
      switch (i) {
        case "5":
          document.getElementById('resultsExpl').innerHTML =
            'Thanks for your suggestions.';
          break;
        default:
      }
      /*if (i === 5) {
        document.getElementById('resultsExpl').innerHTML =
          'Thanks for your suggestions.';
      }*/
      i++;
    }
  }
}


var btn = document.getElementById('button');

if (btn.addEventListener) {
  btn.addEventListener('click', processInput, false);
} else if (btn.attachEvent) {
  btn.attachEvent('onclick', processInput);
}



// If Statement From Hands-On Project 3-4
/* --------------------------------------------------
function processInput() {
  if (i <= 5) {
    listItem = `item${1}`;

    document.getElementById(listItem).innerHTML =
      document.getElementById('toolBox').value;

    document.getElementById('toolBox').value = '';
    if (i === 5) {
      document.getElementById('resultsExpl').innerHTML =
        'Thanks for your suggestions.';
    }
    i++;
  }
}
-------------------------------------------------- */