import '@testing-library/jest-dom';
import { setSearchValue, rickAndMortyReducer } from 'store';

const RICK = 'Rick';
const MORTY = 'Morty';

describe('app slice tests', () => {
  it('init state', () => {
    const res = rickAndMortyReducer(undefined, { type: '' });
    expect(res.searchValue).toEqual('');
  });

  it('add string to the state', () => {
    const res = rickAndMortyReducer(
      { searchValue: '' },
      { type: setSearchValue.type, payload: RICK }
    );
    expect(res.searchValue).toEqual(RICK);
  });

  it('clear state', () => {
    const res = rickAndMortyReducer(
      { searchValue: RICK },
      { type: setSearchValue.type, payload: '' }
    );
    expect(res.searchValue).toEqual('');
  });

  it('replace string into the state', () => {
    const res = rickAndMortyReducer(
      { searchValue: RICK },
      { type: setSearchValue.type, payload: MORTY }
    );
    expect(res.searchValue).toEqual(MORTY);
  });
});
