import React from 'react';

class Page extends React.Component {
  name: string;

  constructor(props: string, name: string) {
    super(props);
    this.name = name;
  }

  public render() {
    return (
      <div>
        <h1>{this.name}</h1>
      </div>
    );
  }
}

export default Page;
