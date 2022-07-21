import React, { useState } from 'react';

import './Form.css';

export default function Form(props) {
  const { updateChartData } = props;

	const [homeValue, setHomeValue] = useState(300000);
	const [downPayment, setDownPayment] = useState(60000);
	const [term, setTerm] = useState(30);
	const [apr, setAPR] = useState(4);

	const formSubmitHandler = (e) => {
    e.preventDefault();
    updateChartData({ homeValue, downPayment, term, apr });
	};

	return (
		<form>
			<div className="form-wrapper">
				<div className="form-row">
					<label>Home value</label>
					<input
						type="text"
						id="home-value"
						value={homeValue}
						onChange={(e) => setHomeValue(e.target.value)}
					></input>
				</div>
				<div className="form-row">
					<label>Down payment</label>
					<input
						type="text"
						id="down-payment"
						value={downPayment}
						onChange={(e) => setDownPayment(e.target.value)}
					/>
				</div>
				<div className="form-row">
					<label>Term (years)</label>
					<input
						type="text"
						id="term"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
				<div className="form-row">
					<label>APR (%)</label>
					<input
						type="text"
						id="apr"
						value={apr}
						onChange={(e) => setAPR(e.target.value)}
					/>
				</div>
        <button onClick={formSubmitHandler}>Enter</button>
			</div>
		</form>
	);
}
