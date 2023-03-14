import PageProps from 'components/types';
import React from 'react';

class Page extends React.Component<PageProps> {
  name: string;

  constructor(props: PageProps, name: string) {
    super(props);
    this.name = name;
  }

  public componentDidMount() {
    this.props.changeName();
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
