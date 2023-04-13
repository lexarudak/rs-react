import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SliceNames from '../../base/enums/sliceNames';
import { Character } from '../../base/models';

const rickAndMortySlice = createSlice({
  name: SliceNames.rickAndMorty,
  initialState: {
    initLoading: true,
    searchValue: '',
    cards: <Character[]>[],
  },
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCards(state, action: PayloadAction<Character[]>) {
      state.cards = action.payload;
    },
    endInitLoading(state) {
      state.initLoading = false;
    },
  },
});

export const rickAndMortySliceActions = rickAndMortySlice.actions;
export default rickAndMortySlice.reducer;
