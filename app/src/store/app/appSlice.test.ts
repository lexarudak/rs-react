import '@testing-library/jest-dom';
import { setCurrentPage, appReducer } from 'store';
const HOME = 'Home';
const ABOUT = 'About';

describe('app slice tests', () => {
  it('add string to the state', () => {
    const res = appReducer({ currentPage: '' }, { type: setCurrentPage.type, payload: HOME });
    expect(res.currentPage).toEqual(HOME);
  });

  it('clear state', () => {
    const res = appReducer({ currentPage: HOME }, { type: setCurrentPage.type, payload: '' });
    expect(res.currentPage).toEqual('');
  });

  it('replace string into the state', () => {
    const res = appReducer({ currentPage: HOME }, { type: setCurrentPage.type, payload: ABOUT });
    expect(res.currentPage).toEqual(ABOUT);
  });
});
