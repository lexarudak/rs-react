import { MultiInputProps } from 'base/types';
import React, { RefObject } from 'react';

class SelectInput extends React.Component {
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
      <label className="input-block__label">
        <span className="input-block__title">{this.name}</span>
        <select name={this.name} className="input-block__input">
          {this.values.map((values) => {
            const [id, value] = values;
            return (
              <option value={value} key={id}>
                {value}
              </option>
            );
          })}
        </select>
      </label>
    );
  }
}

export default SelectInput;
