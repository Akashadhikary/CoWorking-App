import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWorkspaces } from './workspaceSlice';
import WorkspaceCard from './WorkspaceCard';
import { RootState } from './store';
import './WorkspaceOverview.css';

const workspacesData = [
  {
    id: "39ab7642-8de3-4e95-aa5d-34089bc67b90",
    name: "Platinum, Indiranagar",
    address: "271, 6th Main Rd, HAL 2nd Stage, Motappapalya, Indiranagar, Bengaluru, Karnataka 560038, India",
    images: ["static_assets/5934c0fd9d574bddbde8175d86a2d2da.jpg"],
    day_pass_price: 499,
    day_pass_discounts_percentage: {
      "1": { value: 0, message: "" },
      "10": { value: 20, message: "Pay for 8 Days, Get 2 Days Complimentary" }
    }
  },
  {
    id: "f87f54e2-6ce4-4bc5-bed7-587b361b5633",
    name: "JBR Campus, Whitefield",
    address: "Plot No. 77, Jbr Tech Park, 6th Rd, Whitefield, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066, India",
    images: ["static_assets/e2d0405175f74b5c815658a8ef5ef4b8.jpg"],
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      "1": { value: 0, message: "" },
      "10": { value: 20, message: "Pay for 8 Days, Get 2 Days Complimentary" }
    }
  },
  {
    id: "292caef7-95a4-493d-9575-5524b12eb0a5",
    name: "HSR Sector 6 Service Road, Silkboard",
    address: "L-194, Santhosapuram, Sector 6, HSR Layout, Bengaluru, Karnataka 560101, India",
    images: ["static_assets/0a74575ca6004b4bb20dcd131afc5849.jpg"],
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      "1": { value: 0, message: "" },
      "10": { value: 20, message: "Pay for 8 Days, Get 2 Days Complimentary" }
    }
  },
  {
    id: "471c30b4-e91c-4392-9ebe-b4c1ad4a7b63",
    name: "HSR Campus",
    address: "BHIVE Workspace - No.112, AKR Tech Park, \"A\" and, B-Block, 7th Mile Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068, India",
    images: ["static_assets/0dfe4977f25940aa9d32507d4a233c9c.jpg"],
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      "1": { value: 0, message: "" },
      "10": { value: 20, message: "Pay for 8 Days, Get 2 Days Complimentary" }
    }
  },
  {
    id: "298a504d-c5cd-4456-a132-e3a8f18a4a43",
    name: "27th Main, HSR",
    address: "27th Main Rd, Bengaluru, Karnataka, India",
    images: ["static_assets/4d85410baa074351aa948fc2c5da50d9.jpg"],
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      "1": { value: 0, message: "" },
      "10": { value: 20, message: "Pay for 8 Days, Get 2 Days Complimentary" }
    }
  }
];


const WorkspaceOverview: React.FC = () => {
    const dispatch = useDispatch();
    const workspaces = useSelector((state: RootState) => state.workspaces.workspaces);
  
    useEffect(() => {
      dispatch(setWorkspaces(workspacesData));
    }, [dispatch]);
  
    return (
      <div className="workspace-overview">
        <h2>Our Space Overview</h2>
        <div className="workspace-grid">
          {workspaces.map((workspace) => (
            <WorkspaceCard key={workspace.id} workspace={workspace} />
          ))}
        </div>
      </div>
    );
  };
  
  export default WorkspaceOverview;