var systemTableStyletd = {
	width: '150px',
  	padding: '1px'
}

var systemTableStyleth = {
	fontWeight: 'bold',
	fontSize: '20px'
}

var buttonStyle = {backgroundColor: "black", color: "green"}



Build_11 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed top-side scroll-y">
				<div id="rocketDisplay"></div>
			</div>
		);
	}
});

var rocketImage = {
 	height: '560px',
  	width: '234px',
  	border: 'none',
  	marginTop: '20px',
  	imageRendering: 'pixelated',
  	backgroundColor: '#444',
  	display: 'block',
  	marginLeft: 'auto',
  	marginRight: 'auto'
}

Build_12 = React.createClass({

	render(){
		return(
			<div className="col-xs-6 fixed top-middle">
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
						      <td>Thrust [kN]</td>
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
						    </tbody>					  
						    <thead>
						    <tr>
						      <th>Mass</th>
						      <th></th>
						    </tr>
						    </thead>
						      <tbody>
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
						      ({Math.round(this.props.dataSummary["reliability"][this.props.stageCurrent][0][1] * 10000) / 100})</td>
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
				<div className="col-xs-6 fixed">
					<img style={rocketImage} src={this.props.selectParts + ".png"}></img>
				</div>
			</div>
		);
	}
});

