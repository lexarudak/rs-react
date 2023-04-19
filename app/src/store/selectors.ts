import { ReducerPath } from 'models';
import { RootState } from 'store/types';

export const rickAndMortyApiSelector = (state: RootState) => state[ReducerPath.rickAndMortyApi];

export const rickAndMortySelector = (state: RootState) => state.rickAndMorty;

export const appSelector = (state: RootState) => state.app;

export const formSelector = (state: RootState) => state.form;
