import React from 'react';
import '../../css/index.css';
// import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';


class NumberButton extends 
React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      currentFloatNumber: 50,
      calculatedTotal: 0
    }
  }

  numClear(clear) {
    this.setState({
      calculatedTotal: clear
    })
    console.log('Clear');
  };

  numFloat(numPressed) {
    this.setState({
      // displayTotal: this.state.displayTotal + numPressed,
      currentFloatNumber: numPressed
    })
    console.log(numPressed);
    
  };

  render() { 
    return (  
      <React.Fragment>
        {/* <CalculatorDisplay display={this.state.currentFloatNumber} /> */}
        <div className="numbers">
          <div className="number-buttons">

            <h2 className="clear-button" onClick={() => this.numClear(0)}>clear</h2>
            
            <h3 className="number-button" onClick={() => this.numFloat(7)}>7</h3>
            <h3 className="number-button" onClick={() => this.numFloat(8)}>8</h3>
            <h3 className="number-button" onClick={() => this.numFloat(9)}>9</h3>
            
            <h3 className="number-button" onClick={() => this.numFloat(4)}>4</h3>
            <h3 className="number-button" onClick={() => this.numFloat(5)}>5</h3>
            <h3 className="number-button" onClick={() => this.numFloat(6)}>6</h3>          

            <h3 className="number-button" onClick={() => this.numFloat(1)}>1</h3>
            <h3 className="number-button" onClick={() => this.numFloat(2)}>2</h3>
            <h3 className="number-button" onClick={() => this.numFloat(3)}>3</h3>
          
            <h3 className="zero-button" onClick={() => this.numFloat(0)}>0</h3>

          </div>
        </div>
      </React.Fragment>
    );
  }
}




export default NumberButton;

