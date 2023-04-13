import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './rickAndMorty/rickAndMorty.api';
import rickAndMortyReducer from './rickAndMorty/rickAndMortySlice';
import appReducer from './app/appSlice';
import formReducer from './form/formSlice';
import SliceNames from '../base/enums/sliceNames';

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    [SliceNames.form]: formReducer,
    [SliceNames.rickAndMorty]: rickAndMortyReducer,
    [SliceNames.app]: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