Build_13 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed top-side">
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
					  </tbody>
					    <thead>
					    <tr>
					      <th>Mass</th>
					      <th></th>
					    </tr>
					    </thead>
					    <tbody>
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
					      <td>{Math.round(this.props.dataSummary["reliability"][6][1] * 10000) / 100}</td>
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
		getInitialState: function() {
	    return {value: 'Rocket Name'};
	  },
	  handleChange: function(event) {
	    this.setState({value: event.target.value});
	    this.props.returnInput(event.target.value);
	  },

	  handleSave(){
	  	if (Vehicle.findOne({name: this.state.value}) !== undefined){
	  		return <button type="button" className="btn buttonStyle" data-toggle="modal" data-target="#overwriteModal">Save</button>
	  	} else {
	  		return <button type="button" className="btn buttonStyle" onClick={this.props.handleSaveRocket}>Save</button>
	  	}
	  	
	  },

	render(){
		return(
			<div className="col-xs-3 fixed bot-side">
				<div className="col-xs-2 fixed">

			</div>{/* sub column end */}
			<div className="col-xs-8 fixed">
				<div className="btn-group-vertical btn-block">
				<button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#configureRocketModal">Configure Rocket</button>
				<button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#configureSystemModal" disabled={this.props.systemConfig[0]}>Configure Systems </button>
				<button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#configureStageModal" disabled={this.props.stageConfig[6]}>Configure Stages </button>
				<button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#loadModal">Load Rocket</button>
				<button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#saveModal" onClick={this.props.handleBuildRocket}>Save Rocket</button>
			</div>

			<div id="configureRocketModal" className="modal fade" role="dialog" >
				  <div className="modal-dialog">
				    <div className="modal-content modalStyle" >
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h2 className="modal-title">Rocket Configuration</h2>
				        <div className="modal-body">
				        <h4>Rocket Class</h4>
				        <div className="btn-group btn-block">
					        <button type="button" disabled={this.props.rocketConfig[3]} className={this.props.rocketConfig[0]} style={{width: "33.33%"}} onClick={this.props.handleClassChange.bind(null, "Sounding Rocket", 0)}>Sounding Rocket</button>
					        <button type="button" disabled={this.props.rocketConfig[3]} className={this.props.rocketConfig[1]} style={{width: "33.33%"}} onClick={this.props.handleClassChange.bind(null, "Medium Lift Rocket", 1)}>Medium Lift Rocket</button>
					        <button type="button" disabled={this.props.rocketConfig[3]} className={this.props.rocketConfig[2]} style={{width: "33.33%"}} onClick={this.props.handleClassChange.bind(null, "Heavy Lift Rocket", 2)}>Heavy Lift Rocket</button>
				        </div>
				        <h4>Number of Stages</h4>
				        <div className="btn-group btn-block">
				        	<button type="button" disabled={this.props.rocketConfig[3]} className="btn buttonStyle" style={{width: "33.33%"}} onClick={this.props.handleStageChange.bind(null, -1)}><span className="glyphicon glyphicon-arrow-left"></span></button>
					        <button type="button" disabled={this.props.rocketConfig[3]} className="btn buttonStyle" style={{width: "33.33%"}}>{this.props.stageCount} Stage(s)</button>
					        <button type="button" disabled={this.props.rocketConfig[3]} className="btn buttonStyle" style={{width: "33.33%"}} onClick={this.props.handleStageChange.bind(null, 1)}><span className="glyphicon glyphicon-arrow-right"></span></button>
					    </div>
     					 </div>			        
				      	<div className="modal-footer">
				      	<button type="button" className="btn buttonStyle" data-toggle="modal" data-target="#clearModal">Clear Configuration</button>
				        <button type="button" className="btn buttonStyle" data-dismiss="modal" onClick={this.props.handleRocketSubmit}>Submit & Close</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>

			<div id="configureSystemModal" className="modal fade" role="dialog">
				  <div className="modal-dialog">
				    <div className="modal-content modalStyle">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title">system</h4>	
				         <div className="modal-body">
				        <h4>Rocket Class</h4>
				        <div className="btn-group btn-block">
					        <button type="button" className="btn buttonStyle" style={{width: "33.33%"}} onClick={this.props.handleAddSystem.bind(null, 70)}>70 kg</button>
					        <button type="button" className="btn buttonStyle" style={{width: "33.33%"}} onClick={this.props.handleAddSystem.bind(null, 7000)}>7000 kg</button>
					        <button type="button" className="btn buttonStyle" style={{width: "33.33%"}} onClick={this.props.handleAddSystem.bind(null, 21000)}>21000 kg</button>
				        </div>
				        </div>		        
				      	<div className="modal-footer">
				        <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>

			<div id="configureStageModal" className="modal fade" role="dialog">
				  <div className="modal-dialog">
				    <div className="modal-content modalStyle">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h2 className="modal-title">Stage Configuration</h2>
				    	<div className="modal-body">
				    	<h4>Select Stage</h4>
				        <div className="btn-group btn-block">
					        <button type="button" className={this.props.stageConfig[0][0]} disabled={this.props.stageConfig[0][1]} style={{width: "33.33%"}} onClick={this.props.handleStageSelect.bind(null, 0)}>{this.props.addStatus[0][2]}</button>
					        <button type="button" className={this.props.stageConfig[1][0]} disabled={this.props.stageConfig[1][1]} style={{width: "33.33%"}} onClick={this.props.handleStageSelect.bind(null, 1)}>{this.props.addStatus[1][2]}</button>
					        <button type="button" className={this.props.stageConfig[2][0]} disabled={this.props.stageConfig[2][1]} style={{width: "33.33%"}} onClick={this.props.handleStageSelect.bind(null, 2)}>{this.props.addStatus[2][2]}</button>
					        </div>
					        <div className="btn-group btn-block">
					        <button type="button" className={this.props.stageConfig[3][0]} disabled={this.props.stageConfig[3][1]} style={{width: "33.33%"}} onClick={this.props.handleStageSelect.bind(null, 3)}>{this.props.addStatus[3][2]}</button>
					        <button type="button" className={this.props.stageConfig[4][0]} disabled={this.props.stageConfig[4][1]} style={{width: "33.33%"}} onClick={this.props.handleStageSelect.bind(null, 4)}>{this.props.addStatus[4][2]}</button>
					        <button type="button" className={this.props.stageConfig[5][0]} disabled={this.props.stageConfig[5][1]} style={{width: "33.33%"}} onClick={this.props.handleStageSelect.bind(null, 5)}>{this.props.addStatus[5][2]}</button>
				        </div>
				        <h4>Select Diameter</h4>
				        <div className="btn-group btn-block">
					        <button type="button" className={this.props.partConfig[0][0]} style={{width: "25%"}} onClick={this.props.handlePartSelect.bind(null, 0)}>{this.props.parts[this.props.selectClass][0]}</button>
					        <button type="button" className={this.props.partConfig[1][0]} style={{width: "25%"}} onClick={this.props.handlePartSelect.bind(null, 1)}>{this.props.parts[this.props.selectClass][1]}</button>
					        <button type="button" className={this.props.partConfig[2][0]} style={{width: "25%"}} onClick={this.props.handlePartSelect.bind(null, 2)}>{this.props.parts[this.props.selectClass][2]}</button>
					        <button type="button" className={this.props.partConfig[3][0]} style={{width: "25%"}} onClick={this.props.handlePartSelect.bind(null, 3)}>{this.props.parts[this.props.selectClass][3]}</button>
				        </div>
				        <h4>Select Engine Count</h4>
				        <div className="btn-group btn-block">
				        	<button type="button" className={this.props.engineConfig[0][0]} style={{width: "25%"}} onClick={this.props.handleEngineSelect.bind(null, 0, 1)}>1 Engine</button>
					        <button type="button" className={this.props.engineConfig[1][0]} style={{width: "25%"}} onClick={this.props.handleEngineSelect.bind(null, 1, 2)}>2 Engines</button>
					        <button type="button" className={this.props.engineConfig[2][0]} style={{width: "25%"}} onClick={this.props.handleEngineSelect.bind(null, 2, 4)}>4 Engines</button>
					        <button type="button" className={this.props.engineConfig[3][0]} style={{width: "25%"}} onClick={this.props.handleEngineSelect.bind(null, 3, 5)}>5 Engines</button>
				        </div>
				        <h4>Select Fuel Type</h4>
				        <div className="btn-group btn-block">
					        <button type="button" className={this.props.fuelConfig[0][0]} style={{width: "25%"}} onClick={this.props.handleFuelSelect.bind(null, 0, "Solid Fuel")}>Solid Fuel</button>
					        <button type="button" className={this.props.fuelConfig[1][0]} style={{width: "25%"}} onClick={this.props.handleFuelSelect.bind(null, 1, "RP1 LOX")}>RP1 LOX</button>
					        <button type="button" className={this.props.fuelConfig[2][0]} style={{width: "25%"}} onClick={this.props.handleFuelSelect.bind(null, 2, "LH2 LOX")}>LH2 LOX</button>
					        <button type="button" className={this.props.fuelConfig[3][0]} style={{width: "25%"}} onClick={this.props.handleFuelSelect.bind(null, 3, "Aerozine N2O4")}>Aerozine N2O4</button>
				        </div>
     					 </div>		        
				      	<div className="modal-footer">
				        <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>

			<div id="loadModal" className="modal fade" role="dialog">
				  <div className="modal-dialog">
				    <div className="modal-content modalStyle">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title">Are you sure?</h4>		
				        <div className="modal-body">
				      {Vehicle.find().fetch().map( function(u) { return u.name; } ).map((name, i) => <li key={i}><a href="#" onClick={this.props.handleLoadRocket.bind(null, name) } data-dismiss="modal">{name}</a></li>)}
				        </div>	        
				      	<div className="modal-footer">
				        <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div> 

				<div id="saveModal" className="modal fade" role="dialog">
				  <div className="modal-dialog">
				    <div className="modal-content modalStyle">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title">Save Rocket</h4>			        
				      </div>
				      <div className="modal-body">
					        <input
					    	id="rocket-name-input"
		        			type="text"
		        			value={this.state.value}
		        			onChange={this.handleChange}
		      			/>
		      			<h4 className="modal-title">{this.props.buildStatus}</h4>
		      			<h4 className="modal-title">{this.props.saveStatus}</h4>
				      </div>
				      <div className="modal-footer">
				      		{this.handleSave()}
				        <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>


				<div id="clearModal" className="modal fade" role="dialog">
				  <div className="modal-dialog">
				    <div className="modal-content modalStyle">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title">Are you sure?</h4>			        
				      	<div className="modal-footer">
				      	<button type="button" className="btn buttonStyle" onClick={this.props.handleClearShip} data-dismiss="modal">Clear</button>
				        <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>


				<div id="overwriteModal" className="modal fade" role="dialog">
				  <div className="modal-dialog">
				    <div className="modal-content modalStyle" >
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title">Overwrite save?</h4>			        
				      	<div className="modal-footer">
				      	<button type="button" className="btn buttonStyle" onClick={this.props.handleSaveRocket} data-dismiss="modal">Overwrite</button>
				        <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>

			</div>{/* sub column end */}
			<div className="col-xs-2 fixed">
			</div>
			</div>
		);
	}
});

