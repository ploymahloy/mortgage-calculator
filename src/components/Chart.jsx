import React from 'react';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import './Chart.css';

export default function Chart({ chartData }) {
	const { homeValue, downPayment, term, apr } = chartData;

  ChartJS.register(ArcElement, Title, Tooltip, Legend);
  
  // 1) Principal (P): homeValue - downPayment
  // 2) Interest Rate (i): (apr / 100) * 12
  // 3) Number of Payments (n): term * 12
  // 4) PMI: Principal * .01
  // 5) Property Tax: homeValue * .01
  // 6) House Insurance: (homeValue / 1000) * 3/5
  // 7) Monthly Payment (M): 

	const amt = homeValue - downPayment;
	const i = +apr * 12;
	const months = term * 12;
  const M = amt*(i * Math.pow((1 + i), months))/(Math.pow((1 + i), months) - 1);
  
  console.log(i);

	const data = {
		labels: ['P&I', 'Tax', 'Insurance', 'PMI'],
		datasets: [
			{
				data: [M, 300, 76, 307],
				backgroundColor: [
					'rgba(0, 136, 79, 0.7)',
					'rgba(42, 157, 143, 0.7)',
					'rgba(83, 187, 151, 0.7)',
					'rgba(130, 215, 154, 0.7)'
				],
				borderColor: [
					'rgba(0, 136, 79, 1)',
					'rgba(42, 157, 143, 1)',
					'rgba(83, 187, 151, 1)',
					'rgba(130, 215, 154, 1)'
				],
				borderWidth: 3
			}
		]
	};

	return (
		<div className="chart-wrapper">
      <Doughnut data={data} height={'90px'} width={'90px'} id="chart" />
		</div>
	);
}
