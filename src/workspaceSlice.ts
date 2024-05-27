import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface WorkspaceState {
  workspaces: Workspace[];
}

const initialState: WorkspaceState = {
  workspaces: [],
};

const workspaceSlice = createSlice({
  name: 'workspaces',
  initialState,
  reducers: {
    setWorkspaces: (state, action: PayloadAction<Workspace[]>) => {
      state.workspaces = action.payload;
    },
  },
});

export const { setWorkspaces } = workspaceSlice.actions;

export default workspaceSlice.reducer;
