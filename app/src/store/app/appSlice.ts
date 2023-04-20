import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNames } from 'models';

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

export const { setCurrentPage } = appSlice.actions;

export const appReducer = appSlice.reducer;
