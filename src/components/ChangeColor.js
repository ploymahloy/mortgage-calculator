import React, { useState } from 'react';

function ChangeColor() {
  const [homeValue  , setHomeValue]   = useState('$300,000');
  const [downPayment, setDownPayment] = useState('$60,000');
  const [percentDown, setPercentDown] = useState('20%');
  const [term, setTerm]               = useState('30');
  const [apr, setAPR]                 = useState('4%');
  
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" onChange={(e) => {setColor(e.target.value)}}/>
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >Change color</button>
      <form>
        <div className="form-row">
          <label>Home value</label>
          <input 
            type="text" 
            id="home-value" 
            value={homeValue}
            onChange={(e) => setHomeValue(e.target.value)}
          >
          
          </input>
        </div>
        <div className="form-row">
          <label>Down payment</label>
          <input
            type="text"
            id="down-payment"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />
          <input 
            type="text" 
            id="percent-down" 
            value={percentDown}
            onChange={(e) => setPercentDown(e.target.value)}
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
      </form>
    </div>
  )
}

export default ChangeColor;
