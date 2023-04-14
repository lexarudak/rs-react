import { UseFormRegisterReturn } from 'react-hook-form';

export type PopupProps = {
  isShow: boolean;
  closeFn?: () => void;
  children: React.ReactNode;
};

export interface RickAndMortyRes {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CardProps = {
  character: Character;
  setIsPopupShow: (isShow: boolean) => void;
  fetchCharacterById: (id: number) => void;
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
  id: string;
};
