import { ReactElement } from 'react';
import { FieldError, Merge, UseFormRegisterReturn } from 'react-hook-form';
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
  config: {
    title: string;
  };
  register: UseFormRegisterReturn<string>;
};

export type DateInputProps = {
  config: {
    title: string;
    from: string;
    to: string;
  };
  register: UseFormRegisterReturn<string>;
};

export type SelectValueObj = { id: number | string; value: string };

export type SelectInputProps = {
  config: {
    title: string;
    valuesArr: SelectValueObj[];
  };
  register: UseFormRegisterReturn<string>;
};

export type MultiInputProps = {
  config: { title: string; valuesArr: MultipleValueObj[] };
  register: UseFormRegisterReturn<string>;
};

export type MultipleValueObj = { id: number; text: string };

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

export type AppFormData = {
  name: string;
  date: string;
  select: string;
  checkbox: string[] | false;
  radio: string | null;
  image: FileList;
};

export type FormPageCard = {
  name: string;
  date: string;
  select: string;
  checkbox: string[] | false;
  radio: string | null;
  imageSrc: string;
  key?: number;
};

export type FormBlock = {
  inputBlock: ReactElement;
  err: FieldError | Merge<FieldError, FieldError> | undefined;
};

export type AppFormProps = {
  showPopupForSeconds: (seconds: number) => void;
  addNewCard: (date: FormPageCard) => void;
};

export type FormInputs = {
  nameInput: HTMLInputElement | null;
  dateInput: HTMLInputElement | null;
  selectInput: HTMLSelectElement | null;
  checkboxInputs: (HTMLInputElement | null)[];
  radioInputs: (HTMLInputElement | null)[];
  imageInput: HTMLInputElement | null;
};
