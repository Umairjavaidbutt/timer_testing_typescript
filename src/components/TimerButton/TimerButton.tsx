import React from 'react';
import './TimerButton.css'

type Prop = {
  buttonAction: () => void,
  buttonValue: string,
  className: string
}

const TimerButton = ({ buttonAction, buttonValue, className } : Prop) => (
  <div className="button-container" onClick={() => buttonAction()}>
     <p className="button-value">{buttonValue}</p>
  </div>
);



export default TimerButton;