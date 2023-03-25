import React, { RefObject } from 'react';
import { TextInputProps } from 'base/types';

class TextInput extends React.Component {
  name: string;
  _errorText: string;
  inputRef: RefObject<HTMLInputElement>;

  constructor(props: TextInputProps) {
    super(props);

    this.name = props.name;
    this._errorText = props.errorText;
    this.inputRef = props.inputRef;
  }

  public get errorText(): string {
    return this._errorText;
  }

  render() {
    return (
      <label className="input-block__label">
        <span className="input-block__title">{this.name}</span>
        <input
          ref={this.inputRef}
          type={'text'}
          placeholder={`enter ${this.name.toLowerCase()}`}
          className="input-block__input"
        ></input>
      </label>
    );
  }
}

export default TextInput;
