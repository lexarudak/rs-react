import CheckboxInput from '../../input/checkboxInput/checkboxInput';
import React from 'react';
import DateInput from '../../input/dateInput/dateInput';
import SelectInput from '../../input/selectInput/selectInput';
import TextInput from '../../input/textInput/textInput';
import config from '../appFormConfig/appFormConfig';
import AppFormErrorList from '../appFormErrorList.ts/appFormErrorList';
import RadioInput from '../../../components/input/radioInput/radioInput';
import ImageInput from '../../../components/input/imageInput/imageInput';

const appFormBlockList: [key: string, inputBlock: React.Component, errorText: string][] = [
  ['1', new TextInput(config.name), AppFormErrorList.name],
  ['2', new DateInput(config.date), AppFormErrorList.date],
  ['3', new SelectInput(config.select), AppFormErrorList.select],
  ['4', new CheckboxInput(config.checkbox), AppFormErrorList.checkbox],
  ['5', new RadioInput(config.radio), AppFormErrorList.radio],
  ['6', new ImageInput(config.img), AppFormErrorList.img],
];

export default appFormBlockList;
