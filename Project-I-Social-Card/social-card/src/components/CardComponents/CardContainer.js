import React from 'react';
import '../../css/index.css'; // The less-compiled css for everything
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    
    <a href="https://www.reactjs.org">
      <div className="card-container">
        <div className="card-border">
          <CardBanner />
          <CardContent />
        </div>
      </div>
    </a>
  )
}

export default CardContainer;
