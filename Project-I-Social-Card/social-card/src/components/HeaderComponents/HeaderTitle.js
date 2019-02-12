import React from 'react';
import '../../css/index.css'; // The less-compiled css for everything
import moment from 'moment';

const HeaderTitle = () => {
  return (
    <React.Fragment>
      <div className="header-title">
        <h4>Lambda School</h4>
        <span>@LambdaSchool · {moment().format("D MMM")}</span>
      </div>
    </React.Fragment>
  )
}

export default HeaderTitle;
