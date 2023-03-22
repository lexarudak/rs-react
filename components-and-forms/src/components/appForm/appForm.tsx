import CheckboxInput from '../../components/input/checkboxInput/checkboxInput';
import DateInput from '../../components/input/dateInput/dateInput';
import ImageInput from '../../components/input/imageInput/imageInput';
import RadioInput from '../../components/input/radioInput/radioInput';
import SelectInput from '../../components/input/selectInput/selectInput';
import React, { RefObject } from 'react';
import FormButton from '../../components/buttons/formButton';
import TextInput from '../../components/input/textInput/textInput';
import AppFormBlock from './appFormBlock/appFormBlock';
import config from './appFormConfig/appFormConfig';

class AppForm extends React.Component {
  nameRef: RefObject<HTMLInputElement>;
  dateRef: RefObject<HTMLInputElement>;
  selectRef: RefObject<HTMLInputElement>;
  checkboxRef: RefObject<HTMLInputElement>;
  radioRef: RefObject<HTMLInputElement>;
  imgRef: RefObject<HTMLInputElement>;

  constructor(props: string) {
    super(props);

    this.nameRef = React.createRef();
    this.dateRef = React.createRef();
    this.selectRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.radioRef = React.createRef();
    this.imgRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    console.log('Submit', this);
    console.log(this.nameRef.current?.value);
    console.log(this.dateRef.current?.value);
    console.log(this.selectRef.current?.value);
    console.log(this.checkboxRef.current?.value);
    console.log(this.radioRef.current?.value);
    console.log(this.imgRef.current?.value);
  }

  render(): React.ReactNode {
    return (
      <form className="app-form">
        <fieldset className="app-form__border">
          <legend className="app-form__title">Create form card</legend>
          <AppFormBlock inputBlock={new TextInput(config.name, this.nameRef)} />
          <AppFormBlock inputBlock={new DateInput(config.date, this.dateRef)} />
          <AppFormBlock inputBlock={new SelectInput(config.select, this.selectRef)} />
          <AppFormBlock inputBlock={new CheckboxInput(config.checkbox, this.checkboxRef)} />
          <AppFormBlock inputBlock={new RadioInput(config.radio, this.radioRef)} />
          <AppFormBlock inputBlock={new ImageInput(config.name, this.imgRef)} />
          <FormButton name={'Create card'} callback={this.handleSubmit} />
        </fieldset>
      </form>
    );
  }
}

export default AppForm;
