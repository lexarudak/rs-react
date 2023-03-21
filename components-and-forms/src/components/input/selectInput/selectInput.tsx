import React from 'react';

class SelectInput extends React.Component<{ name: string; values: [id: string, value: string][] }> {
  name: string;
  values: [id: string, value: string][];
  constructor(props: { name: string; values: [id: string, value: string][] }) {
    super(props);
    this.name = props.name;
    this.values = props.values;
  }

  render() {
    return (
      <label className="input-label">
        {this.name}
        <select name={this.name}>
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
