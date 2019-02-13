import React from 'react';
import './css/index.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
// import NumberButton from './components/ButtonComponents/NumberButton';
// import ActionButton from './components/ButtonComponents/ActionButton';
import BoilingCalculator from './components/BoilingWater';



// class App extends React.Component { 
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }


const App = (props) => {
    return (
      
      <React.Fragment>
      
        <section className="container-calculator">
        

          <CalculatorDisplay />
          

{/* 
          <section className="number-pad">
            <NumberButton />
            <ActionButton />
          </section> */}



        </section>

        <BoilingCalculator />

      </React.Fragment>
    );
};

export default App;
