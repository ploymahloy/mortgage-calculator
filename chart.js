let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
// Chart.defaults.global.defaultFontColor = 'red';

  let massPopChart = new Chart(myChart, {
    type: 'doughnut',
    data:{
      labels:['Principle/Interest', 'Taxes', 'Insurance'],
      datasets:[{
        data:[
          617594,
          151045,
          60960
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
