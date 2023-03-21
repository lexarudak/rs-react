import React from 'react';

class AppFormBlock extends React.Component<{ inputBlock: React.Component; errorText: string }> {
  inputBlock: React.Component;
  errorText: string;
  constructor(props: { inputBlock: React.Component; errorText: string }) {
    super(props);
    this.inputBlock = props.inputBlock;
    this.errorText = props.errorText;
  }

  render() {
    return (
      <div className="app-form__block">
        <div className="app-form__input-block">{this.inputBlock.render()}</div>
        <div className="app-form__error-block">
          <span className="app-form__error-text">{this.errorText}</span>
        </div>
      </div>
    );
  }
}

export default AppFormBlock;
