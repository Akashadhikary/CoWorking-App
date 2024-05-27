// src/components/DownloadAppSection.tsx
import React from 'react';
import './DownloadAppSection.css';

const DownloadAppSection: React.FC = () => {
  return (
    <div className="download-app-section">
      <h2>Download our app now</h2>
      <div className="content">
        <div className="app-images">
         
          <img
            src="screenshot1.png"
            alt="BHIVE Workspace App"
            className="app-image"
          />
        </div>
        <div className="text-and-buttons">
          <p>
            Boost your productivity with the BHIVE Workspace app.
            Elevate your workspace, collaborate efficiently, and unlock
            exclusive perks.
          </p>
          <div className="download-buttons">
            
              <img src="gpay.jpg" alt="Google Play Store" />
            
              <img src="appstore.jpg" alt="App Store" />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;