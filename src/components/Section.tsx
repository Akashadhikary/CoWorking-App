import React from 'react';
import './Section.css';

const Section: React.FC = () => {
    return (
        <div className="workspace-ad">
          <div className="features">
            <h2>Why Choose us?</h2>
            <div className="features-list">
              <div className="feature">
                <div className="icon-text">
                  <span>🌟</span>
                  <p>Community Events</p>
                </div>
              </div>
              <div className="feature">
                <div className="icon-text">
                  <span>🏋️‍♀️</span>
                  <p>Gym Facilities</p>
                </div>
              </div>
              <div className="feature">
                <div className="icon-text">
                  <span>💻</span>
                  <p>High-Speed WiFi</p>
                </div>
              </div>
              <div className="feature">
                <div className="icon-text">
                  <span>☕</span>
                  <p>Cafe & Tea Bar</p>
                </div>
              </div>
              <div className="feature">
                <div className="icon-text">
                  <span>🏷️</span>
                  <p>Affordable</p>
                </div>
              </div>
              <div className="feature">
                <div className="icon-text">
                  <span>🛋️</span>
                  <p>Comfort Lounges</p>
                </div>
              </div>
              <div className="feature">
                <div className="icon-text">
                  <span>⚡</span>
                  <p>Quick Booking</p>
                </div>
              </div>
              <div className="feature">
                <div className="icon-text">
                  <span>🏀</span>
                  <p>Sports Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Section;