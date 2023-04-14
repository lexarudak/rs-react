import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SliceNames from '../../base/enums/sliceNames';

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
export default rickAndMortySlice.reducer;
