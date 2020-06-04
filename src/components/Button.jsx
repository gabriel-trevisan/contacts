import React from 'react';

class Button extends React.Component{

    handleClick = (name, order) => {
		this.props.handleOrder(name, order);
	}

    render() {
        return(
            <button 
                onClick={() => this.handleClick(this.props.name, this.props.order)}
                className={`filters__item ${this.props.selected ? "is-selected" : ""}`}
            >
                {this.props.name} <i className="fas fa-sort-down" />
            </button>
       )
    }

}

export default Button;