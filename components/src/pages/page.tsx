import PageNames from '../components/enums/pageNames';
import React from 'react';
import PageProps from '../components/types';

class Page extends React.Component<PageProps> {
  name: PageNames;

  constructor(props: PageProps, name: PageNames) {
    super(props);
    this.name = name;
  }

  public componentDidMount() {
    this.props.changeName(this.name);
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
