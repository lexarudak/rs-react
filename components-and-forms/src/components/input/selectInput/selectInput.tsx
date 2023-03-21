import React from 'react';

class SelectInput extends React.Component<{ name: string; values: [string, string][] }> {
  name: string;
  values: [string, string][];
  constructor(props: { name: string; values: [string, string][] }) {
    super(props);
    this.name = props.name;
    this.values = props.values;
  }

  render() {
    return (
      <label className="input-label">
        {this.name}
        <select name={this.name}>
          {this.values.map((value) => {
            return (
              <option value={value[0]} key={value[1]}>
                {value[0]}
              </option>
            );
          })}
        </select>
      </label>
    );
  }
}

export default SelectInput;
