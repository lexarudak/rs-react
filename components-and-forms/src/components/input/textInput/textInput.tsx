import React from 'react';

class TextInput extends React.Component<{ name: string }> {
  name: string;
  constructor(props: { name: string }) {
    super(props);
    this.name = props.name;
  }

  render() {
    return (
      <label className="input-block__label">
        <span className="input-block__title">{this.name}</span>
        <input
          type={'text'}
          placeholder={`enter ${this.name.toLowerCase()}`}
          className="input-block__input"
        ></input>
      </label>
    );
  }
}

export default TextInput;
