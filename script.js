let myChart = document.getElementById('myChart').getContext('2d');

// Values used for generating chart
let principleAndInterest = 617594; // = financedAmount * (apr * Math.pow((1 + apr), term)) / (Math.pow((1 + apr), term) - 1);
let taxes = 171045;                // = homeValue * .01 / 12
let insurance = 60960;             // = homeValue/1000 * 4.2 / 12

// Retrieving values
function getValues() {
  homeValue = document.getElementById("home-value").value;
  downPayment = document.getElementById("down-payment").value;
  term = document.getElementById("term").value;
  apr = document.getElementById("apr").value;

  financedAmount = homeValue - downPayment;
  apr /= 1200;
  term *= 12;
  payment = financedAmount * (apr * Math.pow((1 + apr), term)) / (Math.pow((1 + apr), term) - 1);
  
  document.getElementById("payment").value = "$" + payment.toFixed(2) + "/month";
};

// Chart.js //
let monthlyMortgagePayment = new Chart(myChart, {
  type: 'doughnut',
  title: 'Monthly Payment Breakdown',
  data:{
    labels:['Principle/Interest', 'Taxes', 'Insurance'],
    datasets:[{
      data:[
        principleAndInterest,
        taxes,
        insurance
      ],
      backgroundColor: [
        '#2a9d8f',
        '#e9c46a',
        '#f4a261'
      ],
      borderWidth: 1,
      borderColor: '#777',
      hoverBorderWidth: 3,
      hoverBorderColor: 'black'
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Largest Cities in Mass'
    }
  }
})
