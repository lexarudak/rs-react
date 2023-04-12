import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormPageCard } from 'base/models';

const formSlice = createSlice({
  name: 'formList',
  initialState: {
    formList: <FormPageCard[]>[],
  },
  reducers: {
    createCard(state, action: PayloadAction<FormPageCard>) {
      state.formList.push(action.payload);
    },
    removeCard(state, action: PayloadAction<string>) {
      state.formList = state.formList.filter((card) => card.id !== action.payload);
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice.reducer;
