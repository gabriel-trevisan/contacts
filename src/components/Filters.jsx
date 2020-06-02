import React from 'react';

class Filters extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			value: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		});
		this.props.handleFilter(event.target.value);
	}

	render() {
		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
					<input type="text" 
						className="filters__search__input" 
						placeholder="Pesquisar"
						value={this.state.value}
						onChange={this.handleChange} 
					/>
					<button className="filters__search__icon">
						<i className="fa fa-search"/>
					</button>
					</div>

					<button className="filters__item is-selected">
					Nome <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item">
					País <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item">
					Empresa <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item">
					Departamento <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item">
					Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
