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
      <label className="input-label">
        {this.name}
        <input type="file" name={this.name} accept="image/png, image/jpeg"></input>
      </label>
    );
  }
}

export default ImageInput;
