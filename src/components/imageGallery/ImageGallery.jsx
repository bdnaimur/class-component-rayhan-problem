import React, { useState } from 'react';
import ImageGalleryDetails from './ImageGalleryDetails';

const ImageGallery = () => {
    const [imagesLink, setImagesLink] = useState(["https://i.ibb.co/B2MqDSB/istanbul.jpg", "https://i.ibb.co/7RdxQYt/tour-place-2.jpg", "https://i.ibb.co/jrxKKb6/sundarban.jpg", "https://i.ibb.co/yRLpHzV/rangamati.jpg", "https://i.ibb.co/KqkXnHP/sylhet.jpg"])

    const handleClick = e =>{
        console.log(e.target.parentNode);
        const src = e.target.previousSibling.src;
        console.log(src);
        e.target.parentNode.remove();
        // const updaatedImagesLink = imagesLink.filter(image => image!==src)
        // ;
        // setImagesLink(updaatedImagesLink);
    }
    return (
        <div>
            {imagesLink.map(image=><ImageGalleryDetails image={image} handleClick={handleClick}/>)}            
        </div>
    );
};

export default ImageGallery;