import React from 'react';
class CardStock extends React.Component {
    constructor(props) {
        super(props);
    }
    setStock() {
        const stock = Math.floor(this.props.stock);
        if (stock > 1000)
            return React.createElement("div", { className: "card__stock" }, "more than 1000 in stock");
        if (stock > 0)
            return React.createElement("div", { className: "card__stock" },
                "in stock: ",
                stock);
        return React.createElement("div", { className: "card__stock card__stock_null" }, "not in stock");
    }
    render() {
        return React.createElement(React.Fragment, null, this.setStock());
    }
}
export default CardStock;
