import CheckboxInput from '../../../../components/input/checkboxInput/checkboxInput';
import React from 'react';
import DateInput from '../../../../components/input/dateInput/dateInput';
import SelectInput from '../../../../components/input/selectInput/selectInput';
import TextInput from '../../../../components/input/textInput/textInput';
import config from '../appFormConfig/appFormConfig';
import AppFormErrorList from '../appFormErrorList.ts/appFormErrorList';

const appFormBlockList: [key: string, inputBlock: React.Component, errorText: string][] = [
  ['1', new TextInput(config.name), AppFormErrorList.name],
  ['2', new DateInput(config.date), AppFormErrorList.date],
  ['3', new SelectInput(config.select), AppFormErrorList.select],
  ['4', new CheckboxInput(config.checkbox), AppFormErrorList.checkbox],
];

export default appFormBlockList;
