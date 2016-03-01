Launch_11 = React.createClass({

	render(){
		return(
			<div className="col-xs-12 fixed top-middle">
				<div id="launchDisplay"></div>

			</div>
		);
	}
});

Launch_21 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed bot-side">
				<div id="chart2"></div>
				<div id="chart3"></div>
				<div id="chart4"></div>
			</div>
		);
	}
});

Launch_22 = React.createClass({

	render(){
		var stages = this.props.Rocket.stages
		return(
		<div className="col-xs-6 fixed bot-middle">
		<ul>
				{Object.keys(stages).map((value, i) => <li key={i}>Stage {i + 1}: {Math.round(stages[value][0][0])} / {Math.round(stages[value][0][1])}</li>)}
		</ul>
		</div>
		);
	}
});

Launch_23 = React.createClass({

	render(){
		return(
		<div className="col-xs-3 fixed bot-side">
		<div className="col-xs-2 fixed">
			</div>
				<div className="col-xs-8 fixed">
				  <button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#loadModal">Load Rocket</button>
				<div id="loadModal" className="modal fade" role="dialog">
				  <div className="modal-dialog">
				    <div className="modal-content modalStyle">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title">Modal Header</h4>
				      </div>
				      <div className="modal-body">
					    <div className="list-group">    
				      	{Vehicle.find().fetch().map( function(u) { return u.name; } ).map((name, i) => <li key={i}><a href="#" onClick={this.props.handleSelectRocket.bind(null, name) } data-dismiss="modal">{name}</a></li>)}
				      	</div>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>
		<br></br>
		<button type="button" className="btn btn-block buttonStyle" onClick={this.props.displayPlot}>Launch</button>
		<br></br>
		<button type="button" className="btn btn-block buttonStyle" onClick={this.props.displayOrbit}>View Orbit</button>
		<br></br>
		 <button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#deleteModal">Delete Rocket</button>
				<div id="deleteModal" className="modal fade" role="dialog">
				  <div className="modal-dialog">
				    <div className="modal-content modalStyle">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title">Modal Header</h4>
				      </div>
				      <div className="modal-body">
					    <div className="list-group">    
				      	{Vehicle.find().fetch().map( function(u) { return u._id; } ).map((id, i) => <li key={i}><a href="#" onClick={this.props.handleRemoveVehicle.bind(null, id) } data-dismiss="modal">{Vehicle.findOne({_id: id}).name}</a></li>)}
				      	</div>
				      </div>
				      <div className="modal-footer">

				        <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>
				</div>	
			<div className="col-xs-2 fixed">
			</div>
			</div>
		);
	}
});
