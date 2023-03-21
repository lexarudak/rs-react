import React from 'react';

class CheckboxInput extends React.Component<{
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
              <input name={value} type="checkbox"></input>
              {value}
            </label>
          );
        })}
      </fieldset>
    );
  }
}

export default CheckboxInput;
