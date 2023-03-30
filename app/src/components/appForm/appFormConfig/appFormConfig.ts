import React from 'react';

const appFormConfig = {
  name: {
    name: 'Card name',
    errorText: 'minimum 3 characters, please',
    inputRef: React.createRef<HTMLInputElement>(),
  },

  image: {
    name: 'Add image',
    errorText: 'please, add a picture',
    inputRef: React.createRef<HTMLInputElement>(),
  },

  date: {
    name: 'Card date',
    from: '2023-01-01',
    to: '2024-12-31',
    errorText: 'expected day 2023 or 2024',
    inputRef: React.createRef<HTMLInputElement>(),
  },

  select: {
    name: 'Card type',
    valuesArr: [
      { id: 0, value: 'Select card type' },
      { id: 1, value: 'Cool card' },
      { id: 2, value: 'Very cool card' },
      { id: 3, value: 'Extremely cool card' },
    ],
    errorText: 'please, select card type',
    selectRef: React.createRef<HTMLSelectElement>(),
  },

  checkbox: {
    name: 'Upgrade card title',
    valuesArr: [
      { id: 1, text: 'Bold', ref: React.createRef<HTMLInputElement>() },
      { id: 2, text: 'Italic', ref: React.createRef<HTMLInputElement>() },
      { id: 3, text: 'Bright color', ref: React.createRef<HTMLInputElement>() },
    ],
    errorText: 'choose at least 1 item',
  },

  radio: {
    name: 'Add border?',
    valuesArr: [
      { id: 1, text: 'Yes, of course!', ref: React.createRef<HTMLInputElement>() },
      { id: 2, text: 'No, thanks', ref: React.createRef<HTMLInputElement>() },
    ],
    errorText: 'please, make a choice',
  },
};

export default appFormConfig;
