import React, { Component } from 'react';

class Search extends Component<{
  searchValue: string;
  changeSearchVal: (searchValue: string) => void;
}> {
  constructor(props: { searchValue: string; changeSearchVal: (searchValue: string) => void }) {
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
