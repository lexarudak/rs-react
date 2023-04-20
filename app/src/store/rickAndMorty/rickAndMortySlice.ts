import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNames } from 'models';

const rickAndMortySlice = createSlice({
  name: SliceNames.rickAndMorty,
  initialState: {
    searchValue: '',
  },
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = rickAndMortySlice.actions;

export const rickAndMortyReducer = rickAndMortySlice.reducer;
