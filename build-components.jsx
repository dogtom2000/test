Build_11 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed" id="build-1-1">
				Plots, maybe bar graphs of some cool things? maybe optional plots or something
			</div>

			)
	}
});

Build_12 = React.createClass({

	render(){
		return(
			<div className="col-xs-6 fixed" id="build-1-2">
				Graphical stage preview and reliability analysis, could just show total mass, maybe show individual masses on this pane, give room for econ to the left
			</div>
		)
	}
});

Build_13 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed" id="build-1-3">
				<table className="table table-bordered table-responsive text-center" id="buildPreview">
				    <thead>
				      <tr>
				        <th>Mass Summary</th>
				        <th>Stage</th>
				        <th>Rocket</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td>Tank Mass</td>
				        <td>{this.props.tankMass}</td>
				        <td>100</td>
				      </tr>
				      <tr>
				        <td>Engine Mass</td>
				        <td>{this.props.engineMass}</td>
				        <td>100</td>
				      </tr>
				      <tr>
				        <td>Fuel Mass</td>
				        <td>{this.props.fuelMass}</td>
				        <td>100</td>
				      </tr>
				      <tr>
				        <td>Total Mass</td>
				        <td>{this.props.totalMass}</td>
				        <td>100</td>
				      </tr>
				    </tbody>
				  </table>

				  <table className="table table-bordered table-responsive text-center" id="buildPreview">
				    <thead>
				      <tr>
				        <th>Engine Summary</th>
				        <th>Stage</th>
				        <th>Rocket</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td>Thrust [kN] (atm)</td>
				        <td>100  (100)</td>
				        <td>100  (100)</td>
				      </tr>
				      <tr>
				        <td>Isp [s] (atm)</td>
				        <td>100  (100)</td>
				        <td>100  (100)</td>
				      </tr>
				      <tr>
				        <td>TWR (atm)</td>
				        <td>100  (100)</td>
				        <td>100  (100)</td>
				      </tr>
				      <tr>
				        <td>Delta V [km/s] (atm)</td>
				        <td>100  (100)</td>
				        <td>100  (100)</td>
				      </tr>
				    </tbody>
				  </table>
			</div>
		)
	}
});

Build_21 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed" id="build-2-1">
				Economics, experience, player profilish stuff, could potenitally lose this section
			</div>
		)
	}
});

Build_22 = React.createClass({	

	handleChange(){

		this.props.onUserInput(arguments[0], arguments[1], arguments[2], arguments[3]);

	},

  render() {
    return (		
			<div className="col-xs-6 fixed" id="build-2-2">
				<div className="col-xs-5 fixed" id="build-dropdown">
					<Dropdown subclass={"btn btn-block btn-primary dropdown-toggle"} subid={[]} maintext={"Stage Diameter"} subtext={["4 Meter", "7 Meter", "10 Meter"]}/>
					<Dropdown subclass={"btn btn-block btn-primary dropdown-toggle"} subid={[]} maintext={"Fuel Type"} subtext={["LOX / H2", "OX / FL"]}/>
					<Dropdown subclass={"btn btn-block btn-block btn-primary dropdown-toggle"} subid={[]} maintext={"Tank Material"} subtext={["Material 1", "Material 2"]}/>
					<Dropdown subclass={"btn btn-block btn-primary dropdown-toggle"} subid={[]} maintext={"Engine Material"} subtext={["Material 1", "Material 2"]}/>
				</div>{/* sub column end */}
				<div className="col-xs-7 fixed" id="build-control">
					<table id="buildModify">
						<tbody>
							<tr>
								<td>Fuel Tank Length</td>
								<td>{this.props.tankLength + " m"}</td> 
								<td><button type="button" className="btn btn-block btn-success" onClick={this.handleChange.bind(null, 0, 1, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" onClick={this.handleChange.bind(null, 0, -1, 5, 200)}>-</button></td>
							</tr>
							<tr>
								<td>Wall Thickness</td>
								<td>{this.props.wallThickness + " m"}</td> 
								<td><button type="button" className="btn btn-block btn-success" onClick={this.handleChange.bind(null, 1, 2, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" onClick={this.handleChange.bind(null, 1, -2, 5, 200)}>-</button></td>
							</tr>
							<tr>
								<td>Fuel Mass Rate</td>
								<td>{this.props.fuelRate + " kg/s"}</td> 
								<td><button type="button" className="btn btn-block btn-success" onClick={this.handleChange.bind(null, 2, 3, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" onClick={this.handleChange.bind(null, 2, -3, 5, 200)}>-</button></td>
							</tr>
							<tr>
								<td>Fuel Ratio</td>
								<td>{this.props.mixRatio}</td> 
								<td><button type="button" className="btn btn-block btn-success" onClick={this.handleChange.bind(null, 3, 4, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" onClick={this.handleChange.bind(null, 3, -4, 5, 200)}>-</button></td>
							</tr>
							<tr>
								<td>Engine Pressure</td>
								<td>{this.props.enginePressure + " atm"}</td> 
								<td><button type="button" className="btn btn-block btn-success" onClick={this.handleChange.bind(null, 4, 5, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" onClick={this.handleChange.bind(null, 4, -5, 5, 200)}>-</button></td>
							</tr>
							<tr>
								<td>Nozzle Length</td>
								<td>{this.props.nozzleLength + " m"}</td> 
								<td><button type="button" className="btn btn-block btn-success" onClick={this.handleChange.bind(null, 5, 6, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" onClick={this.handleChange.bind(null, 5, -6, 5, 200)}>-</button></td>
							</tr>
						</tbody>
					</table>
				</div>{/* sub column end */}
			</div>
    );
  }
});

Build_23 = React.createClass({

	render(){
	return(
		<div className="col-xs-3 fixed" id="build-2-3">
			<div className="col-xs-6 fixed">
				<Buttons divclass={"btn-group-vertical btn-block"} subclass={"btn btn-block btn-primary"} subid={["build-stage-1", "build-stage-2", "build-stage-2", "build-stage-4", "build-stage-5", "build-stage-6", "build-stage-1"]} subtext={["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5", "Stage 6"]}/>
			</div>{/* sub column end */}
			<div className="col-xs-6 fixed">
				<div className="btn-group-vertical btn-block">
				  <button type="button" className="btn btn-block btn-success">Launch</button>
				  <button type="button" className="btn btn-block btn-danger">Clear</button>
				</div>
			</div>{/* sub column end */}
		</div>
	);
	}
});