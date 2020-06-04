import React from 'react';
import Button from './Button';

class Filters extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			value: '',
			selected: '',
			buttons: [
				{name: "Nome", order: "name"},
				{name: "País", order: "country"},
				{name: "Empresa", order: "company"},
				{name: "Departamento", order: "department"},
				{name: "Data de admissão", order: "admission"}
			],
			order: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		});
		this.props.handleFilter(event.target.value);
	}

	handleOrder = (name, order) => {
		this.setState({
			selected: name,
			order: order
		})
		this.props.handleOrder(order);
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

					{this.state.buttons.map((button, index) => (
						<Button
							id={button.id}
							name={button.name}
							key={index}
							handleOrder={this.handleOrder}
							selected={this.state.selected === button.name}
							order={button.order}
						/>
					))}

				</section>
			</div>
		);
	}
}

export default Filters;
