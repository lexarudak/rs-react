import { DateInputProps } from 'base/types';
import React, { RefObject } from 'react';

class DateInput extends React.Component {
  name: string;
  from: string;
  to: string;
  _errorText: string;
  ref: RefObject<HTMLInputElement>;

  constructor(props: DateInputProps) {
    super(props);

    this.name = props.name;
    this.from = props.from;
    this.to = props.to;
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
          ref={this.ref}
          type={'date'}
          className="date-input input-block__input"
          name="trip-start"
          min={this.from}
          max={this.to}
        ></input>
      </label>
    );
  }
}

export default DateInput;
