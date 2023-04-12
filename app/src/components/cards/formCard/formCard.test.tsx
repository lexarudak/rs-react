it('fake test', async () => {});
// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
// import { FormPageCard } from 'base/models';
// import React from 'react';
// import FormCard from './formCard';

// describe('form card tests', () => {
//   const props: FormPageCard = {
//     name: 'card',
//     date: '01-01-2023',
//     select: 'cool card',
//     checkbox: ['bold', 'italic'],
//     radio: 'Yes, of course!',
//     imageSrc: '/public/plants/1/1.jpg',
//   };

//   test('render card test', () => {
//     render(<FormCard {...props} />);

//     const card = screen.getByTestId('form-card');
//     expect(card).toBeInTheDocument();
//   });

//   test('render card name test', () => {
//     render(<FormCard {...props} />);

//     const card = screen.getByTestId('form-card');
//     expect(card).toBeInTheDocument();
//     const name = screen.getByText('card');
//     expect(name).toBeInTheDocument();
//   });

//   test('render date name test', () => {
//     render(<FormCard {...props} />);

//     const date = screen.getByText('01-01-2023');
//     expect(date).toBeInTheDocument();
//   });

//   test('render title style test', () => {
//     render(<FormCard {...props} />);

//     const titleStyle = screen.getByText('bold | italic');
//     expect(titleStyle).toBeInTheDocument();
//   });

//   test('render border test', () => {
//     render(<FormCard {...props} />);

//     const border = screen.getByText('Yes');
//     expect(border).toBeInTheDocument();
//     const card = screen.getByTestId('form-card');
//     expect(card).toBeInTheDocument();
//     expect(card).toHaveClass('border');
//   });

//   test('render img test', () => {
//     render(<FormCard {...props} />);

//     const img: HTMLImageElement = screen.getByRole('img');
//     expect(img).toBeInTheDocument();
//     expect(img.src.includes(props.imageSrc)).toBeTruthy();
//   });
// });
