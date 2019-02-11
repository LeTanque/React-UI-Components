import React from 'react';
import '../../css/index.css'; // The less-compiled css for everything

const CardContainer = () => {
  return (
    
    <a href="https://www.reactjs.org">
      <div className="card-container">
        <div className="card-border">
          <img 
            src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"
            alt="React Logo" />
          <div className="card-text">
            <h3>Get Started With React</h3>
            <p>
              React makes it painless to create interactive UIs. Design simple views for each state
              in your application.
            </p>
            <p className="cltgray">
              reactjs.org
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default CardContainer;
