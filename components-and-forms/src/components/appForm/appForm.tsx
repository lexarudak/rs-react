import FormButton from '../../components/buttons/formButton';
import React from 'react';
import AppFormBlock from './appFormBlock/appFormBlock';
import appFormList from './appFormBlockList/appFormBlockList';

class AppForm extends React.Component {
  formList: [key: string, inputBlock: React.Component, errorText: string][];
  constructor(props: string) {
    super(props);

    this.formList = appFormList;
  }

  render(): React.ReactNode {
    return (
      <form className="app-form">
        <fieldset className="app-form__border">
          <legend className="app-form__title">Create form card</legend>
          {this.formList.map((value) => {
            const [key, inputBlock, errorText] = value;
            return <AppFormBlock key={key} inputBlock={inputBlock} errorText={errorText} />;
          })}
          <FormButton name={'Create card'} />
        </fieldset>
      </form>
    );
  }
}

export default AppForm;
