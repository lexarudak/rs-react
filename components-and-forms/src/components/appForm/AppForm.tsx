import TextInput from '../input/textInput/textInput';
import React from 'react';
import AppFormBlock from './appFormBlocks/appFormBlock';
import DateInput from '../../components/input/dateInput/dateInput';

class AppForm extends React.Component {
  constructor(props: string) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <form className="app-form">
        <fieldset className="app-form__border">
          <legend className="app-form__title">Create form card</legend>
          <AppFormBlock inputBlock={new TextInput({ name: 'Card name' })} errorText="AAAA!" />
          <AppFormBlock
            inputBlock={new DateInput({ name: 'Card date', from: '2023-01-01', to: '2023-12-31' })}
            errorText="BBB!"
          />
        </fieldset>
      </form>
    );
  }
}

export default AppForm;
