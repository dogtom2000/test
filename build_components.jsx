Build_11 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed" id="build-1-1">
				<div className="title">Command Module Summary</div>
					<table className="table " id="system-summary">
						<thead>
						    <tr>
						      <th>Systems</th>
						      <th></th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning">-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning">-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning">-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning">-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning">-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning">-</button></td>
						      <td>Option Information</td>
						    </tr>
						  </tbody>
						  						<thead>
						    <tr>
						      <th>Materials</th>
						      <th></th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning">-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning">-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning">-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning">-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning">-</button></td>
						      <td>Option Information</td>
						    </tr>
						  </tbody>				
						</table>	
			</div>
		)
	}
});

Build_12 = React.createClass({

	render(){
		var fuelMass = this.props.tankStats[0];
		var structureMass = this.props.tankStats[1];
		var engineMass = this.props.performance[4];
		var totalMass = fuelMass + structureMass + engineMass;
		var thrust = [this.props.performance[0], this.props.performance[1]];
		var isp = [this.props.performance[2], this.props.performance[3]];
		var TWR = [1000 * thrust[0] / (9.80665 * totalMass), 1000 * thrust[1] / (9.80665 * totalMass)]
		var deltaVBase = Math.log(totalMass / (structureMass + engineMass)) * 9.80665;
		var deltaV = [deltaVBase * isp[0], deltaVBase * isp[1]];

		return(
			<div className="col-xs-6 fixed" id="build-1-2">
				<div className="col-xs-6 fixed" id="build-1-2-L">
					<div className="title">Stage Summary</div>
						<table className="table " id="rocket-summary">
						  <thead>
						    <tr>
						      <th>Performance</th>
						      <th></th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td>Thrust</td>
						      <td>{Math.round(thrust[0]) + " (" + Math.round(thrust[1]) + ")"}</td>
						    </tr>
						    <tr>
						      <td>Isp</td>
						      <td>{Math.round(isp[0]) + " (" + Math.round(isp[1]) + ")"}</td>
						    </tr>
						    <tr>
						      <td>TWR</td>
						      <td>{Math.round(TWR[0] * 100) / 100 + " (" + Math.round(TWR[1] * 100) / 100 + ")"}</td>
						    </tr>
						    <tr>
						      <td>Delta V</td>
						      <td>{Math.round(deltaV[0]) + " (" + Math.round(deltaV[1]) + ")"}</td>
						    </tr>
						    <tr>
						      <th>Mass</th>
						      <th></th>
						    </tr>
						    <tr>
						      <td>Fuel/Oxidizer</td>
						      <td>{Math.round(fuelMass)}</td>
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
				<div className="col-xs-6 fixed" id="build-1-2-R">
					<img id="rocket-image" src={this.props.rocketType + ".png"}></img>
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
					<table className="table " id="rocket-summary">
					<thead>
					  <tr>
					    <th>Performance</th>
					    <th></th>
					  </tr>
					  </thead>
					  <tbody>
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
				<div className="title">Profile Information</div>
			</div>
		)
	}
});

