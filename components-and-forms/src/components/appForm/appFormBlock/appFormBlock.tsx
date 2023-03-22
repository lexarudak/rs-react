import InputBlock from 'base/interface';
import React from 'react';

class AppFormBlock extends React.Component<{ inputBlock: React.Component }> {
  inputBlock: InputBlock;
  constructor(props: { inputBlock: InputBlock; errorText: string }) {
    super(props);
    this.inputBlock = props.inputBlock;
  }

  render() {
    return (
      <div className="app-form__block">
        <div className="app-form__input-block">{this.inputBlock.render()}</div>
        <div className="app-form__error-block">
          <span className="app-form__error-text">{this.inputBlock.errorText}</span>
        </div>
      </div>
    );
  }
}

export default AppFormBlock;
