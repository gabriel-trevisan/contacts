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
				{name: "Data de admissão", order: "admissionDate"}
			],
			order: '',
			asc: true
		}
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		});
		this.props.handleFilter(event.target.value);
	}

	handleOrder = (name, order, asc) => {
		this.setState({
			selected: name,
			order: order,
			asc: asc
		})
		this.props.handleOrder(order, asc);
	}

	render() {

		const { buttons, value, selected, asc } = this.state;

		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
					<input type="text" 
						className="filters__search__input" 
						placeholder="Pesquisar"
						value={value}
						onChange={this.handleChange} 
					/>
					<button className="filters__search__icon">
						<i className="fa fa-search"/>
					</button>
					</div>

					{buttons.map((button, index) => (
						<Button
							name={button.name}
							key={index}
							handleOrder={this.handleOrder}
							selected={selected === button.name}
							order={button.order}
							asc={asc && selected === button.name}
						/>
					))}

				</section>
			</div>
		);
	}
}

export default Filters;
