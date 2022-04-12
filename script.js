let homeValue;
let downPayment;
let financedAmount;
let term;
let apr;
let payment;

window.onload = function() {
  document.getElementById("submit").onclick = getValues;
};

function getValues() {
  homeValue = document.getElementById("home-value").value;
  downPayment = document.getElementById("down-payment").value;
  term = document.getElementById("term").value;
  apr = document.getElementById("apr").value;

  financedAmount = homeValue - downPayment;
  apr /= 1200;
  term *= 12;

  payment = financedAmount*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
  document.getElementById("payment").value = "$" + payment.toFixed(2) + " per month";
};
