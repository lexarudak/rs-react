import { RefObject } from 'react';
import PageNames from './enums/pageNames';

export type PageProps = {
  changeName: (name: PageNames) => void;
};

export type MainState = {
  searchValue: string;
  changeSearchVal: (searchValue: string) => void;
};

export type CardInfo = {
  id: number;
  title: string;
  description: string;
  price: number;
  sale: number;
  rating: number;
  stock: number;
  type: string;
  thumbnail: string;
};

export type CardImgInfo = {
  sale: number;
  rating: number;
  thumbnail: string;
};

export type TextInputProps = {
  name: string;
  errorText: string;
  inputRef: RefObject<HTMLInputElement>;
};

export type DateInputProps = {
  name: string;
  from: string;
  to: string;
  errorText: string;
  inputRef: RefObject<HTMLInputElement>;
};

export type SelectInputProps = {
  name: string;
  values: [id: string, value: string][];
  errorText: string;
  selectRef: RefObject<HTMLSelectElement>;
};

export type MultiInputProps = {
  name: string;
  values: MultipleValue[];
  errorText: string;
};

export type FormState = {
  isNameValid: boolean;
  isDateValid: boolean;
  isSelectValid: boolean;
  isCheckboxValid: boolean;
  isRadioValid: boolean;
  isImageValid: boolean;
};

export type MultipleValue = [id: string, value: string, ref: RefObject<HTMLInputElement>];