Build_22 = React.createClass({

	render(){
		return(
		<div className="col-xs-6 fixed  bot-middle">
			<div className="col-xs-3 fixed">
				<div className="btn-group-vertical btn-block">
				  <button type="button" className={this.props.addStatus[0][3]} onClick={this.props.handleAddStage.bind(null, 0)} disabled={this.props.addStatus[0][1]}>{this.props.addStatus[0][2]}</button>
				  <button type="button" className={this.props.addStatus[1][3]} onClick={this.props.handleAddStage.bind(null, 1)} disabled={this.props.addStatus[1][1]}>{this.props.addStatus[1][2]}</button>
				  <button type="button" className={this.props.addStatus[2][3]} onClick={this.props.handleAddStage.bind(null, 2)} disabled={this.props.addStatus[2][1]}>{this.props.addStatus[2][2]}</button>
				  <button type="button" className={this.props.addStatus[3][3]} onClick={this.props.handleAddStage.bind(null, 3)} disabled={this.props.addStatus[3][1]}>{this.props.addStatus[3][2]}</button>
				  <button type="button" className={this.props.addStatus[4][3]} onClick={this.props.handleAddStage.bind(null, 4)} disabled={this.props.addStatus[4][1]}>{this.props.addStatus[4][2]}</button>
				  <button type="button" className={this.props.addStatus[5][3]} onClick={this.props.handleAddStage.bind(null, 5)} disabled={this.props.addStatus[5][1]}>{this.props.addStatus[5][2]}</button>
				</div>
			</div>{/* sub column end */}
			<div className="col-xs-9 fixed">
				<table id="buildModify">
					<tbody>
						<tr>
							<td>Tank Length</td>
							<td>{this.props.tankLength + " m"}</td> 
							<td><button type="button" className="btn btn-block buttonStyle" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 0, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block buttonStyleNeg" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 0, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Structural Density</td>
							<td>{this.props.structuralDensity + " kg/m3"}</td> 
							<td><button type="button" className="btn btn-block buttonStyle" disabled={this.props.modifyStatus}onClick={this.props.handleModifyStage.bind(null, 1, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block buttonStyleNeg" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 1, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Mass Flow Rate</td>
							<td>{this.props.massRate + " kg/s"}</td> 
							<td><button type="button" className="btn btn-block buttonStyle" disabled={this.props.modifyStatus}onClick={this.props.handleModifyStage.bind(null, 2, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block buttonStyleNeg" disabled={this.props.modifyStatus}onClick={this.props.handleModifyStage.bind(null, 2, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Mixture Ratio</td>
							<td>{this.props.mixRatio}</td> 
							<td><button type="button" className="btn btn-block buttonStyle" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 3, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block buttonStyleNeg" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 3, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Engine Pressure</td>
							<td>{this.props.enginePressure + " atm"}</td> 
							<td><button type="button" className="btn btn-block buttonStyle" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 4, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block buttonStyleNeg" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 4, -1)}>-</button></td>
							
						</tr>
						<tr>
							<td>Nozzle Length</td>
							<td>{this.props.nozzleLength + " m"}</td> 
							<td><button type="button" className="btn btn-block buttonStyle" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 5, 1)}>+</button></td>
							<td><button type="button" className="btn btn-block buttonStyleNeg" disabled={this.props.modifyStatus} onClick={this.props.handleModifyStage.bind(null, 5, -1)}>-</button></td>
							
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
		<div className="col-xs-3 fixed bot-side">
		
		</div>
		);
	}
});
