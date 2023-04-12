import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './rickAndMorty/rickAndMorty.api';
import formReducer from './formSlice/formSlice';

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
