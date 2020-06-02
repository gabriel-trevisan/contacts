import React from 'react';

class Topbar extends React.Component {
	render() {
		return (
			<header className="topbar" data-testid="topbar">
				<div className="container">
					<a href="/" className="topbar__logo">
						{this.props.children}
					</a>
				</div>
			</header>
		);
	}
}

export default Topbar;
