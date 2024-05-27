import React from 'react';
import './WorkspaceCard.css';

interface Discount {
  value: number;
  message: string;
}

interface Workspace {
  id: string;
  name: string;
  address: string;
  images: string[];
  day_pass_price: number;
  day_pass_discounts_percentage: { [key: string]: Discount };
}

interface WorkspaceCardProps {
  workspace: Workspace;
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ workspace }) => {
  const discount = workspace.day_pass_discounts_percentage["10"];

  return (
    <div className="workspace-card">
      <img src={workspace.images[0]} alt={workspace.name} className="workspace-image" />
      <div className="workspace-details">
        <h3>{workspace.name}</h3>
        <p>{workspace.address}</p>
        <div className="price-section">
          <p className="price">₹ {workspace.day_pass_price}</p>
          {discount && discount.value > 0 && (
            <p className="discount-message">{discount.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkspaceCard;
