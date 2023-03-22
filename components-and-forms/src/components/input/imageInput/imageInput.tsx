import { TextInputProps } from 'base/types';
import React, { RefObject } from 'react';

class ImageInput extends React.Component {
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
