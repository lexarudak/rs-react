import React from 'react';

class RadioInput extends React.Component<{
  name: string;
  values: [id: string, value: string][];
}> {
  name: string;
  values: [id: string, value: string][];
  constructor(props: { name: string; values: [id: string, value: string][] }) {
    super(props);
    this.name = props.name;
    this.values = props.values;
  }

  render() {
    return (
      <fieldset className="input-block__border">
        <legend className="input-block__border-title">{this.name}</legend>
        {this.values.map((values) => {
          const [id, value] = values;
          return (
            <label className="input-block__label input-block__radio" key={id}>
              <input className="input-block__label-check" name={this.name} type="radio"></input>
              <span className="input-block__label-text">{value}</span>
            </label>
          );
        })}
      </fieldset>
    );
  }
}

export default RadioInput;
