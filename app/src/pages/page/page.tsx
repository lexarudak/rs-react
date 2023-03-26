import PageNames from '../../base/enums/pageNames';
import React from 'react';
import { PageProps } from '../../base/types';

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
        <h2 className="title">{this.name}</h2>
      </div>
    );
  }
}

export default Page;
