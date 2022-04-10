let loanAmount;
let term;
let apr;
let payment;

window.onload = function() {
  document.getElementById("submit").onclick = getValues;
};

function getValues() {
  term = document.getElementById("term").value;
  apr = document.getElementById("apr").value;
  loanAmount = document.getElementById("amount").value;

  apr /= 1200;
  term *= 12;

  payment = loanAmount*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
  document.getElementById("payment").value = "$" + payment.toFixed(2) + " per month";
};
