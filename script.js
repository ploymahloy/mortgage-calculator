let percentDown;

function getPercentDown() {
  percentDown = document.getElementById("percent-down").value;
  percentDown /= 100;

  // Only works after submit button is pressed the first time
  // alert(percentDown * homeValue);
}

function getValues() {
  homeValue = document.getElementById("home-value").value;
  downPayment = document.getElementById("down-payment").value;
  term = document.getElementById("term").value;
  apr = document.getElementById("apr").value;

  financedAmount = homeValue - downPayment;
  apr /= 1200;
  term *= 12;
  let payment = financedAmount * (apr * Math.pow((1 + apr), term)) / (Math.pow((1 + apr), term) - 1);
  
  document.getElementById("payment").value = "$" + payment.toFixed(2) + "/month";
};
