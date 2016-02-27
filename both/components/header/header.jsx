var navBarStyle = {
	color: 'green',
	background: 'black'
}

Header = React.createClass({

	render() {
	return (

		<header className='navbar' style={navBarStyle}>
			<ul className="nav navbar-nav">
				<li><a href="/" className="navbar-brand" style={navBarStyle}>Orbital Command</a></li>
				<li><a href="/build" 	style={navBarStyle}>Design</a></li>
				<li><a href="/launch"	style={navBarStyle}>Flight Control</a></li>
				<li><Login /></li>
			</ul>
		</header>
		);
	}
});