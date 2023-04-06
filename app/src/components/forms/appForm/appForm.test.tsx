import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormPageCard } from 'base/types';
import React from 'react';
import AppForm from './appForm';

describe('form tests', () => {
  const showPopupForSeconds = jest.fn();
  const addNewCard = jest.fn();
  const { getByRole, getByTestId, getByText, getByPlaceholderText } = screen;

  it('render form test', () => {
    render(<AppForm showPopupForSeconds={showPopupForSeconds} addNewCard={addNewCard} />);
    expect(getByText('Create form card')).toBeInTheDocument();
  });

  it('render name test', () => {
    render(<AppForm showPopupForSeconds={showPopupForSeconds} addNewCard={addNewCard} />);
    expect(getByText('Card name')).toBeInTheDocument();
  });

  it('render date test', () => {
    render(<AppForm showPopupForSeconds={showPopupForSeconds} addNewCard={addNewCard} />);
    expect(getByText('Card type')).toBeInTheDocument();
  });

  it('render checkbox test', () => {
    render(<AppForm showPopupForSeconds={showPopupForSeconds} addNewCard={addNewCard} />);
    expect(getByText('Upgrade card title')).toBeInTheDocument();
  });

  it('render radio test', () => {
    render(<AppForm showPopupForSeconds={showPopupForSeconds} addNewCard={addNewCard} />);
    expect(getByText('Add border?')).toBeInTheDocument();
  });

  it('render img test', () => {
    render(<AppForm showPopupForSeconds={showPopupForSeconds} addNewCard={addNewCard} />);
    expect(getByText('Add image')).toBeInTheDocument();
  });

  it('errors text test', async () => {
    const { container } = render(
      <AppForm showPopupForSeconds={showPopupForSeconds} addNewCard={addNewCard} />
    );

    const errors = container.getElementsByClassName('app-form__error-text_active');
    const noErrors = container.getElementsByClassName('app-form__error-text');
    expect(errors.length).toEqual(0);
    expect(noErrors.length).toEqual(6);
    await userEvent.click(getByRole('button'));
    expect(noErrors.length).toEqual(0);
    expect(errors.length).toEqual(6);
  });

  it('send form test', async () => {
    window.URL.createObjectURL = jest.fn();
    const newCards: FormPageCard[] = [];
    const addNewCard = (cardInfo: FormPageCard) => {
      newCards.push(cardInfo);
    };
    const testFile = new File(['test'], 'test.png', { type: 'image/png' });
    const testObj: FormPageCard = {
      name: 'Kam',
      date: '2023-01-01',
      select: 'Cool card',
      checkbox: ['Bold'],
      radio: 'Yes, of course!',
      imageSrc: 'test.png',
    };

    render(<AppForm showPopupForSeconds={showPopupForSeconds} addNewCard={addNewCard} />);

    const btn = screen.getByRole('button');
    await userEvent.click(btn);
    expect(newCards.length).toEqual(0);

    await userEvent.type(getByPlaceholderText('enter card name'), testObj.name);
    await userEvent.type(getByTestId('date-input'), testObj.date);
    await userEvent.selectOptions(getByRole('combobox'), testObj.select);
    await userEvent.click(getByText('Bold'));
    await userEvent.click(getByText('Yes, of course!'));
    await userEvent.upload(getByTestId('image-input'), testFile);

    await userEvent.click(btn);
    expect(newCards.length).toEqual(1);
    const [sendCardInfo] = newCards;
    const { name, date, select, checkbox, radio } = sendCardInfo;
    expect(name).toEqual(testObj.name);
    expect(date).toEqual(testObj.date);
    expect(select).toEqual(testObj.select);
    expect(checkbox).toEqual(testObj.checkbox);
    expect(radio).toEqual(testObj.radio);
  });
});
