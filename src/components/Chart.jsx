import React from 'react';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import './Chart.css';

export default function Chart({ chartData }) {
	const { homeValue, downPayment, term, apr } = chartData;

	ChartJS.register(ArcElement, Title, Tooltip, Legend);

	const amt = homeValue - downPayment;
	const i = apr / 1200;
	const months = term * 12;

	const PandI = Math.round(
		(amt * (i * Math.pow(1 + i, months))) / (Math.pow(1 + i, months) - 1)
	);
	const propertyTax = (homeValue * 0.009) / 12;
	const insurance = ((homeValue / 1000) * 3) / 5;

	const paymentAmount = Math.round(
		(amt * (i * Math.pow(1 + i, months))) / (Math.pow(1 + i, months) - 1) +
			propertyTax +
			insurance
	);

	console.log(paymentAmount);

	const data = {
		labels: ['P&I', 'Tax', 'Insurance'],
		datasets: [
			{
				data: [PandI, propertyTax, insurance],
				backgroundColor: [
					'rgba(0, 136, 79, 0.7)',
					'rgba(42, 157, 143, 0.7)',
					'rgba(130, 215, 154, 0.7)'
				],
				borderColor: [
					'rgba(0, 136, 79, 1)',
					'rgba(42, 157, 143, 1)',
					'rgba(130, 215, 154, 1)'
				],
				borderWidth: 3
			}
		]
	};

	return (
		<div className="chart-wrapper">
			<Doughnut data={data} height={'90px'} width={'90px'} id="chart" />
			<div>Monthly Payment: ${paymentAmount}</div>
		</div>
	);
}
