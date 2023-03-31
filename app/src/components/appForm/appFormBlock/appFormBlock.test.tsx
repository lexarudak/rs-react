// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
// import { TextInputProps } from 'base/types';
// import TextInput from '../../../components/input/textInput/textInput';
// import React from 'react';
// import AppFormBlock from './appFormBlock';

// describe('form block tests', () => {
//   const textInputProps: TextInputProps = {
//     name: 'title',
//     inputRef: React.createRef(),
//   };

//   test('render form block test', () => {
//     render(
//       <AppFormBlock
//         inputBlock={<TextInput {...textInputProps} />}
//         isValid={true}
//         errorText={'error text'}
//       />
//     );

//     const block = screen.getByText('title');
//     expect(block).toBeInTheDocument();
//     const errorText = screen.getByText('error text');
//     expect(errorText).not.toHaveClass('app-form__error-text_active');
//   });

//   test('render form block text error test', () => {
//     render(
//       <AppFormBlock
//         inputBlock={<TextInput {...textInputProps} />}
//         isValid={false}
//         errorText={'error text'}
//       />
//     );

//     const errorText = screen.getByText('error text');
//     expect(errorText).toHaveClass('app-form__error-text_active');
//   });
// });
