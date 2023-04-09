import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormPageCard } from '../../base/types';
import React from 'react';
import FormsPage from './formsPage';
import userEvent from '@testing-library/user-event';

const { getByText, getByRole, getByPlaceholderText, getByTestId } = screen;

describe('forms page', () => {
  it('render test', () => {
    render(<FormsPage changeName={jest.fn()} />);
    expect(getByText('Create form card')).toBeInTheDocument();
  });

  it('work test', async () => {
    window.URL.createObjectURL = jest.fn();
    const testFile = new File(['test'], 'test.png', { type: 'image/png' });
    const testObj: FormPageCard = {
      name: 'Kam',
      date: '2023-01-01',
      select: 'Cool card',
      checkbox: ['Bold'],
      radio: 'Yes, of course!',
      imageSrc: 'test.png',
    };

    render(<FormsPage changeName={jest.fn()} />);

    const btn = getByRole('button');

    await userEvent.type(getByPlaceholderText('enter card name'), testObj.name);
    await userEvent.type(getByTestId('date-input'), testObj.date);
    await userEvent.selectOptions(getByRole('combobox'), testObj.select);
    await userEvent.click(getByText('Bold'));
    await userEvent.click(getByText('Yes, of course!'));
    await userEvent.upload(getByTestId('image-input'), testFile);

    await userEvent.click(btn);

    expect(getByText(testObj.name)).toBeInTheDocument();
    expect(getByText(testObj.date)).toBeInTheDocument();
    expect(getByText('Title style:')).toBeInTheDocument();
    expect(getByText('Border:')).toBeInTheDocument();
  });
});
