import React from 'react';
import '../../css/index.css'; // The less-compiled css for everything
import { FiMail, FiMessageCircle, FiRepeat, FiHeart } from 'react-icons/fi';


let Reposts = 0;
let Loves = 0;


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

var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  decrementCount: function(){
    this.setState({
      count: this.state.count - 1
    });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
  render: function(){
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button className="btn" onClick={this.incrementCount}>Increment</button>
        <button className="btn" onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
});

React.render(
<Counter />,
  document.body
);


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









export default Footer;






