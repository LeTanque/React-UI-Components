import React from 'react';
import './css/index.css'; // The less-compiled css for everything
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};



export default App;
