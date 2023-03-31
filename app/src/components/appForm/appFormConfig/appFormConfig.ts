export const nameConfig = {
  title: 'Card name',
  registerName: 'name' as const,
  registerOptions: {
    required: 'minimum 3 characters, please',
    minLength: {
      value: 3,
      message: 'minimum 3 characters, please',
    },
  },
};

export const dateConfig = {
  title: 'Card date',
  from: '2023-01-01',
  to: '2024-12-31',
  registerName: 'date' as const,
  registerOptions: {
    required: 'choose a day in 2023 or 2024',
  },
};

export const selectConfig = {
  title: 'Card type',
  valuesArr: [
    { id: 'default', value: 'Select card type' },
    { id: 1, value: 'Cool card' },
    { id: 2, value: 'Very cool card' },
    { id: 3, value: 'Extremely cool card' },
  ],
  registerName: 'select' as const,
  registerOptions: {
    validate: (value: string, d: object) => {
      console.log(d);
      return value !== 'Select card type' || 'select card type';
    },
  },
};

export const checkboxConfig = {
  title: 'Upgrade card title',
  valuesArr: [
    { id: 1, text: 'Bold' },
    { id: 2, text: 'Italic' },
    { id: 3, text: 'Bright color' },
  ],
  registerName: 'checkbox' as const,
  registerOptions: {
    required: 'choose at least 1 item',
  },
};

export const radioConfig = {
  title: 'Add border?',
  valuesArr: [
    { id: 1, text: 'Yes, of course!' },
    { id: 2, text: 'No, thanks' },
  ],
  registerName: 'radio' as const,
  registerOptions: {
    required: 'please, make a choice',
  },
};

export const imageConfig = {
  title: 'Add image',
  registerName: 'image' as const,
  registerOptions: {
    required: 'please, add a picture',
  },
};
