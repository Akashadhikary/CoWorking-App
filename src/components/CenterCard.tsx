// src/components/WorkspaceCard.tsx
import React from 'react';

interface WorkspaceCardProps {
  imageSrc: string;
  title: string;
  location: string;
  distance: string;
  dayPass: string;
  bulkPass: string;
  discount: string;
}

const CenterCard: React.FC<WorkspaceCardProps> = ({ imageSrc, title, location, distance, dayPass, bulkPass, discount }) => {
  return (
    <div className="workspace-card">
      <img src={imageSrc} alt={title} className="workspace-image" />
      <div className="workspace-info">
        <h3>{location}</h3>
        <p>{distance}</p>
        <h4>{title}</h4>
        <div className="pricing">
          <span>Day Pass: {dayPass}</span>
          <span>Bulk Pass: {bulkPass} <span className="discount">({discount})</span></span>
        </div>
      </div>
    </div>
  );
};

export default CenterCard;