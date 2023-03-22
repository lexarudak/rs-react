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
  error: string;
};

export type DateInputProps = {
  name: string;
  from: string;
  to: string;
  error: string;
};

export type MultiInputProps = {
  name: string;
  values: [id: string, value: string][];
  error: string;
};
