import React from 'react';
import '../../css/index.css'; // The less-compiled css for everything
import { FiMail, FiMessageCircle, FiRepeat, FiHeart } from 'react-icons/fi';


// class Counter extends React.Component {  // None of this works because we aren't using class x extends
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//   // change code below this line
//   increment() {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };
//   decrement() {
//     this.setState({
//       count: this.state.count - 1
//     });
//   };
//   reset() {
//     this.setState({
//       count: 0
//     });
//   };
//   // change code above this line
//   render() {
//     return (
//       <div>
//         <button className='inc' onClick={(e) => this.increment(e)}>Increment!</button>
//         <button className='dec' onClick={(e) => this.decrement(e)}>Decrement!</button>
//         <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
//         <h1>Current Count: {this.state.count}</h1>
//       </div>
//     );
//   }
// };

let Reposts = 1;
let Loves = 3;

const Footer = () => {
  return (
    
    <footer>
      
      <div className="footer">

        <div className="footer-icon message">
          <FiMessageCircle /> 
        </div>
        
        <div className="footer-icon repost">
          <FiRepeat /> {Reposts}
        </div>
        
        <div className="footer-icon love">
          <FiHeart /> {Loves}
        </div>
        
        <div className="footer-icon send">
          <FiMail /> 
        </div>
          
      </div>
      
    </footer>

  )
}

export default Footer;

// class LoveClick {
//   constructor(link) {
//     this.link = link;
//     link.addEventListener('click', () => this.addOne() );
//   }
//   addOne() {
//     Loves = Loves + 1;
//     return Loves;
//   }
// } 
// let linksArr = Array.from(links);
// linksArr = links.map( function(e) {e * 2} );
// console.log(linksArr);

