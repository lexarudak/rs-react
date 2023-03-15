import PageNames from './enums/pageNames';

export type PageProps = {
  changeName: (name: PageNames) => void;
};

export type MainState = {
  search: string;
};
