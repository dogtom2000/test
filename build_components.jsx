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

		rocketSummaryArray = rocketSummary(this.props.stageCurrent, this.props.performance, this.props.tankStats, this.props.engineCount, this.props.selectFuel, this.props.enginePressure, this.props.tankDiameter, this.props.tankLength, this.props.structuralDensity);
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
						      <td>Thrust [mN]</td>
						      <td>{Math.round(rocketSummaryArray[0][0]) / 1000 + " (" + Math.round(rocketSummaryArray[0][1]) / 1000 + ")"}</td>
						    </tr>
						    <tr>
						      <td>Isp [s]</td>
						      <td>{Math.round(rocketSummaryArray[1][0]) + " (" + Math.round(rocketSummaryArray[1][1]) + ")"}</td>
						    </tr>
						    <tr>
						      <td>TWR</td>
						      <td>{Math.round(rocketSummaryArray[2][0] * 100) / 100 + " (" + Math.round(rocketSummaryArray[2][1] * 100) / 100 + ")"}</td>
						    </tr>
						    <tr>
						      <td>Delta V [m/s]</td>
						      <td>{Math.round(rocketSummaryArray[3][0]) + " (" + Math.round(rocketSummaryArray[3][1]) + ")"}</td>
						    </tr>
						    <tr>
						      <th>Mass</th>
						      <th></th>
						    </tr>
						    <tr>
						      <td>Fuel/Oxidizer [ton]</td>
						      <td>{Math.round(rocketSummaryArray[4]/10)/100}</td>
						    </tr>
						    <tr>
						      <td>Engine [ton]</td>
						      <td>{Math.round(rocketSummaryArray[5]/10)/100}</td>
						    </tr>
						    <tr>
						      <td>Structure [ton]</td>
						      <td>{Math.round(rocketSummaryArray[6]/10)/100}</td>
						    </tr>
						    <tr>
						      <td>Total [ton]</td>
						      <td>{Math.round(rocketSummaryArray[7]/10)/100}</td>
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
					    <td>Delta V [m/s]</td>
					    <td>{Math.round(rocketSummaryArray[8][0]) + " (" + Math.round(rocketSummaryArray[8][1]) + ")"}</td>
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
					    <td>Fuel/Oxidizer [ton]</td>
					    <td>{Math.round(rocketSummaryArray[9]/10)/100}</td>
					  </tr>
					  <tr>
					    <td>Engine [ton]</td>
					    <td>{Math.round(rocketSummaryArray[10]/10)/100}</td>
					  </tr>
					  <tr>
					    <td>Structure [ton]</td>
					    <td>{Math.round(rocketSummaryArray[11]/10)/100}</td>
					  </tr>
					  <tr>
					    <td>Total [ton]</td>
					    <td>{Math.round(rocketSummaryArray[12]/10)/100}</td>
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
		this.props.userButtonInput(arguments[0], arguments[1]);
	},

  render() {
    return (		
		<div className="col-xs-6 fixed" id="build-2-2">
			<div className="col-xs-5 fixed">
				<div className="dropdown">
					<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown" disabled={this.props.rocketTypeStatus}>{this.props.selectRocketClass}<span className="caret"></span></button>
					<ul className="dropdown-menu">
						<li><a href="#" onClick={this.dropdownChange.bind(null, 3, "Sounding Rocket")}>Sounding Rockets</a></li>
						<li><a href="#" onClick={this.dropdownChange.bind(null, 3, "Manned Rocket")}>Manned Rockets</a></li>
					</ul>
				</div>
				
				<RocketClass classId={this.props.selectRocketClass} dropdownChange={this.dropdownChange} dropdownStatus={this.props.dropdownStatus} selectDiameter={this.props.selectDiameter} />

				<div className="dropdown">
					<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown" disabled={this.props.dropdownStatus}>Engine Count: {this.props.selectEngineCount}<span className="caret"></span></button>
					<ul className="dropdown-menu">
						<li><a href="#" onClick={this.dropdownChange.bind(null, 2, 1)}>1 Engines</a></li>
						<li><a href="#" onClick={this.dropdownChange.bind(null, 2, 2)}>2 Engines</a></li>
						<li><a href="#" onClick={this.dropdownChange.bind(null, 2, 3)}>3 Engines</a></li>
						<li><a href="#" onClick={this.dropdownChange.bind(null, 2, 4)}>4 Engines</a></li>
						<li><a href="#" onClick={this.dropdownChange.bind(null, 2, 5)}>5 Engines</a></li>
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
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 0, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 0, -1, 15, 35)}>-</button></td>
							
						</tr>
						<tr>
							<td>Structural Density</td>
							<td>{this.props.structuralDensity + " kg/m3"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonStatus}onClick={this.buttonChange.bind(null, 1, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 1, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Mass Flow Rate</td>
							<td>{this.props.massRate + " kg/s"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonStatus}onClick={this.buttonChange.bind(null, 2, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus}onClick={this.buttonChange.bind(null, 2, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Mixture Ratio</td>
							<td>{this.props.mixRatio}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 3, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 3, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Engine Pressure</td>
							<td>{this.props.enginePressure + " atm"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 4, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 4, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Nozzle Length</td>
							<td>{this.props.nozzleLength + " m"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 5, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.buttonStatus} onClick={this.buttonChange.bind(null, 5, -1)}>-</button></td>
							
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


RocketClass = React.createClass({

	userSelectRocketClass(classId){
		switch(classId){
					case "Rocket Class":

			var list = <ul className="dropdown-menu">
					<li><a href="#"></a></li>
				</ul>
				return list
				break;
			case "Sounding Rocket":

			var list = <ul className="dropdown-menu">
					<li><a href="#" onClick={this.props.dropdownChange.bind(null, 0, "QM", 0.25)}>0.25 Meter</a></li>
					<li><a href="#" onClick={this.props.dropdownChange.bind(null, 0, "HM", 0.5)}>0.50 Meter</a></li>
					<li><a href="#" onClick={this.props.dropdownChange.bind(null, 0, "FM", 1)}>1.00 Meter</a></li>
				</ul>
				return list
				break;
			case "Manned Rocket":

			var list = <ul className="dropdown-menu">
					<li><a href="#" onClick={this.props.dropdownChange.bind(null, 0, "4MC", 4)}>4 Meter</a></li>
					<li><a href="#" onClick={this.props.dropdownChange.bind(null, 0, "7MS", 7)}>7 Meter</a></li>
					<li><a href="#" onClick={this.props.dropdownChange.bind(null, 0, "10ML", 10)}>10 Meter</a></li>
				</ul>
				return list
				break;
		}		

	},

	render(){
		return(
			<div className="dropdown">
				<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown" disabled={this.props.dropdownStatus}>{this.props.selectDiameter}<span className="caret"></span></button>				
				{this.userSelectRocketClass(this.props.classId)}
			</div>
			);
	}
});