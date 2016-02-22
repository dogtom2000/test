MainLayout = React.createClass({

	render() {
		console.log(this.props.content)
	return (
		<div className="container-fluid">
			<Header />
			<main>{this.props.content}</main>
		</div>
		);
	}
});

