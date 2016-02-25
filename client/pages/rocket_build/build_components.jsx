Build_11 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed" id="build-1-1">
				<div className="title">Command Module Summary</div>
					<table className="table" id="system-summary">
						<thead>
						    <tr>
						      <th>Systems</th>
						      <th></th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning" onClick={this.props.handleAddSystem} disabled={this.props.selectStatus}>Add Payload</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning" disabled={this.props.selectStatus}>-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning" disabled={this.props.selectStatus}>-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning" disabled={this.props.selectStatus}>-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning" disabled={this.props.selectStatus}>-</button></td>
						      <td>Option Information</td>
						    </tr>
						    <tr>
						      <td><button type="button" className="btn btn-block btn-warning" disabled={this.props.selectStatus}>-</button></td>
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
		);
	}
});

Build_12 = React.createClass({

	render(){
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
						      <td>{Math.round(this.props.dataSummary["thrust"][this.props.stageCurrent][0] / 1000) + " "} 
						      	({Math.round(this.props.dataSummary["thrust"][this.props.stageCurrent][1] / 1000)})</td>
						    </tr>
						    <tr>
						      <td>Isp [s]</td>
						      <td>{Math.round(this.props.dataSummary["Isp"][this.props.stageCurrent][0]) + " "} 
						      	({Math.round(this.props.dataSummary["Isp"][this.props.stageCurrent][1])})</td>
						    </tr>
						    <tr>
						      <td>TWR</td>
						      <td>{Math.round(this.props.dataSummary["TWR"][this.props.stageCurrent][0] * 100) / 100 + " "} 
						      	({Math.round(this.props.dataSummary["TWR"][this.props.stageCurrent][1] * 100) / 100})</td>
						    </tr>
						    <tr>
						      <td>Delta V [m/s]</td>
						      <td>{Math.round(this.props.dataSummary["dV"][this.props.stageCurrent][0]) + " "} 
						      	({Math.round(this.props.dataSummary["dV"][this.props.stageCurrent][1])})</td>
						    </tr>
						    <tr>
						      <th>Mass</th>
						      <th></th>
						    </tr>
						    <tr>
						      <td>Fuel/Oxidizer [ton]</td>
						      <td>{Math.round(this.props.dataSummary["mass"][this.props.stageCurrent][0] / 10) / 100}</td>
						    </tr>
						    <tr>
						      <td>Engine [ton]</td>
						      <td>{Math.round(this.props.dataSummary["mass"][this.props.stageCurrent][1] / 10) / 100}</td>
						    </tr>
						    <tr>
						      <td>Structure [ton]</td>
						      <td>{Math.round(this.props.dataSummary["mass"][this.props.stageCurrent][2] / 10) / 100}</td>
						    </tr>
						    <tr>
						      <td>Total [ton]</td>
						      <td>{Math.round(this.props.dataSummary["mass"][this.props.stageCurrent][3] / 10) / 100}</td>
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
						      <td>{Math.round(this.props.dataSummary["reliability"][this.props.stageCurrent][0][0] * 10000) / 100 + " "}
						      ({Math.round(this.props.dataSummary["reliability"][this.props.stageCurrent][0][1] * 10000) / 100 + " "})</td>
						    </tr>
						    <tr>
						      <td>Engine</td>
						      <td>{Math.round(this.props.dataSummary["reliability"][this.props.stageCurrent][1] * 10000) / 100}</td>
						    </tr>
						    <tr>
						      <td>Structure</td>
						      <td>{Math.round(this.props.dataSummary["reliability"][this.props.stageCurrent][2] * 10000) / 100}</td>
						    </tr>
						    <tr>
						      <td>Total</td>
						      <td>{Math.round(this.props.dataSummary["reliability"][this.props.stageCurrent][3] * 10000) / 100}</td>
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
						      <td>{Math.round(this.props.dataSummary["cost"][this.props.stageCurrent][0])}</td>
						    </tr>
						    <tr>
						      <td>Engine</td>
						      <td>{Math.round(this.props.dataSummary["cost"][this.props.stageCurrent][1])}</td>
						    </tr>
						    <tr>
						      <td>Structure</td>
						      <td>{Math.round(this.props.dataSummary["cost"][this.props.stageCurrent][2])}</td>
						    </tr>
						    <tr>
						      <td>Total</td>
						      <td>{Math.round(this.props.dataSummary["cost"][this.props.stageCurrent][3])}</td>
						    </tr>
						    <tr>
						      <td></td>
						      <td></td>
						    </tr>
						  </tbody>
						</table>		
					</div>
				<div className="col-xs-6 fixed" id="build-1-2-R">
					<img id="rocket-image" src={this.props.selectTemplate + ".png"}></img>
				</div>
			</div>
		);
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
					    <td>{Math.round(this.props.dataSummary["dV"][6][0]) + " "} 
						      	({Math.round(this.props.dataSummary["dV"][6][1])})</td>
					  </tr>
					  <tr>
					    <th>Mass</th>
					    <th></th>
					  </tr>
					  <tr>
					    <td>Systems</td>
					    <td>{Math.round(this.props.dataSummary["mass"][6][0]) / 1000 + " "}</td>
					  </tr>
					  <tr>
					    <td>Fuel/Oxidizer [ton]</td>
					    <td>{Math.round(this.props.dataSummary["mass"][6][1]) / 1000 + " "}</td>
					  </tr>
					  <tr>
					    <td>Engine [ton]</td>
					    <td>{Math.round(this.props.dataSummary["mass"][6][2]) / 1000 + " "}</td>
					  </tr>
					  <tr>
					    <td>Structure [ton]</td>
					    <td>{Math.round(this.props.dataSummary["mass"][6][3]) / 1000 + " "}</td>
					  </tr>
					  <tr>
					    <td>Total [ton]</td>
					    <td>{Math.round(this.props.dataSummary["mass"][6][4]) / 1000 + " "}</td>
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
					    <td>{Math.round(this.props.dataSummary["reliability"][6][0] * 10000) / 100 + " "}</td>
					  </tr>	  
					    <tr>
					      <td>Fuel/Oxidizer</td>
					      <td>{Math.round(this.props.dataSummary["reliability"][6][1] * 10000) / 100 + " "}</td>
					    </tr>
					    <tr>
					      <td>Engine</td>
					      <td>{Math.round(this.props.dataSummary["reliability"][6][2] * 10000) / 100}</td>
					    </tr>
					    <tr>
					      <td>Structure</td>
					      <td>{Math.round(this.props.dataSummary["reliability"][6][3] * 10000) / 100}</td>
					    </tr>
					    <tr>
					      <td>Total</td>
					      <td>{Math.round(this.props.dataSummary["reliability"][6][4] * 10000) / 100}</td>
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
					    <td>{Math.round(this.props.dataSummary["cost"][6][0]) + " "}</td>
					  </tr>
					  <tr>
					    <td>Fuel/Oxidizer</td>
					    <td>{Math.round(this.props.dataSummary["cost"][6][1]) + " "}</td>
					  </tr>
					  <tr>
					    <td>Engine</td>
					    <td>{Math.round(this.props.dataSummary["cost"][6][2]) + " "}</td>
					  </tr>
					  <tr>
					    <td>Structure</td>
					    <td>{Math.round(this.props.dataSummary["cost"][6][3]) + " "}</td>
					  </tr>
					  <tr>
					    <td>Total</td>
					    <td>{Math.round(this.props.dataSummary["cost"][6][4]) + " "}</td>
					  </tr>
					  <tr>
					    <td></td>
					    <td></td>
					  </tr>
					  </tbody>
					</table>
			</div>
		);
	}
});

