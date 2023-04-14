import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SliceNames from '../../base/enums/sliceNames';
import { FormPageCard } from '../../base/models';

const formSlice = createSlice({
  name: SliceNames.form,
  initialState: {
    cards: <FormPageCard[]>[],
  },
  reducers: {
    createCard(state, action: PayloadAction<FormPageCard>) {
      state.cards.push(action.payload);
    },
    removeCard(state, action: PayloadAction<string>) {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { createCard, removeCard } = formSlice.actions;
export default formSlice.reducer;
