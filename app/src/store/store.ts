import { configureStore, combineSlices } from '@reduxjs/toolkit';
import { SliceNames } from 'models';
import { appReducer } from './app';
import { formReducer } from './form';
import { rickAndMortyApi, rickAndMortyReducer } from './rickAndMorty';

const rootReducer = combineSlices({
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  [SliceNames.form]: formReducer,
  [SliceNames.rickAndMorty]: rickAndMortyReducer,
  [SliceNames.app]: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});
