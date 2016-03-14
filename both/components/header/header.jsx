var navBarStyle = {
	color: 'green',
	background: 'black'
}

Header = React.createClass({

	render() {
	return (

		<header className='navbar' style={navBarStyle}>
			<ul className="nav navbar-nav">
				<li><a href="/" className="navbar-brand" style={navBarStyle}>True Anomaly</a></li>
				<li><a href="/profile" 	style={navBarStyle}>Profile</a></li>
				<li><a href="/design" 	style={navBarStyle}>Design</a></li>
				<li><a href="/flight"	style={navBarStyle}>Flight Control</a></li>
				<li><a href="/system"	style={navBarStyle}>Solar System</a></li>
				<li><Login /></li>
			</ul>
		</header>
		);
	}
});