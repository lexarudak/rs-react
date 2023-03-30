import { ReactElement, RefObject } from 'react';
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
  inputRef: RefObject<HTMLInputElement>;
};

export type DateInputProps = {
  name: string;
  from: string;
  to: string;
  inputRef: RefObject<HTMLInputElement>;
};

export type SelectValueObj = { id: number; value: string };

export type SelectInputProps = {
  name: string;
  valuesArr: SelectValueObj[];
  selectRef: RefObject<HTMLSelectElement>;
};

export type MultiInputProps = {
  name: string;
  valuesArr: MultipleValueObj[];
};

export type FormState = {
  isNameValid: boolean;
  isDateValid: boolean;
  isSelectValid: boolean;
  isCheckboxValid: boolean;
  isRadioValid: boolean;
  isImageValid: boolean;
};

export type FormPageState = {
  isPopupShow: boolean;
  cards: FormPageCard[];
  counter: number;
};

export type FormPageCard = {
  name: string;
  date: string;
  type: string;
  titleStyle: string[];
  border: string;
  image: string;
  key?: number;
};

export type FormBlock = {
  inputBlock: ReactElement;
  isValid: boolean;
  errorText: string;
};

export type MultipleValueObj = { id: number; text: string; ref: RefObject<HTMLInputElement> };

export type AppFormProps = {
  showPopup: (isPopupShow: boolean) => void;
  addNewCard: (cardInfo: FormPageCard) => void;
};

export type FormInputs = {
  nameInput: HTMLInputElement | null;
  dateInput: HTMLInputElement | null;
  selectInput: HTMLSelectElement | null;
  checkboxInputs: (HTMLInputElement | null)[];
  radioInputs: (HTMLInputElement | null)[];
  imageInput: HTMLInputElement | null;
};
