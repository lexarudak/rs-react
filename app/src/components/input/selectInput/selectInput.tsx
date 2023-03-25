import { SelectInputProps } from 'base/types';
import React, { RefObject } from 'react';

class SelectInput extends React.Component {
  name: string;
  values: [id: string, value: string][];
  _errorText: string;
  ref: RefObject<HTMLSelectElement>;

  constructor(props: SelectInputProps) {
    super(props);

    this.name = props.name;
    this.values = props.values;
    this._errorText = props.errorText;
    this.ref = props.selectRef;
  }

  public get errorText(): string {
    return this._errorText;
  }

  render() {
    return (
      <label className="input-block__label">
        <span className="input-block__title">{this.name}</span>
        <select
          name={this.name}
          className="input-block__input"
          ref={this.ref}
          defaultValue={this.values[0][1]}
        >
          {this.values.map((values, index) => {
            const [id, value] = values;
            return (
              <option value={value} key={id} disabled={index === 0 ? true : false}>
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
