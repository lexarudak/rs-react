import React, { RefObject } from 'react';
import { TextInputProps } from 'base/types';

class TextInput extends React.Component {
  name: string;
  error: string;
  ref: RefObject<HTMLInputElement>;

  constructor(props: TextInputProps, ref: RefObject<HTMLInputElement>) {
    super(props);

    this.name = props.name;
    this.error = props.error;
    this.ref = ref;
  }

  public get errorText(): string {
    return this.error;
  }

  render() {
    return (
      <label className="input-block__label">
        <span className="input-block__title">{this.name}</span>
        <input
          ref={this.ref}
          type={'text'}
          placeholder={`enter ${this.name.toLowerCase()}`}
          className="input-block__input"
        ></input>
      </label>
    );
  }
}

export default TextInput;
