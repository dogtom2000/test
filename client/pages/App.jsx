App = React.createClass({

	render() {

	return (
		<div className="app-container">
			<Header />
			<div className="main-container">
				{this.props.content}
			</div>
		</div>
		);
	}
});

if (Meteor.isClient) {
  Meteor.subscribe("design");
  Meteor.subscribe("vehicle");
}


