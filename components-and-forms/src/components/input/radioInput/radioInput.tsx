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
      <fieldset>
        <legend>{this.name}</legend>
        {this.values.map((values) => {
          const [id, value] = values;
          return (
            <label className="input-label" key={id}>
              <input name={this.name} type="radio"></input>
              {value}
            </label>
          );
        })}
      </fieldset>
    );
  }
}

export default RadioInput;
