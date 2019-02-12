import React from 'react';
import '../../css/index.css';

class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  

    }
  }
  numOperation(operationPressed) {
    this.setState({
      selectedOperation: operationPressed
    })
    console.log(operationPressed);
  };
  render() { 
    return (  
      <div className="actions">
        <div className="action-buttons">
          <h2 className="action-button" onClick={() => this.numOperation('/')}>÷</h2>
          <h2 className="action-button" onClick={() => this.numOperation('*')}>X</h2>
          <h2 className="action-button" onClick={() => this.numOperation('-')}>-</h2>
          <h2 className="action-button" onClick={() => this.numOperation('+')}>+</h2>
          <h2 className="action-button" onClick={() => this.numOperation('=')}>=</h2>
        </div>
      </div>
    );
  }
}
 
export default ActionButton;
