import '@testing-library/jest-dom';
import rickAndMortyReducer, { setSearchValue } from '../../store/rickAndMorty/rickAndMortySlice';

describe('app slice tests', () => {
  it('init state', () => {
    const res = rickAndMortyReducer(undefined, { type: '' });
    expect(res.searchValue).toEqual('');
  });

  it('add string to the state', () => {
    const res = rickAndMortyReducer(
      { searchValue: '' },
      { type: setSearchValue.type, payload: 'Rick' }
    );
    expect(res.searchValue).toEqual('Rick');
  });

  it('clear state', () => {
    const res = rickAndMortyReducer(
      { searchValue: 'Rick' },
      { type: setSearchValue.type, payload: '' }
    );
    expect(res.searchValue).toEqual('');
  });

  it('replace string into the state', () => {
    const res = rickAndMortyReducer(
      { searchValue: 'Rick' },
      { type: setSearchValue.type, payload: 'Morty' }
    );
    expect(res.searchValue).toEqual('Morty');
  });
});
