import React from 'react';

import './Form.css';

export default function Form() {
  return (
    <>
      <form>
        <div className="form-row">
          <label>Home value</label>
          <input 
            type="text" 
            id="home-value" 
            placeholder="$300,000"
          />
        </div>
        <div className="form-row">
          <label>Down payment</label>
          <input
            type="text"
            id="down-payment"
            placeholder="$60,000"
          />
          <input 
            type="text" 
            id="percent-down" 
            placeholder="20%"
          />
        </div>
        <div className="form-row">
          <label>Term (years)</label>
          <input
            type="text"
            id="term"
            placeholder="30"
          />
        </div>
        <div className="form-row">
          <label>APR (%)</label>
          <input
            type="text"
            id="apr"
            placeholder="4%"
          />
        </div>
        <div className="form-row">
          <input 
            type="button"
            id="submit"
            value="Submit"
            // onClick={getValues()} <-- Define getValues()
          />
          <input
            type="reset"
            id="reset"
            value="Reset Form"
          />
        </div>
      </form>
    </>
  )
}
