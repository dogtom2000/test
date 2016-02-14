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
					    <td>{Math.round(this.props.performance[0]) + " (" + Math.round(this.props.performance[1]) + ")"}</td>
					  </tr>
					  <tr>
					    <td>Isp</td>
					    <td>{Math.round(this.props.performance[2]) + " (" + Math.round(this.props.performance[3]) + ")"}</td>
					  </tr>
					  <tr>
					    <td>TWR</td>
					    <td>{Math.round(this.props.performance[4]) + " (" + Math.round(this.props.performance[5]) + ")"}</td>
					  </tr>
					  <tr>
					    <td>Delta V</td>
					    <td></td>
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
					    <td>Fuel</td>
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
					    <td>Fuel</td>
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
					    <td>Fuel</td>
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
					    <td>Fuel</td>
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
					    <td>Fuel</td>
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
					    <td>Fuel</td>
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
								<td><button type="button" className="btn btn-block btn-success" onClick={this.handleChange.bind(null, 0, 2.5, 15, 35)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" onClick={this.handleChange.bind(null, 0, -2.5, 15, 35)}>-</button></td>
								<td><button type="button" className="btn btn-block btn-danger">-</button></td>
							</tr>
							<tr>
								<td>Wall Thickness</td>
								<td>{this.props.wallThickness + " mm"}</td> 
								<td><button type="button" className="btn btn-block btn-success" onClick={this.handleChange.bind(null, 1, 0.5, 1, 10)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" onClick={this.handleChange.bind(null, 1, -0.5, 1, 10)}>-</button></td>
								<td><button type="button" className="btn btn-block btn-danger">-</button></td>
							</tr>
							<tr>
								<td>Mass Flow Rate</td>
								<td>{this.props.fuelRate + " kg/s"}</td> 
								<td><button type="button" className="btn btn-block btn-success" onClick={this.handleChange.bind(null, 2, 25, 25, 5000)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" onClick={this.handleChange.bind(null, 2, -25, 25, 5000)}>-</button></td>
								<td><button type="button" className="btn btn-block btn-danger">-</button></td>
							</tr>
							<tr>
								<td>Fuel Ratio</td>
								<td>{this.props.mixRatio}</td> 
								<td><button type="button" className="btn btn-block btn-success" onClick={this.handleChange.bind(null, 3, 0.2, 4, 7.8)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" onClick={this.handleChange.bind(null, 3, -0.2, 4, 7.8)}>-</button></td>
								<td><button type="button" className="btn btn-block btn-danger">-</button></td>
							</tr>
							<tr>
								<td>Engine Pressure</td>
								<td>{this.props.enginePressure + " atm"}</td> 
								<td><button type="button" className="btn btn-block btn-success" onClick={this.handleChange.bind(null, 4, 5, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" onClick={this.handleChange.bind(null, 4, -5, 5, 200)}>-</button></td>
								<td><button type="button" className="btn btn-block btn-danger">-</button></td>
							</tr>
							<tr>
								<td>Nozzle Length</td>
								<td>{this.props.nozzleLength + " m"}</td> 
								<td><button type="button" className="btn btn-block btn-success" onClick={this.handleChange.bind(null, 5, 0.5, 1, 6)}>+</button></td>
								<td><button type="button" className="btn btn-block btn-danger" onClick={this.handleChange.bind(null, 5, -0.5, 1, 6)}>-</button></td>
								<td><button type="button" className="btn btn-block btn-danger">-</button></td>
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