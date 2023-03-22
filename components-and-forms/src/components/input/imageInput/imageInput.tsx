import React from 'react';

class ImageInput extends React.Component<{
  name: string;
}> {
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
          className="input-block__img-input"
          type="file"
          name={this.name}
          accept="image/png, image/jpeg"
        ></input>
      </label>
    );
  }
}

export default ImageInput;
