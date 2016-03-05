Profile22 = React.createClass({

	render(){
		return(
			<div className="col-xs-6 fixed  bot-middle">
			 	{this.props.savedDesign.map( function(u) { return u.name; } ).map((name, i) =>
             	<li key={i}><a href="#" onClick={this.props.handleBuildDesign.bind(null, name)} data-dismiss="modal">{name}</a></li>)}
			</div>
		);
	}
});