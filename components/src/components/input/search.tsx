import { MainState } from 'base/types';
import React, { Component } from 'react';

class Search extends Component<MainState> {
  constructor(props: MainState) {
    super(props);
  }

  public setLocalStorage() {
    localStorage.setItem('searchVal', this.props.searchValue);
  }

  public componentDidMount() {
    this.props.changeSearchVal(localStorage.getItem('searchVal') || '');
    window.addEventListener('beforeunload', this.setLocalStorage, { once: true });
  }

  public componentWillUnmount() {
    this.setLocalStorage();
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
