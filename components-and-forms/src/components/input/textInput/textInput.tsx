import React from 'react';

class TextInput extends React.Component<{ name: string }> {
  name: string;
  constructor(props: { name: string }) {
    super(props);
    this.name = props.name;
  }

  render() {
    return (
      <div className="text-input__wrapper">
        <div className="text-input__input-block">
          <label>
            {this.name}
            <input
              type={'text'}
              placeholder={`enter ${this.name}`}
              className="text-input__input"
            ></input>
          </label>
        </div>
        <div className="text-input__error-block">
          <span className="text-input__error-text">Wrong {this.name}</span>
        </div>
      </div>
    );
  }
}

export default TextInput;
