import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Banner from '../../components/banner/banner';
import React from 'react';
import Popup from './popup';
import TestId from 'base/enums/testId';
import styles from './popup.module.scss';

const { getByText, getByTestId, queryByTestId } = screen;

describe('popup', () => {
  it('render test', () => {
    render(
      <Popup isShow={true}>
        <Banner text={'test'} />
      </Popup>
    );
    expect(getByText('test')).toBeInTheDocument();
    expect(getByTestId(TestId.popup)).toHaveClass(styles.active);
  });

  it('hide test', () => {
    render(
      <Popup isShow={false}>
        <Banner text={'test'} />
      </Popup>
    );
    expect(queryByTestId(TestId.popup)).toBeInTheDocument();
  });
});
