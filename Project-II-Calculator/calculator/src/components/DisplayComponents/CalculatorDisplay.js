import React from 'react';
import '../../css/index.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = (props) => {
  return ( 
    <React.Fragment>


      <section className="calculator-display"> 
        <h1> {props.state} </h1>
        <h1>0</h1>
      </section>
  
      <section className="number-pad">
        <NumberButton displayTotal={props.state} />
        <ActionButton />
      </section>


    </React.Fragment>
  );
}


export default CalculatorDisplay;


