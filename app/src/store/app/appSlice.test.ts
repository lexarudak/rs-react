import '@testing-library/jest-dom';
import appReducer, { setCurrentPage } from '../../store/app/appSlice';

describe('app slice tests', () => {
  it('init state', () => {
    const res = appReducer(undefined, { type: '' });
    expect(res.currentPage).toEqual('');
  });

  it('add string to the state', () => {
    const res = appReducer({ currentPage: '' }, { type: setCurrentPage.type, payload: 'Home' });
    expect(res.currentPage).toEqual('Home');
  });

  it('clear state', () => {
    const res = appReducer({ currentPage: 'Home' }, { type: setCurrentPage.type, payload: '' });
    expect(res.currentPage).toEqual('');
  });

  it('replace string into the state', () => {
    const res = appReducer(
      { currentPage: 'Home' },
      { type: setCurrentPage.type, payload: 'About' }
    );
    expect(res.currentPage).toEqual('About');
  });
});
