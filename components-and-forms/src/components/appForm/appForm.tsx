import { AppFormProps, FormInputs, FormPageCard, FormState } from 'base/types';
import Validator from '../validator/validator';
import React from 'react';
import FormButton from '../../components/buttons/formButton';
import CheckboxInput from '../../components/input/checkboxInput/checkboxInput';
import DateInput from '../../components/input/dateInput/dateInput';
import ImageInput from '../../components/input/imageInput/imageInput';
import RadioInput from '../../components/input/radioInput/radioInput';
import SelectInput from '../../components/input/selectInput/selectInput';
import TextInput from '../../components/input/textInput/textInput';
import AppFormBlock from './appFormBlock/appFormBlock';
import config from './appFormConfig/appFormConfig';

class AppForm extends React.Component<AppFormProps> {
  state: FormState;
  validator: Validator;
  showPopup: (isPopupShow: boolean) => void;
  addNewCard: (cardInfo: FormPageCard) => void;

  constructor(props: AppFormProps) {
    super(props);

    this.state = {
      isNameValid: true,
      isDateValid: true,
      isSelectValid: true,
      isCheckboxValid: true,
      isRadioValid: true,
      isImageValid: true,
    };

    this.validator = new Validator();

    this.showPopup = props.showPopup;
    this.addNewCard = props.addNewCard;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private makeNewState(): { newState: FormState; inputs: FormInputs } {
    const nameInput = config.name.inputRef.current;
    const dateInput = config.date.inputRef.current;
    const selectInput = config.select.selectRef.current;
    const checkboxInputs = config.checkbox.values.map((val) => val[2].current);
    const radioInputs = config.radio.values.map((val) => val[2].current);
    const imageInput = config.image.inputRef.current;

    return {
      newState: {
        isNameValid: this.validator.isValueLonger(2, nameInput?.value),
        isDateValid: this.validator.isDateValid(dateInput?.value, config.date.from, config.date.to),
        isSelectValid: this.validator.isSelectValid(selectInput?.selectedIndex.toString()),
        isCheckboxValid: this.validator.isMultipleInputDone(checkboxInputs),
        isRadioValid: this.validator.isMultipleInputDone(radioInputs),
        isImageValid: this.validator.isValueNotEmpty(imageInput?.value),
      },
      inputs: { nameInput, dateInput, selectInput, checkboxInputs, radioInputs, imageInput },
    };
  }

  private resetInput(input: HTMLInputElement | null) {
    if (input) input.value = '';
  }

  private resetInputsArr(input: (HTMLInputElement | null)[]) {
    input.forEach((input) => {
      if (input) input.checked = false;
    });
  }

  private resetForm({
    nameInput,
    dateInput,
    selectInput,
    checkboxInputs,
    radioInputs,
    imageInput,
  }: FormInputs): void {
    [nameInput, dateInput, imageInput].forEach((input) => {
      this.resetInput(input);
    });
    [checkboxInputs, radioInputs].forEach((inputsArr) => {
      this.resetInputsArr(inputsArr);
    });
    if (selectInput) selectInput.value = config.select.values[0][1];
  }

  private setCardInfo({
    nameInput,
    dateInput,
    selectInput,
    checkboxInputs,
    radioInputs,
    imageInput,
  }: FormInputs): FormPageCard {
    const name = nameInput ? nameInput.value : '';
    const date = dateInput ? dateInput.value : '';
    const type = selectInput ? selectInput.value : '';
    const titleStyle = checkboxInputs.map((input) => (input?.checked ? input.value : ''));
    const border = radioInputs.filter((input) => input?.checked)[0]?.value || '';
    const image = imageInput ? imageInput.value : '';

    return { name, date, type, titleStyle, border, image };
  }

  handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    const { newState, inputs } = this.makeNewState();
    this.setState(newState);
    if (!this.validator.isFormValid(newState)) return;

    this.showPopup(true);
    this.addNewCard(this.setCardInfo(inputs));
    this.resetForm(inputs);

    setTimeout(() => {
      this.showPopup(false);
    }, 1000);
  }

  render(): React.ReactNode {
    return (
      <form className="app-form">
        <fieldset className="app-form__border">
          <legend className="title">Create form card</legend>
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
