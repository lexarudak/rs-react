import React from 'react';

class DateInput extends React.Component<{ name: string; from: string; to: string }> {
  name: string;
  from: string;
  to: string;
  constructor(props: { name: string; from: string; to: string }) {
    super(props);
    this.name = props.name;
    this.from = props.from;
    this.to = props.to;
  }

  render() {
    return (
      <label className="input-label">
        {this.name}
        <input
          type={'date'}
          className="date-input"
          name="trip-start"
          min={this.from}
          max={this.to}
        ></input>
      </label>
    );
  }
}

export default DateInput;
