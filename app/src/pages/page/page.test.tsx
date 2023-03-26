import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PageNames from 'base/enums/pageNames';
import { PageProps } from 'base/types';
import React from 'react';
import Page from './page';

describe('popupWithText tests', () => {
  const props: PageProps = {
    changeName: (name: PageNames) => {
      console.log(name);
    },
  };

  test('render input test', () => {
    render(<Page {...props} />);

    const textInput = screen.getByRole('textbox');
    expect(textInput).toBeInTheDocument();
    expect(textInput).toHaveAttribute('placeholder');
  });
});
