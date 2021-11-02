import React from 'react';

const ImageGalleryDetails = ({image,handleClick}) => {
    return (
        <div>
            <img src={image} alt="" srcset="" />
            <button onClick={handleClick}>X</button>
        </div>
    );
};

export default ImageGalleryDetails;