import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formActions } from '../store/form/formSlice';
import type { RootState } from '../store';
import { rickAndMortySliceActions } from '../store/rickAndMorty/rickAndMortySlice';
import { appActions } from '../store/app/appSlice';

const actions = {
  ...formActions,
  ...rickAndMortySliceActions,
  ...appActions,
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