Build_21 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed" id="build-2-1">
				<div className="title">Profile Information</div>
			</div>
		);
	}
});

Build_22 = React.createClass({

	render(){
		return(
		<div className="col-xs-6 fixed" id="build-2-2">
			<div className="col-xs-5 fixed">
				<div className="dropdown">
					<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown" disabled={this.props.typeStatus}>Class: {this.props.selectClass}<span className="caret"></span></button>
					<ul className="dropdown-menu">
						<li><a href="#" onClick={this.props.handleSelectStage.bind(null, 0, "Sounding Rocket")}>Sounding Rockets</a></li>
						<li><a href="#" onClick={this.props.handleSelectStage.bind(null, 0, "Manned Rocket")}>Manned Rockets</a></li>
					</ul>
				</div>
				
				<div className="dropdown">
					<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown" disabled={this.props.selectStatus}> Template: {this.props.selectTemplate}<span className="caret"></span></button>		
					<ul className="dropdown-menu">		
					{Template.find({class: this.props.selectClass}).map( function(u) { return u.name; } ).map((template, i) => <li key={i}><a href="#" onClick={this.props.handleSelectStage.bind(null, 1, template)}>{template}</a></li>)}
					</ul>
				</div>

				<div className="dropdown">
					<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown" disabled={this.props.selectStatus}>Engine Count: {this.props.engineCount}<span className="caret"></span></button>
					<ul className="dropdown-menu">
						<li><a href="#" onClick={this.props.handleSelectStage.bind(null, 2, 1)}>1 Engine</a></li>
						<li><a href="#" onClick={this.props.handleSelectStage.bind(null, 2, 2)}>2 Engines</a></li>
						<li><a href="#" onClick={this.props.handleSelectStage.bind(null, 2, 3)}>3 Engines</a></li>
						<li><a href="#" onClick={this.props.handleSelectStage.bind(null, 2, 4)}>4 Engines</a></li>
						<li><a href="#" onClick={this.props.handleSelectStage.bind(null, 2, 5)}>5 Engines</a></li>
					</ul>
				</div>
				<div className="dropdown">
					<button className="btn btn-block btn-primary dropdown-toggle" type="button" data-toggle="dropdown" disabled={this.props.selectStatus}>Selected Fuel: {this.props.fuelType}<span className="caret"></span></button>
					<ul className="dropdown-menu">
						<li><a href="#" onClick={this.props.handleSelectStage.bind(null, 3, "LH2 LOX")}>LH2 LOX</a></li>
						<li><a href="#" onClick={this.props.handleSelectStage.bind(null, 3, "RP1 LOX")}>RP1 LOX</a></li>
						<li><a href="#" onClick={this.props.handleSelectStage.bind(null, 3, "Aerozine 50 N2O4")}>Aerozine 50 N2O4</a></li>
						<li><a href="#" onClick={this.props.handleSelectStage.bind(null, 3, "Solid Rocket Fuel")}>Solid Rocket Fuel</a></li>
					</ul>
				</div>
				<div className="btn-group-vertical btn-block">
				<button type="button" className="btn btn-block btn-success" disabled={this.props.submitStatus} onClick={this.props.handleSubmitStage}>Submit Stage</button>
				</div>
			</div>{/* sub column end */}
			<div className="col-xs-7 fixed">
				<table id="buildModify">
					<tbody>
						<tr>
							<td>Tank Length</td>
							<td>{this.props.tankLength + " m"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 0, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 0, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Structural Density</td>
							<td>{this.props.structuralDensity + " kg/m3"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.modifyStatus}onClick={this.props.handleModifyStage.bind(null, 1, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 1, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Mass Flow Rate</td>
							<td>{this.props.massRate + " kg/s"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.modifyStatus}onClick={this.props.handleModifyStage.bind(null, 2, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.modifyStatus}onClick={this.props.handleModifyStage.bind(null, 2, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Mixture Ratio</td>
							<td>{this.props.mixRatio}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 3, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 3, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Engine Pressure</td>
							<td>{this.props.enginePressure + " atm"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 4, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 4, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Nozzle Length</td>
							<td>{this.props.nozzleLength + " m"}</td> 
							<td><button type="button" className="btn btn-block btn-success" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 5, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block btn-danger" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 5, -1)}>-</button></td>
							
						</tr>
					</tbody>
				</table>
			</div>{/* sub column end */}
		</div>
		);
	}
});

Build_23 = React.createClass({


	getInitialState: function() {
    return {value: 'Rocket Name'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    this.props.returnInput(event.target.value);
  },

	render(){
		return(
		<div className="col-xs-3 fixed" id="build-2-3">
			<div className="col-xs-6 fixed">
				<div className="btn-group-vertical btn-block">
				  <button type="button" className={this.props.addStatus[0][3]} onClick={this.props.handleAddStage.bind(null, 0)}>{this.props.addStatus[0][2]}</button>
				  <button type="button" className={this.props.addStatus[1][3]} onClick={this.props.handleAddStage.bind(null, 1)} disabled={this.props.addStatus[1][1]}>{this.props.addStatus[1][2]}</button>
				  <button type="button" className={this.props.addStatus[2][3]} onClick={this.props.handleAddStage.bind(null, 2)} disabled={this.props.addStatus[2][1]}>{this.props.addStatus[2][2]}</button>
				  <button type="button" className={this.props.addStatus[3][3]} onClick={this.props.handleAddStage.bind(null, 3)} disabled={this.props.addStatus[3][1]}>{this.props.addStatus[3][2]}</button>
				  <button type="button" className={this.props.addStatus[4][3]} onClick={this.props.handleAddStage.bind(null, 4)} disabled={this.props.addStatus[4][1]}>{this.props.addStatus[4][2]}</button>
				  <button type="button" className={this.props.addStatus[5][3]} onClick={this.props.handleAddStage.bind(null, 5)} disabled={this.props.addStatus[5][1]}>{this.props.addStatus[5][2]}</button>
				</div>
			</div>{/* sub column end */}
			<div className="col-xs-6 fixed">
				<div className="btn-group-vertical btn-block">
				  <button type="button" className="btn btn-block btn-primary" onClick={this.props.handleBuildRocket}>{this.props.buildStatus}</button>
				  <button type="button" className="btn btn-block btn-success" onClick={this.props.handleSaveRocket}>Save Rocket</button>
				  <button type="button" className="btn btn-block btn-danger" onClick={this.props.handleClearShip}>Clear</button>
				</div>

				    <input
				    	id="rocket-name-input"
	        			type="text"
	        			value={this.state.value}
	        			onChange={this.handleChange}
	      			/>
			</div>{/* sub column end */}
		</div>
		);
	}
});
