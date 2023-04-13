import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SliceNames from '../../base/enums/sliceNames';

const appSlice = createSlice({
  name: SliceNames.app,
  initialState: {
    currentPage: '',
  },
  reducers: {
    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
