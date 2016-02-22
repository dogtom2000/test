var navBarStyle = {
	color: 'green',
	background: 'black'
}

var headerTextColor = {
	color: 'green'
}

	Header = React.createClass({

	render() {
	return (

		<header className='navbar' style={navBarStyle}>
		<ul className="nav navbar-nav">
			<li className="navbar-brand">Header</li>
			<li><a href="/" style={headerTextColor}>Home</a></li>
			<li><a href="/build" style={headerTextColor}>Build Page</a></li>
			<li><a href="/launch">Launch Page</a></li>

			<li><LoginButtons align='left' /></li>
		</ul>
		</header>
		);
	}
});