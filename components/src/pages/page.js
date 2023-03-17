import React from 'react';
class Page extends React.Component {
  name;
  constructor(props, name) {
    super(props);
    this.name = name;
  }
  componentDidMount() {
    this.props.changeName(this.name);
  }
  render() {
    return React.createElement('div', null, React.createElement('h1', null, this.name));
  }
}
export default Page;
