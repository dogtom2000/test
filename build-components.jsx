Build_11 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed" id="build-1-1">
				Interesting plots rocket and stage
			</div>

			)
	}
});

Build_12 = React.createClass({


	render(){
		var fuelOxMass = this.props.massData[0];
		var structureMass = this.props.massData[1];
		var engineMass = this.props.performance[4];
		var totalMass = fuelOxMass + structureMass + engineMass;
		var thrust = [this.props.performance[0], this.props.performance[1]];
		var isp = [this.props.performance[2], this.props.performance[3]];
		var TWR = [1000 * thrust[0] / (9.80665 * totalMass), 1000 * thrust[1] / (9.80665 * totalMass)]
		var deltaVBase = Math.log(totalMass / (structureMass + engineMass)) * 9.80665;
		var deltaV = [deltaVBase * isp[0], deltaVBase * isp[1]];

		return(
			<div className="col-xs-6 fixed" id="build-1-2">
					<div className="col-xs-6 fixed" id="b12l">
					<div className="title">Stage Summary</div>

					<table className="table " id="stage-summary">
					<thead>
					  <tr>
					    <th>Performance</th>
					    <th></th>
					  </tr>
					  </thead>
					  <tbody>
					  <tr>
					    <td>Thrust</td>
					    <td>{Math.round(thrust[0]) + "  (" + Math.round(thrust[1]) + ")"}</td>
					  </tr>
					  <tr>
					    <td>Isp</td>
					    <td>{Math.round(isp[0]) + "  (" + Math.round(isp[1]) + ")"}</td>
					  </tr>
					  <tr>
					    <td>TWR</td>
					    <td>{Math.round(TWR[0] * 100) / 100 + "  (" + Math.round(TWR[1] * 100) / 100 + ")"}</td>
					  </tr>
					  <tr>
					    <td>Delta V</td>
					    <td>{Math.round(deltaV[0]) + "  (" + Math.round(deltaV[1]) + ")"}</td>
					  </tr>
					  <tr>
					    <th>Mass</th>
					    <th></th>
					  </tr>
					  <tr>
					    <td>Systems</td> 
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Fuel/Oxidizer</td>
					    <td>{Math.round(fuelOxMass)}</td>
					  </tr>
					  <tr>
					    <td>Engine</td>
					    <td>{Math.round(engineMass)}</td>
					  </tr>
					  <tr>
					    <td>Structure</td>
					    <td>{Math.round(structureMass)}</td>
					  </tr>
					  <tr>
					    <td>Total</td>
					    <td>{Math.round(totalMass)}</td>
					  </tr>
					  </tbody>
					  <thead>
					  <tr>
					 <th>Reliability</th>
					 <th></th>
					 </tr>
					 </thead>
					 <tbody>		  
					  <tr>
					    <td>Systems</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Fuel/Oxidizer</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Engine</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Structure</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Total</td>
					    <td>100</td>
					    </tr>
					    </tbody>
					    <thead>
					    <tr>
					  <th>Cost</th>
					  <th></th>
					  </tr>
					  </thead>
					  <tbody>
					  <tr>
					    <td>Systems</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Fuel/Oxidizer</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Engine</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Structure</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Total</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td></td>
					    <td></td>
					  </tr>
					  </tbody>
					</table>

					</div>
					<div className="col-xs-6 fixed" id="b12r">
						<canvas id="rocket-canvas" width="234" height="640"></canvas>
					</div>


			</div>
		)
	}
});

Build_13 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed" id="build-1-3">
					<div className="title">Rocket Summary</div>
					<table className="table " id="stage-summary">
					<thead>
					  <tr>
					    <th>Performance</th>
					    <th></th>
					  </tr>
					  </thead>
					  <tbody>
					  <tr>
					    <td>Thrust</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Isp</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>TWR</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Delta V</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <th>Mass</th>
					    <th></th>
					  </tr>
					  <tr>
					    <td>Systems</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Fuel/Oxidizer</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Engine</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Structure</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Total</td>
					    <td>100</td>
					  </tr>
					  </tbody>
					  <thead>
					  <tr>
					 <th>Reliability</th>
					 <th></th>
					 </tr>
					 </thead>
					 <tbody>		  
					  <tr>
					    <td>Systems</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Fuel/Oxidizer</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Engine</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Structure</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Total</td>
					    <td>100</td>
					    </tr>
					    </tbody>
					    <thead>
					    <tr>
					  <th>Cost</th>
					  <th></th>
					  </tr>
					  </thead>
					  <tbody>
					  <tr>
					    <td>Systems</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Fuel/Oxidizer</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Engine</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Structure</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td>Total</td>
					    <td>100</td>
					  </tr>
					  <tr>
					    <td></td>
					    <td></td>
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
				player profile: research, money, experience, etc.
			</div>
		)
	}
});

