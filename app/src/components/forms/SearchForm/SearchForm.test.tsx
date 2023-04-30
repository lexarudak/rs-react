// import React from 'react';
// import '@testing-library/jest-dom';
// import { fireEvent, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { SearchForm } from 'components';
// import { Provider } from 'react-redux';
// import { TestId } from 'models';
// import { store } from 'store';

// const { findByPlaceholderText, getByTestId } = screen;

// describe('search input tests', () => {
//   it('render test', async () => {
//     render(
//       <Provider store={store}>
//         <SearchForm />
//       </Provider>
//     );
//     const search = await findByPlaceholderText('Search');
//     expect(search).toBeInTheDocument();
//   });

//   it('render test', async () => {
//     render(
//       <Provider store={store}>
//         <SearchForm />
//       </Provider>
//     );
//     const {
//       rickAndMorty: { searchValue },
//     } = store.getState();
//     expect(searchValue).toEqual('');

//     const search = await findByPlaceholderText('Search');
//     await userEvent.click(search);
//     await userEvent.type(search, 'test');
//     fireEvent.submit(getByTestId(TestId.searchForm));

//     const {
//       rickAndMorty: { searchValue: newSearchValue },
//     } = store.getState();

//     expect(newSearchValue).toEqual('test');
//   });
// });
