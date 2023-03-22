import { MultiInputProps } from 'base/types';
import React, { RefObject } from 'react';

class CheckboxInput extends React.Component {
  name: string;
  values: [id: string, value: string][];
  error: string;
  ref: RefObject<HTMLInputElement>;

  constructor(props: MultiInputProps, ref: RefObject<HTMLInputElement>) {
    super(props);

    this.name = props.name;
    this.values = props.values;
    this.error = props.error;
    this.ref = ref;
  }

  public get errorText(): string {
    return this.error;
  }

  render() {
    return (
      <fieldset className="input-block__border">
        <legend className="input-block__border-title">{this.name}</legend>
        {this.values.map((values) => {
          const [id, value] = values;
          return (
            <label className="input-block__label input-block__checkbox" key={id}>
              <input className="input-block__label-check" name={value} type="checkbox"></input>
              <span className="input-block__label-text">{value}</span>
            </label>
          );
        })}
      </fieldset>
    );
  }
}

export default CheckboxInput;
