import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { OuterBanner, Popup } from 'components';
import { TestId } from 'models';
import styles from './Popup.module.scss';

const { getByText, getByTestId, queryByTestId } = screen;

describe('popup', () => {
  it('render test', () => {
    render(
      <Popup isShow={true}>
        <OuterBanner text={'test'} />
      </Popup>
    );
    expect(getByText('test')).toBeInTheDocument();
    expect(getByTestId(TestId.popup)).toHaveClass(styles.active);
  });

  it('hide test', () => {
    render(
      <Popup isShow={false}>
        <OuterBanner text={'test'} />
      </Popup>
    );
    expect(queryByTestId(TestId.popup)).toBeInTheDocument();
  });
});
