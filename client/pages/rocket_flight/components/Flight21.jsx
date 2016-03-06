Flight21 = React.createClass({

	render(){
		return(
			<div className="col-xs-3 fixed bot-side">
				<div className="col-xs-2 fixed">
          		</div>
          		
				 <div className="col-xs-8 fixed">
		            <div className="btn-group-vertical btn-block">
		              <button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#loadVehicleModal">Load Vehicle</button>
		              <button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#flightControlModal">Flight Control</button>
		              <button type="button" className="btn btn-block buttonStyleNeg" onClick={this.props.handleInitiateBurn}>Initiate Burn</button>
		            </div>
		          </div>
		     
					<div id="loadVehicleModal" className="modal fade" role="dialog">
			            <div className="modal-dialog">
			              <div className="modal-content modalStyle">
			                <div className="modal-header">
			                  <button type="button" className="close" data-dismiss="modal">&times;</button>
			                  <h4 className="modal-title">Load Vehicle</h4>
			                  <div className="modal-body">
			                    <div>
			                    {this.props.vehicle.map( function(u) { return u.name; } ).map((name, i) =>
			                       <div key={i} className="btn-group btn-block">
			                           <button className="btn buttonStyle" style={{width: "50%"}} onClick={this.props.handleLoadVehicle.bind(null, name)} data-dismiss="modal">{name}</button>
			                           <button className="btn buttonStyle" style={{width: "20%", marginLeft: "30%"}} onClick={this.props.handleDeleteVehicle.bind(null, name)}>Delete</button>
			                       </div>)}
			                    </div>
			                  </div>
			                  <div className="modal-footer">
			                    <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          
			         <div id="flightControlModal" className="modal fade" role="dialog">
			            <div className="modal-dialog">
			              <div className="modal-content modalStyle">
			                <div className="modal-header">
			                  <button type="button" className="close" data-dismiss="modal">&times;</button>
			                  <h4 className="modal-title">Flight Control</h4>
			                  <div className="modal-body">
			                  	<div className="btn-group btn-block">
	                        		<button className="btn buttonStyle" style={{width: "40%", marginLeft: "60%"}} onClick={this.props.handleChangeMulVal}>{this.props.mulVal}</button>
	                    		 </div>
				                  <div className="btn-group btn-block">
	                           		<button className={this.props.maneuverConfig[0][0]} style={{width: "50%"}} onClick={this.props.handleConfigureManeuver.bind(null, 0)} disabled={this.props.maneuverConfig[0][1]}>Launch to Orbit: {this.props.maneuverValue[0]} km</button>
	                        		<button className="btn buttonStyle" style={{width: "20%", marginLeft: "10%"}} onClick={this.props.handleDesiredOrbit.bind(null, 0, 1)}>+</button>
	                        		<button className="btn buttonStyleNeg" style={{width: "20%"}} onClick={this.props.handleDesiredOrbit.bind(null, 0, -1)}>-</button>
	                    		 </div>
								<div className="btn-group btn-block">
	                           		<button className={this.props.maneuverConfig[1][0]} style={{width: "50%"}} onClick={this.props.handleConfigureManeuver.bind(null, 1)} disabled={this.props.maneuverConfig[1][1]}>Change apoapsis: {this.props.maneuverValue[1]} km</button>
	                        		<button className="btn buttonStyle" style={{width: "20%", marginLeft: "10%"}} onClick={this.props.handleDesiredOrbit.bind(null, 1, 1)}>+</button>
	                        		<button className="btn buttonStyleNeg" style={{width: "20%"}} onClick={this.props.handleDesiredOrbit.bind(null, 1, -1)}>-</button>
	                    		 </div>
	                    		 <div className="btn-group btn-block">
	                           		<button className={this.props.maneuverConfig[2][0]} style={{width: "50%"}} onClick={this.props.handleConfigureManeuver.bind(null, 2)} disabled={this.props.maneuverConfig[2][1]}>Change periapsis: {this.props.maneuverValue[2]} km</button>
	                        		<button className="btn buttonStyle" style={{width: "20%", marginLeft: "10%"}} onClick={this.props.handleDesiredOrbit.bind(null, 2, 1)}>+</button>
	                        		<button className="btn buttonStyleNeg" style={{width: "20%"}} onClick={this.props.handleDesiredOrbit.bind(null, 2, -1)}>-</button>
	                    		 </div>
	                    		 <div className="btn-group btn-block">
	                           		<button className={this.props.maneuverConfig[3][0]} style={{width: "50%"}} onClick={this.props.handleConfigureManeuver.bind(null, 3)} disabled={this.props.maneuverConfig[3][1]}>Attempt reentry: {this.props.maneuverValue[3]} km</button>
	                        		<button className="btn buttonStyle" style={{width: "20%", marginLeft: "10%"}} onClick={this.props.handleDesiredOrbit.bind(null, 3, 1)}>+</button>
	                        		<button className="btn buttonStyleNeg" style={{width: "20%"}} onClick={this.props.handleDesiredOrbit.bind(null, 3, -1)}>-</button>
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
//<button type="button" className="btn btn-block buttonStyle" onClick={this.props.displayOrbit}>View Orbit</button>}