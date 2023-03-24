import { FormState } from 'base/types';
import DateInput from '../../components/input/dateInput/dateInput';
import React from 'react';
import { isSelectValid, isValueLonger, isValueNotEmpty } from '../../base/validators/validators';
import FormButton from '../../components/buttons/formButton';
import TextInput from '../../components/input/textInput/textInput';
import AppFormBlock from './appFormBlock/appFormBlock';
import config from './appFormConfig/appFormConfig';
import SelectInput from '../../components/input/selectInput/selectInput';
import CheckboxInput from '../../components/input/checkboxInput/checkboxInput';
import RadioInput from '../../components/input/radioInput/radioInput';
import ImageInput from '../../components/input/imageInput/imageInput';

class AppForm extends React.Component<{ showPopup: (isPopupShow: boolean) => void }> {
  state: FormState;
  showPopup: (isPopupShow: boolean) => void;

  constructor(props: { showPopup: (isPopupShow: boolean) => void }) {
    super(props);

    this.state = {
      isNameValid: true,
      isDateValid: true,
      isSelectValid: true,
      isCheckboxValid: true,
      isRadioValid: true,
      isImageValid: true,
    };

    this.showPopup = props.showPopup;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private isValueValid(
    value: string | undefined,
    validator: (value: string | undefined) => boolean
  ) {
    return validator(value);
  }

  private isMultipleInputDone(arr: (HTMLInputElement | null)[]) {
    let answer = false;
    arr.forEach((input) => {
      if (input !== null) {
        if (input.checked) answer = true;
      }
    });
    return answer;
  }

  private makeNewState() {
    const name = config.name.inputRef.current;
    const date = config.date.inputRef.current;
    const select = config.select.selectRef.current;
    const checkbox = config.checkbox.values.map((val) => val[2].current);
    const radio = config.radio.values.map((val) => val[2].current);
    const image = config.image.inputRef.current;

    return {
      isNameValid: this.isValueValid(name?.value, isValueLonger.bind(null, 2)),
      isDateValid: this.isValueValid(date?.value, isValueNotEmpty),
      isSelectValid: this.isValueValid(select?.selectedIndex.toString(), isSelectValid),
      isCheckboxValid: this.isMultipleInputDone(checkbox),
      isRadioValid: this.isMultipleInputDone(radio),
      isImageValid: this.isValueValid(image?.value, isValueNotEmpty),
    };
  }

  private isFormValid(newState: FormState) {
    let answer = true;

    Object.values(newState).forEach((state) => {
      if (!state) answer = false;
    });
    return answer;
  }

  handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    const newState = this.makeNewState();
    this.setState(newState);
    if (this.isFormValid(newState)) {
      this.showPopup(true);
      setTimeout(() => {
        this.showPopup(false);
      }, 2000);
    }
  }

  render(): React.ReactNode {
    return (
      <form className="app-form">
        <fieldset className="app-form__border">
          <legend className="app-form__title">Create form card</legend>
          <AppFormBlock inputBlock={new TextInput(config.name)} isValid={this.state.isNameValid} />
          <AppFormBlock inputBlock={new DateInput(config.date)} isValid={this.state.isDateValid} />
          <AppFormBlock
            inputBlock={new SelectInput(config.select)}
            isValid={this.state.isSelectValid}
          />
          <AppFormBlock
            inputBlock={new CheckboxInput(config.checkbox)}
            isValid={this.state.isCheckboxValid}
          />
          <AppFormBlock
            inputBlock={new RadioInput(config.radio)}
            isValid={this.state.isRadioValid}
          />
          <AppFormBlock
            inputBlock={new ImageInput(config.image)}
            isValid={this.state.isImageValid}
          />
          <FormButton name={'Create card'} callback={this.handleSubmit} />
        </fieldset>
      </form>
    );
  }
}

export default AppForm;
