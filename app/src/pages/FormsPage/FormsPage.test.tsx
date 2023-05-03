import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { TestId, FORM_CARDS } from 'models';
import { FormsPage } from 'pages';
import { store } from 'store';

const { getByText, getByRole, getByPlaceholderText, getByTestId, queryByText } = screen;
const testFile = new File(['test'], 'test.png', { type: 'image/png' });
const [FORM_CARD] = FORM_CARDS;
const BOLD_CHECKBOX = 'Bold';
const BORDER_RADIO = 'Yes, of course!';
const BORDER_TITLE = 'Border:';
const STYLE_TITLE = 'Title style:';
const PLACEHOLDER = 'enter card name';
const PAGE_TITLE = 'Create form card';

describe('forms page', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormsPage />
      </Provider>
    );
  });

  it('render test', () => {
    expect(getByText(PAGE_TITLE)).toBeInTheDocument();
  });

  it('work test', async () => {
    window.URL.createObjectURL = jest.fn();
    const btn = getByRole('button');

    await userEvent.click(btn);
    expect(queryByText(STYLE_TITLE)).not.toBeInTheDocument();

    await userEvent.type(getByPlaceholderText(PLACEHOLDER), FORM_CARD.name);
    await userEvent.type(getByTestId(TestId.dateInput), FORM_CARD.date);
    await userEvent.selectOptions(getByRole('combobox'), FORM_CARD.select);

    await userEvent.click(btn);
    expect(queryByText(STYLE_TITLE)).not.toBeInTheDocument();

    await userEvent.click(getByText(BOLD_CHECKBOX));
    await userEvent.click(getByText(BORDER_RADIO));
    await userEvent.upload(getByTestId(TestId.imageInput), testFile);

    await userEvent.click(btn);

    expect(getByText(STYLE_TITLE)).toBeInTheDocument();
    expect(getByText(FORM_CARD.name)).toBeInTheDocument();
    expect(getByText(FORM_CARD.date)).toBeInTheDocument();
    expect(getByText(BORDER_TITLE)).toBeInTheDocument();
  });
});
