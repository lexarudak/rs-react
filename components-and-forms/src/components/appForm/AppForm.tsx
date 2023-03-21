import TextInput from '../../components/input/textInput/textInput';
import React from 'react';

class AppForm extends React.Component {
  constructor(props: string) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <form className="app-form">
        <fieldset className="app-form__border">
          <legend className="app-form__title">Create form card</legend>
          <TextInput name="Card name" />
        </fieldset>
      </form>
    );
  }
}

export default AppForm;
