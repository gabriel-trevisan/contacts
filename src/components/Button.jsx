import React from 'react';

class Button extends React.Component{

    handleClick = (name, order, asc) => {
        this.props.handleOrder(name, order, !asc);
	}

    render() {
        const { name, order, asc, selected} = this.props;
        return(
            <button 
                onClick={() => this.handleClick(name, order, asc)}
                className={`filters__item ${selected ? "is-selected" : ""}`}
            >
                {name} 
                {selected && <i className={`fas ${asc ? "fa-sort-down" : "fa-sort-up"}`}/>}
            </button>
       )
    }
}

export default Button;