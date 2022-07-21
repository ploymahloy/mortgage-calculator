import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Chart from './components/Chart';

import './App.css';

const App = () => {
  const [chartData, setChartData] = useState({
    homeValue: 300000,
    downPayment: 60000,
    term: 30,
    apr: 4,
  });

	return (
		<div className="App">
			<Navbar />
			<main>
				<Form updateChartData={setChartData} />
				<Chart chartData={chartData} />
			</main>
		</div>
	);
};

export default App;
