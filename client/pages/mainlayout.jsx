MainLayout = React.createClass({

	render() {

	return (
		<div className="container-fluid">
			<Header />
			<main>{this.props.content}</main>
		</div>
		);
	}
});

