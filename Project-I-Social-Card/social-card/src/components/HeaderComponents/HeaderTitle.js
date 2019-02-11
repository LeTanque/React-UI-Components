import React from 'react';
import '../../css/index.css'; // The less-compiled css for everything

const HeaderTitle = () => {
  return (
    <React.Fragment>
      <div className="header-title">
        <h4>Lambda School</h4>
        <span>@LambdaSchool · 26 jan</span>
      </div>
    </React.Fragment>
  )
}

export default HeaderTitle;