export const APP_FORM_CONFIG = {
  TEXT: {
    TITLE: 'Card name',
    REG_NAME: 'name' as const,
    REG_OPT: {
      required: 'minimum 3 characters, please',
      minLength: {
        value: 3,
        message: 'minimum 3 characters, please',
      },
    },
  },
  DATE: {
    TITLE: 'Card date',
    FROM: '2023-01-01',
    TO: '2024-12-31',
    REG_NAME: 'date' as const,
    REG_OPT: {
      required: 'choose a day in 2023 or 2024',
    },
  },
  SELECT: {
    TITLE: 'Card type',
    VALUES_ARR: [
      { id: 'default', value: 'Select card type' },
      { id: 1, value: 'Cool card' },
      { id: 2, value: 'Very cool card' },
      { id: 3, value: 'Extremely cool card' },
    ],
    REG_NAME: 'select' as const,
    REG_OPT: {
      validate: (value: string) => {
        return value !== 'Select card type' || 'select card type';
      },
    },
  },
  CHECKBOX: {
    TITLE: 'Upgrade card title',
    VALUES_ARR: [
      { id: 1, text: 'Bold' },
      { id: 2, text: 'Italic' },
      { id: 3, text: 'Bright color' },
    ],
    REG_NAME: 'checkbox' as const,
    REG_OPT: {
      required: 'choose at least 1 item',
    },
  },
  RADIO: {
    TITLE: 'Add border?',
    VALUES_ARR: [
      { id: 1, text: 'Yes, of course!' },
      { id: 2, text: 'No, thanks' },
    ],
    REG_NAME: 'radio' as const,
    REG_OPT: {
      required: 'please, make a choice',
    },
  },
  IMAGE: {
    TITLE: 'Add image',
    REG_NAME: 'image' as const,
    REG_OPT: {
      required: 'please, add a picture',
    },
  },
};
