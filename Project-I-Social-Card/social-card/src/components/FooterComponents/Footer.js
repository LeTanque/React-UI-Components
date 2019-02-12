import React from 'react';
import '../../css/index.css'; // The less-compiled css for everything
import { FiMail, FiMessageCircle, FiRepeat, FiHeart } from 'react-icons/fi';



class Footer extends React.Component {  // Figured out state
  constructor(props) {
    super(props);
    this.state = {
      repostTotal: 1,
      lovesTotal: 3,
      black: true
    };
  }
  addRepost() {
    this.setState({
      repostTotal: this.state.repostTotal + 1
    });
  };
  addLove() {
    this.setState({
      lovesTotal: this.state.lovesTotal + 1
    });
  };
  render() {
    return (
      <footer>
        <div className="footer">

          <div className="footer-icon message">
            <a href="#comment"><FiMessageCircle /></a>
          </div>

          <div className="footer-icon repost" onClick={() => this.addRepost()}>
            <FiRepeat /> {this.state.repostTotal}
          </div>

          <div className="footer-icon love" onClick={() => this.addLove()}>
            <FiHeart /> {this.state.lovesTotal}
          </div>

          <div className="footer-icon send">
            <a href="mailto:lamdba@lambda.com"><FiMail /> </a>
          </div>
            
        </div>
      </footer>
    );
  }
};

export default Footer;


// // This is my original basic function. 
// // Replaced with class constructor function because it's cooler. Thanks J, for the final piece!
// const Footer = () => {
//   return (
//     <footer>
//       <div className="footer">
//         <div className="footer-icon message">
//           <FiMessageCircle /> 
//         </div>
//         <div className="footer-icon repost">
//           <FiRepeat /> {Reposts}
//         </div>
//         <div className="footer-icon love">
//           <FiHeart /> {Loves}
//         </div>
//         <div className="footer-icon send">
//           <FiMail /> 
//         </div>
//       </div>
//     </footer>
//   )
// }

// // This doesn't work. Will better understand why later on.
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
