import { MainState } from 'base/types';
import React, { Component } from 'react';

class Search extends Component<MainState> {
  constructor(props: MainState) {
    super(props);
  }

  public componentDidMount() {
    const savedValue = localStorage.getItem('searchVal');
    this.props.changeSearchVal(savedValue || '');
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
