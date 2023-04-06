import React from 'react';
import { render, screen } from '@testing-library/react';
import PopupWithText from './popupWithText';
import '@testing-library/jest-dom';

describe('popupWithText tests', () => {
  test('render show test', () => {
    const text = 'Show';
    render(<PopupWithText text={text} isPopupShow={true} />);

    const popupText = screen.getByText(text);
    expect(popupText).toBeInTheDocument();

    const popup = screen.getByTestId('popup-with-text');
    expect(popup).toHaveClass('popup-with-text_active');
  });

  test('render hide test', () => {
    const text = 'Show';
    render(<PopupWithText text={text} isPopupShow={false} />);

    const popupText = screen.getByText(text);
    expect(popupText).toBeInTheDocument();

    const popup = screen.getByTestId('popup-with-text');
    expect(popup).not.toHaveClass('popup-with-text_active');
  });
});
