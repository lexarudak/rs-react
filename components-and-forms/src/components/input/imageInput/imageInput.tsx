import { TextInputProps } from 'base/types';
import React, { RefObject } from 'react';

class ImageInput extends React.Component {
  name: string;
  _errorText: string;
  ref: RefObject<HTMLInputElement>;

  constructor(props: TextInputProps) {
    super(props);

    this.name = props.name;
    this._errorText = props.errorText;
    this.ref = props.inputRef;
  }

  public get errorText(): string {
    return this._errorText;
  }

  render() {
    return (
      <label className="input-block__label">
        <span className="input-block__title">{this.name}</span>
        <input
          className="input-block__img-input"
          ref={this.ref}
          type="file"
          name={this.name}
          accept="image/png, image/jpeg"
        ></input>
      </label>
    );
  }
}

export default ImageInput;
