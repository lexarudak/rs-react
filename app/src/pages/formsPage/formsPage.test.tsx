import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormPageCard } from '../../base/models';
import React from 'react';
import FormsPage from './formsPage';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../store';

const { getByText, getByRole, getByPlaceholderText, getByTestId, queryByText } = screen;

describe('forms page', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormsPage />
      </Provider>
    );
  });

  it('render test', () => {
    expect(getByText('Create form card')).toBeInTheDocument();
  });

  it('work test', async () => {
    window.URL.createObjectURL = jest.fn();
    const testFile = new File(['test'], 'test.png', { type: 'image/png' });
    const testObj: FormPageCard = {
      id: '1',
      name: 'Kam',
      date: '2023-01-01',
      select: 'Cool card',
      checkbox: ['Bold'],
      radio: 'Yes, of course!',
      imageSrc: 'test.png',
    };
    const btn = getByRole('button');

    await userEvent.click(btn);
    expect(queryByText('Title style:')).not.toBeInTheDocument();

    await userEvent.type(getByPlaceholderText('enter card name'), testObj.name);
    await userEvent.type(getByTestId('date-input'), testObj.date);
    await userEvent.selectOptions(getByRole('combobox'), testObj.select);

    await userEvent.click(btn);
    expect(queryByText('Title style:')).not.toBeInTheDocument();

    await userEvent.click(getByText('Bold'));
    await userEvent.click(getByText('Yes, of course!'));
    await userEvent.upload(getByTestId('image-input'), testFile);

    await userEvent.click(btn);

    expect(getByText('Title style:')).toBeInTheDocument();
    expect(getByText(testObj.name)).toBeInTheDocument();
    expect(getByText(testObj.date)).toBeInTheDocument();
    expect(getByText('Border:')).toBeInTheDocument();
  });
});
