import React from 'react';
import './ImageComp.css'; // Import your CSS file for styling

const ImageComp: React.FC = () => {
  return (
    <div className="container">
      <div className="left">
        <img src="your-image.jpg" alt="Image" />
      </div>
      <div className="right">
        <div className="row">
          <p>
            Some paragraph goes here. You can add your text content as needed.
          </p>
        </div>
        <div className="row">
          <img src="image1.jpg" alt="Image 1" />
          <img src="image2.jpg" alt="Image 2" />
        </div>
      </div>
    </div>
  );
}

export default ImageComp;
