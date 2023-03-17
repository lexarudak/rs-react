import React from 'react';
class CardButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("button", { className: "card-button", disabled: this.props.stock <= 0 }, "To card"));
    }
}
export default CardButton;
