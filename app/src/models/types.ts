import { Character } from 'models';
import { UseFormRegisterReturn } from 'react-hook-form';

export type PopupProps = {
  isShow: boolean;
  closeFn?: () => void;
  children: React.ReactNode;
};

export type TextInputProps = {
  config: {
    TITLE: string;
  };
  register: UseFormRegisterReturn<string>;
};

export type DateInputProps = {
  config: {
    TITLE: string;
    FROM: string;
    TO: string;
  };
  register: UseFormRegisterReturn<string>;
};

export type SelectValueObj = { id: number | string; value: string };

export type SelectInputProps = {
  config: {
    TITLE: string;
    VALUES_ARR: SelectValueObj[];
  };
  register: UseFormRegisterReturn<string>;
};

export type MultiInputProps = {
  config: { TITLE: string; VALUES_ARR: MultipleValueObj[] };
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

export type BigCardInfoListProps = Pick<
  Character,
  'species' | 'type' | 'gender' | 'origin' | 'location'
>;
