import React from 'react';
import '../css/index.css';



function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else if (props.celsius <= 0) {
    return <p>The water would freeze.</p>;  
  } else {
    return <p>The water would not boil.</p>;  
  }
}

class BoilingCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <div className="boiling-water">
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input
            value={temperature}
            onChange={this.handleChange} />
          <BoilingVerdict
            celsius={parseFloat(temperature)} />
        </fieldset>
      </div>
    );
  }
}

export default BoilingCalculator;