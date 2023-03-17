import Search from '../components/input/search';
import React from 'react';
import Page from './page';
import CardsContainer from '../components/cards/cardContainer/cardsContainer';
class MainPage extends Page {
    state;
    constructor(props) {
        super(props, "Home" /* PageNames.mainPage */);
        this.state = {
            search: '',
        };
        this.changeSearchVal = this.changeSearchVal.bind(this);
    }
    componentDidUpdate() {
        localStorage.setItem('searchVal', this.state.search);
    }
    changeSearchVal(searchVal) {
        this.setState({ search: searchVal });
    }
    render() {
        return (React.createElement("div", { className: "main__container" },
            React.createElement(Search, { searchValue: this.state.search, changeSearchVal: this.changeSearchVal }),
            React.createElement(CardsContainer, { searchValue: this.state.search })));
    }
}
export default MainPage;
