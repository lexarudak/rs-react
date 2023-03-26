import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppFormProps, FormPageCard } from 'base/types';
import PopupWithText from '../../components/popup/popupWithText';
import React from 'react';
import AppForm from './appForm';

describe('form tests', () => {
  let thisIsPopupShow = false;
  const newCards: FormPageCard[] = [];
  render(<PopupWithText text="popup" isPopupShow={thisIsPopupShow} />);

  const props: AppFormProps = {
    showPopup: (isPopupShow: boolean) => {
      thisIsPopupShow = isPopupShow;
    },
    addNewCard: (cardInfo: FormPageCard) => {
      newCards.push(cardInfo);
    },
  };

  test('render form test', () => {
    render(<AppForm {...props} />);

    const form = screen.getByText('Create form card');
    expect(form).toBeInTheDocument();
  });

  test('render name test', () => {
    render(<AppForm {...props} />);

    const name = screen.getByText('Card name');
    expect(name).toBeInTheDocument();
  });

  test('render date test', () => {
    render(<AppForm {...props} />);

    const date = screen.getByText('Card type');
    expect(date).toBeInTheDocument();
  });

  test('render checkbox test', () => {
    render(<AppForm {...props} />);

    const checkbox = screen.getByText('Upgrade card title');
    expect(checkbox).toBeInTheDocument();
  });

  test('render radio test', () => {
    render(<AppForm {...props} />);

    const radio = screen.getByText('Add border?');
    expect(radio).toBeInTheDocument();
  });
  test('render img test', () => {
    render(<AppForm {...props} />);

    const img = screen.getByText('Add image');
    expect(img).toBeInTheDocument();
  });

  test('errors text test', () => {
    const { container } = render(<AppForm {...props} />);

    const errors = container.getElementsByClassName('app-form__error-text_active');
    expect(errors.length).toEqual(0);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(errors.length).toEqual(6);
  });

  test('send form test', async () => {
    const { container } = render(<AppForm {...props} />);

    const errors = container.getElementsByClassName('app-form__error-text_active');
    expect(errors.length).toEqual(0);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(errors.length).toEqual(6);
    expect(thisIsPopupShow).toBeFalsy();

    const name: HTMLInputElement = screen.getByPlaceholderText('enter card name');
    expect(name).toBeInTheDocument();
    name.value = 'Card name';

    const date: HTMLInputElement = screen.getByTestId('date-input');
    expect(date).toBeInTheDocument();
    date.value = '2023-05-05';

    const select: HTMLSelectElement = screen.getByDisplayValue('Select card type');
    expect(select).toBeInTheDocument();
    select.options[1].selected = true;

    const bold = screen.getByText('Bold');
    expect(bold).toBeInTheDocument();
    if (bold.previousElementSibling instanceof HTMLInputElement) {
      bold.previousElementSibling.checked = true;
    }

    const border: HTMLInputElement = screen.getByText('Yes, of course!');
    expect(border).toBeInTheDocument();
    if (border.previousElementSibling instanceof HTMLInputElement) {
      border.previousElementSibling.checked = true;
    }

    fireEvent.click(btn);
    expect(errors.length).toEqual(1);
  });
});
