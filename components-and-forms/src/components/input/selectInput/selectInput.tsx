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
