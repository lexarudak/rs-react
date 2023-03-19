import { MainState } from 'base/types';
import React, { Component } from 'react';

class Search extends Component<MainState> {
  constructor(props: MainState) {
    super(props);
  }

  public componentDidMount() {
    console.log('Mount');
    const savedValue = localStorage.getItem('searchVal');
    this.props.changeSearchVal(savedValue || '');
  }

  public componentWillUnmount() {
    localStorage.setItem('searchVal', this.props.searchValue);
  }

  render() {
    return (
      <input
        type={'text'}
        placeholder={'Search'}
        className="search"
        value={this.props.searchValue}
        onChange={(event) => {
          this.props.changeSearchVal(event.target.value);
        }}
      ></input>
    );
  }
}

export default Search;
