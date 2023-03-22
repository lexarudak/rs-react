import React from 'react';

class FormButton extends React.Component<{ name: string }> {
  constructor(props: { name: string }) {
    super(props);
  }

  public render() {
    return <button className="card-button">{this.props.name}</button>;
  }
}

export default FormButton;
