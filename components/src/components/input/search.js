import React, { Component } from 'react';
class Search extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('Mount');
    const savedValue = localStorage.getItem('searchVal');
    this.props.changeSearchVal(savedValue || '');
  }
  componentWillUnmount() {
    localStorage.setItem('searchVal', this.props.searchValue);
  }
  render() {
    return React.createElement('input', {
      type: 'text',
      placeholder: 'Search',
      className: 'search',
      value: this.props.searchValue,
      onChange: (event) => {
        this.props.changeSearchVal(event.target.value);
      },
    });
  }
}
export default Search;
