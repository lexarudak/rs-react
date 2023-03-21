import React from 'react';

class TextInput extends React.Component<{ name: string }> {
  name: string;
  constructor(props: { name: string }) {
    super(props);
    this.name = props.name;
  }

  render() {
    return (
      <label className="input-label">
        {this.name}
        <input
          type={'text'}
          placeholder={`enter ${this.name.toLowerCase()}`}
          className="text-input"
        ></input>
      </label>
    );
  }
}

export default TextInput;
