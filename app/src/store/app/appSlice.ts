import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageNames, SliceNames } from 'models';

const appSlice = createSlice({
  name: SliceNames.app,
  initialState: {
    currentPage: PageNames.mainPage as string,
  },
  reducers: {
    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = appSlice.actions;

export const appReducer = appSlice.reducer;
