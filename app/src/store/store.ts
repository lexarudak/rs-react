import { configureStore } from '@reduxjs/toolkit';
import { SliceNames } from 'models';
import { appReducer } from './app';
import { formReducer } from './form';
import { rickAndMortyApi, rickAndMortyReducer } from './rickAndMorty';

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    [SliceNames.form]: formReducer,
    [SliceNames.rickAndMorty]: rickAndMortyReducer,
    [SliceNames.app]: appReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});
