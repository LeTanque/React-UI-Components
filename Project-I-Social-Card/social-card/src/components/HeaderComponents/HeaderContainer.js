import React from 'react';
import '../../css/index.css'; // The less-compiled css for everything

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';



const HeaderContainer = () => {
    return (
        <React.Fragment>
            <header >
                <ImageThumbnail />
                <HeaderTitle />
            
            
            
            <HeaderContent />
            </header>
        </React.Fragment>
    )
}

export default HeaderContainer;