Build_22 = React.createClass({	

	handleDropdown(){
		this.props.onUserSelect(arguments[0], arguments[1]);
	},

	handleChange(){

		this.props.onUserInput(arguments[0], arguments[1], arguments[2], arguments[3]);

	},

  render() {
    return (		
			<div className="col-xs-6 fixed" id="build-2-2">
				<div className="col-xs-5 fixed" id="build-dropdown">
					<div className="dropdown">
						<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown" >{this.props.selectDiameter}<span className="caret"></span></button>
						<ul className="dropdown-menu" >
							<li><a href="#" onClick={this.handleDropdown.bind(null, 0, 4)}>4 Meter</a></li>
							<li><a href="#" onClick={this.handleDropdown.bind(null, 0, 7)}>7 Meter</a></li>
    						<li><a href="#" onClick={this.handleDropdown.bind(null, 0, 10)}>10 Meter</a></li>
						</ul>
					</div>
					<div className="dropdown">
						<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.props.selectFuel}<span className="caret"></span></button>
						<ul className="dropdown-menu">
							<li><a href="#" onClick={this.handleDropdown.bind(null, 1, 4)}>LOX LH2</a></li>
							<li><a href="#" onClick={this.handleDropdown.bind(null, 1, 7)}>Other</a></li>
						</ul>
					</div>
					<div className="dropdown">
						<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.props.selectMatStruct}<span className="caret"></span></button>
						<ul className="dropdown-menu">
							<li><a href="#" onClick={this.handleDropdown.bind(null, 2, 4)}>Material 1</a></li>
							<li><a href="#" onClick={this.handleDropdown.bind(null, 2, 7)}>Material 2</a></li>
						</ul>
					</div>
					<div className="dropdown">
						<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.props.SelectMatEng}<span className="caret"></span></button>
						<ul className="dropdown-menu">
							<li><a href="#" onClick={this.handleDropdown.bind(null, 3, 4)}>Material 1</a></li>
							<li><a href="#" onClick={this.handleDropdown.bind(null, 3, 7)}>Material 2</a></li>
						</ul>
					</div>
				</div>{/* sub column end */}
				<div className="col-xs-7 fixed" id="build-control">
					<table id="buildModify">
						<tbody>
							<tr>
								<td>Tank Length</td>
								<td>{this.props.tankLength + " m"}</td> 
								<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonDisable} onClick={this.handleChange.bind(null, 0, 2.5, 15, 35)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonDisable} onClick={this.handleChange.bind(null, 0, -2.5, 15, 35)}>-</button></td>
								<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonDisable}>-</button></td>
							</tr>
							<tr>
								<td>Structural Density</td>
								<td>{this.props.structuralDensity + " kg/m3"}</td> 
								<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonDisable}onClick={this.handleChange.bind(null, 1, 5, 5, 50)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonDisable} onClick={this.handleChange.bind(null, 1, -5, 5, 50)}>-</button></td>
								<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonDisable}>-</button></td>
							</tr>
							<tr>
								<td>Mass Flow Rate</td>
								<td>{this.props.massRate + " kg/s"}</td> 
								<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonDisable}onClick={this.handleChange.bind(null, 2, 25, 25, 5000)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonDisable}onClick={this.handleChange.bind(null, 2, -25, 25, 5000)}>-</button></td>
								<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonDisable}>-</button></td>
							</tr>
							<tr>
								<td>Fuel Mixture Ratio</td>
								<td>{this.props.mixRatio}</td> 
								<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonDisable} onClick={this.handleChange.bind(null, 3, 0.2, 4, 7.8)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonDisable} onClick={this.handleChange.bind(null, 3, -0.2, 4, 7.8)}>-</button></td>
								<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonDisable}>-</button></td>
							</tr>
							<tr>
								<td>Engine Pressure</td>
								<td>{this.props.enginePressure + " atm"}</td> 
								<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonDisable} onClick={this.handleChange.bind(null, 4, 5, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonDisable} onClick={this.handleChange.bind(null, 4, -5, 5, 200)}>-</button></td>
								<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonDisable}>-</button></td>
							</tr>
							<tr>
								<td>Nozzle Length</td>
								<td>{this.props.nozzleLength + " m"}</td> 
								<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonDisable} onClick={this.handleChange.bind(null, 5, 0.5, 1, 6)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonDisable} onClick={this.handleChange.bind(null, 5, -0.5, 1, 6)}>-</button></td>
								<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonDisable}>-</button></td>
							</tr>
						</tbody>
					</table>
				</div>{/* sub column end */}
			</div>
    );
  }
});

Build_23 = React.createClass({

	handleChange(){
		this.props.onUserReset();
	},

	render(){
	return(
		<div className="col-xs-3 fixed" id="build-2-3">
			<div className="col-xs-6 fixed">
				<div className="btn-group-vertical btn-block">
				  <button type="button" className="btn btn-block btn-primary">Stage 1</button>
				  <button type="button" className="btn btn-block btn-primary">Stage 2</button>
				  <button type="button" className="btn btn-block btn-primary">Stage 3</button>
				  <button type="button" className="btn btn-block btn-primary">Stage 4</button>
				  <button type="button" className="btn btn-block btn-primary">Stage 5</button>
				  <button type="button" className="btn btn-block btn-primary">Stage 6</button>
				</div>
			</div>{/* sub column end */}
			<div className="col-xs-6 fixed">
				<div className="btn-group-vertical btn-block">
				  <button type="button" className="btn btn-block btn-success">Launch</button>
				  <button type="button" className="btn btn-block btn-danger" onClick={this.handleChange}>Clear</button>
				</div>
			</div>{/* sub column end */}
		</div>
	);
	}
});