Build_22 = React.createClass({	

	dropdownChange(){
		this.props.userDropdownInput(arguments[0], arguments[1], arguments[2]);
	},

	buttonChange(){
		this.props.userButtonInput(arguments[0], arguments[1], arguments[2], arguments[3]);
	},

  render() {
    return (		
		<div className="col-xs-6 fixed" id="build-2-2">
			<div className="col-xs-5 fixed">
				<div className="dropdown">
					<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown" disabled={this.props.dropdownStatus}>{this.props.selectDiameter}<span className="caret"></span></button>
					<ul className="dropdown-menu" >
						<li><a href="#" onClick={this.dropdownChange.bind(null, 0, "4MC", 4)}>4 Meter</a></li>
						<li><a href="#" onClick={this.dropdownChange.bind(null, 0, "7MS", 7)}>7 Meter</a></li>
						<li><a href="#" onClick={this.dropdownChange.bind(null, 0, "10ML", 10)}>10 Meter</a></li>
					</ul>
				</div>
				<div className="dropdown">
					<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown" disabled={this.props.dropdownStatus}>{this.props.selectFuel}<span className="caret"></span></button>
					<ul className="dropdown-menu">
						<li><a href="#" onClick={this.dropdownChange.bind(null, 1, "LH2 LOX")}>LH2 LOX</a></li>
						<li><a href="#" onClick={this.dropdownChange.bind(null, 1, "RP1 LOX")}>RP1 LOX</a></li>
						<li><a href="#" onClick={this.dropdownChange.bind(null, 1, "Aerozine 50 N2O4")}>Aerozine 50 N2O4</a></li>
						<li><a href="#" onClick={this.dropdownChange.bind(null, 1, "Solid Rocket Fuel")}>Solid Rocket Fuel</a></li>
					</ul>
				</div>
				<div className="dropdown">
					<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown" disabled={this.props.dropdownStatus}>{this.props.selectMatStruct}<span className="caret"></span></button>
					<ul className="dropdown-menu">
						<li><a href="#" onClick={this.dropdownChange.bind(null, 2, 4)}>Material 1</a></li>
						<li><a href="#" onClick={this.dropdownChange.bind(null, 2, 7)}>Material 2</a></li>
					</ul>
				</div>
				<div className="dropdown">
					<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown" disabled={this.props.dropdownStatus}>{this.props.selectMatEng}<span className="caret"></span></button>
					<ul className="dropdown-menu">
						<li><a href="#" onClick={this.dropdownChange.bind(null, 3, 4)}>Material 1</a></li>
						<li><a href="#" onClick={this.dropdownChange.bind(null, 3, 7)}>Material 2</a></li>
					</ul>
				</div>
				<div className="btn-group-vertical btn-block">
				<button type="button" className="btn btn-block btn-success" disabled={this.props.submitStatus} onClick={this.props.userSubmitStage}>Submit Stage</button>
				<button type="button" className="btn btn-block btn-danger" disabled={this.props.clearStatus} onClick={this.props.userClearStage}>Clear Stage</button>
				</div>
			</div>{/* sub column end */}
			<div className="col-xs-7 fixed">
				<table id="buildModify">
					<tbody>
						<tr>
							<td>Tank Length</td>
							<td>{this.props.tankLength + " m"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 0, 2.5, 15, 35)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 0, -2.5, 15, 35)}>-</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus}>-</button></td>
						</tr>
						<tr>
							<td>Structural Density</td>
							<td>{this.props.structuralDensity + " kg/m3"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonStatus}onClick={this.buttonChange.bind(null, 1, 5, 5, 50)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 1, -5, 5, 50)}>-</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus}>-</button></td>
						</tr>
						<tr>
							<td>Mass Flow Rate</td>
							<td>{this.props.massRate + " kg/s"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonStatus}onClick={this.buttonChange.bind(null, 2, 25, 25, 5000)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus}onClick={this.buttonChange.bind(null, 2, -25, 25, 5000)}>-</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus}>-</button></td>
						</tr>
						<tr>
							<td>Mixture Ratio</td>
							<td>{this.props.mixRatio}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 3, 0.2, 4, 7.8)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 3, -0.2, 4, 7.8)}>-</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus}>-</button></td>
						</tr>
						<tr>
							<td>Engine Pressure</td>
							<td>{this.props.enginePressure + " atm"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 4, 5, 5, 200)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 4, -5, 5, 200)}>-</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus}>-</button></td>
						</tr>
						<tr>
							<td>Nozzle Length</td>
							<td>{this.props.nozzleLength + " m"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 5, 0.5, 1, 6)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 5, -0.5, 1, 6)}>-</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus}>-</button></td>
						</tr>
					</tbody>
				</table>
			</div>{/* sub column end */}
		</div>
    )
  }
});

Build_23 = React.createClass({

	clearButtonChange(){
		this.props.userInputReset();
	},

	stageButtonChange(){
		this.props.userStageButtonInput(arguments[0]);
	},

	render(){
	return(
		<div className="col-xs-3 fixed" id="build-2-3">
			<div className="col-xs-6 fixed">
				<div className="btn-group-vertical btn-block">
				  <button type="button" className={this.props.stageButton[0][2]} onClick={this.stageButtonChange.bind(null, 0)} disabled={this.props.stageButton[0][1]}>{this.props.stageButton[0][0]}</button>
				  <button type="button" className={this.props.stageButton[1][2]} onClick={this.stageButtonChange.bind(null, 1)} disabled={this.props.stageButton[1][1]}>{this.props.stageButton[1][0]}</button>
				  <button type="button" className={this.props.stageButton[2][2]} onClick={this.stageButtonChange.bind(null, 2)} disabled={this.props.stageButton[2][1]}>{this.props.stageButton[2][0]}</button>
				  <button type="button" className={this.props.stageButton[3][2]} onClick={this.stageButtonChange.bind(null, 3)} disabled={this.props.stageButton[3][1]}>{this.props.stageButton[3][0]}</button>
				  <button type="button" className={this.props.stageButton[4][2]} onClick={this.stageButtonChange.bind(null, 4)} disabled={this.props.stageButton[4][1]}>{this.props.stageButton[4][0]}</button>
				  <button type="button" className={this.props.stageButton[5][2]} onClick={this.stageButtonChange.bind(null, 5)} disabled={this.props.stageButton[5][1]}>{this.props.stageButton[5][0]}</button>
				</div>
			</div>{/* sub column end */}
			<div className="col-xs-6 fixed">
				<div className="btn-group-vertical btn-block">
				  <button type="button" className="btn btn-block btn-success">Launch</button>
				  <button type="button" className="btn btn-block btn-danger" onClick={this.clearButtonChange}>Clear</button>
				</div>
			</div>{/* sub column end */}
		</div>
	);
	}
});


