import Nav from '../../nav/nav';
import React from 'react';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      'header',
      { className: 'header' },
      React.createElement('h2', { className: 'header__name' }, 'React Components.'),
      React.createElement('span', { className: 'header__page-name' }, '/ ', this.props.name),
      React.createElement(Nav, null)
    );
  }
}
export default Header;
