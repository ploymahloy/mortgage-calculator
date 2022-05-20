import React from 'react';

import './Chart.css';

export default function Chart() {
  return (
    <div className="data">
      <canvas id="myChart"></canvas>
      <input type="text" id="payment" />
    </div>
  )
}
