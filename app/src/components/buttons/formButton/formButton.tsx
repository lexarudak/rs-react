import React from 'react';

class FormButton extends React.Component<{
  name: string;
  callback: (event: React.MouseEvent) => void;
}> {
  constructor(props: { name: string; callback: (event: React.MouseEvent) => void }) {
    super(props);
  }

  public render() {
    return (
      <button className="card-button" onClick={(event) => this.props.callback(event)}>
        {this.props.name}
      </button>
    );
  }
}

export default FormButton;
