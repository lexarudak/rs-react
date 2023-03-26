import { MultiInputProps, MultipleValue } from 'base/types';
import React from 'react';

class CheckboxInput extends React.Component {
  name: string;
  values: MultipleValue[];
  _errorText: string;

  constructor(props: MultiInputProps) {
    super(props);

    this.name = props.name;
    this.values = props.values;
    this._errorText = props.errorText;
  }

  public get errorText(): string {
    return this._errorText;
  }

  render() {
    return (
      <fieldset className="input-block__border">
        <legend className="input-block__border-title">{this.name}</legend>
        {this.values.map((values) => {
          const [id, value, ref] = values;
          return (
            <label className="input-block__label input-block__checkbox" key={id}>
              <input
                className="input-block__label-check"
                name={this.name}
                value={value}
                ref={ref}
                type="checkbox"
              ></input>
              <span className="input-block__label-text">{value}</span>
            </label>
          );
        })}
      </fieldset>
    );
  }
}

export default CheckboxInput;
