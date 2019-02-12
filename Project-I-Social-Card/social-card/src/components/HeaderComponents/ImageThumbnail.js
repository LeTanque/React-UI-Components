import React from 'react';
import '../../css/index.css'; // The less-compiled css for everything

const ImageThumbnail = () => {
  return (
    <div className="post-icon">
      <img 
        src='https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png' 
        alt='Lambda School Logo' />
    </div>
  )
}

export default ImageThumbnail;