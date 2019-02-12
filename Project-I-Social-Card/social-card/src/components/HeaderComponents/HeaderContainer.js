import React from 'react';
import '../../css/index.css'; // The less-compiled css for everything

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';



const HeaderContainer = () => {
  return (
  
    <header>
      <ImageThumbnail />
      <div className="header-text">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </header>
  
  )
}

export default HeaderContainer;
