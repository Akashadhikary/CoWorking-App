import React from 'react';
import './WorkspaceAd.css';

const WorkspaceAd: React.FC = () => {
  return (
    <div className="workspace-ad">
      <div className="ad-content">
        <div className="ad-text">
          <h1>Host your meeting with world-class amenities. Starting at <span style={{color: "#E89A19"}}>₹199/-!</span></h1>
        </div>
        <div className="ad-video">
          <video autoPlay muted loop>
            <source src="video.mp4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceAd;