Launch_11 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed" id="build-1-1">
				
			</div>
		);
	}
});

Launch_12 = React.createClass({

	render(){
		return(
			<div className="col-xs-6 fixed" id="build-1-2">
				<div id="chart"></div>
				
			</div>
		);
	}
});

Launch_13 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed" id="build-1-3">
					
			</div>
		);
	}
});

Launch_21 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed" id="build-2-1">

			</div>
		);
	}
});

Launch_22 = React.createClass({

	render(){
		return(
		<div className="col-xs-6 fixed" id="build-2-2">
			<button type="button" className="btn btn-block btn-warning" onClick={this.props.displayPlot}>Add Payload</button>
		</div>
		);
	}
});

Launch_23 = React.createClass({

	render(){
		return(
		<div className="col-xs-3 fixed" id="build-2-3">
			
		</div>
		);
	}
});
