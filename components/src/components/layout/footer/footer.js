import React from 'react';
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement('footer', { className: 'footer' }, '2023 (c)');
  }
}
export default Footer;
