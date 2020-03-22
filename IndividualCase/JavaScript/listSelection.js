function calcTotal() {
  var appTotal = 0;
  
  var app1 = document.getElementById("app1");
  var app2 = document.getElementById("app2");
  var app3 = document.getElementById("app3");
  var app4 = document.getElementById("app4");

  (app1.checked) ? (appTotal += 10) : (appTotal += 0);
  (app2.checked) ? (appTotal += 50) : (appTotal += 0);
  (app3.checked) ? (appTotal += 9) : (appTotal += 0);
  (app4.checked) ? (appTotal += 25) : (appTotal += 0);

  var salesTaxRate = 0.07;

  appTotal *= 100;

  var orderTotal = (appTotal + (appTotal * salesTaxRate)) / 100;
  
  alert(`Your order total is $${orderTotal}`);
}

document.getElementById("submit").addEventListener(
  "click", calcTotal, false
);