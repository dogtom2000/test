Flight22 = React.createClass({

	render(){
		var lastStage = this.props.Rocket.stages[this.props.Rocket.stageCount];
		var vehicleMass = lastStage[0][0] + lastStage[1] + lastStage[2];
		var deltaV = [0, 0];
		var keys = Object.keys(this.props.Rocket.stages);
		for (var i = 0; i < this.props.Rocket.stageCount; i++){
			var stageMass = this.props.Rocket.stages[keys[i]][0][0] + this.props.Rocket.stages[keys[i]][1] + this.props.Rocket.stages[keys[i]][2];
			var emtpyMass = this.props.Rocket.stages[keys[i]][1] + this.props.Rocket.stages[keys[i]][2];
			deltaV[0] += Math.log(stageMass / emtpyMass) * 9.80665 * this.props.Rocket.stages[keys[i]][7];
			deltaV[1] += Math.log(stageMass / emtpyMass) * 9.80665 * this.props.Rocket.stages[keys[i]][7] * this.props.Rocket.stages[keys[i]][6] / this.props.Rocket.stages[keys[i]][5];
		}
		if(isNaN(this.props.Rocket.state[2])){
			var apoapsisValue = this.props.Rocket.state[2];
			var periapsisValue = this.props.Rocket.state[3];
		} else {
			apoapsisValue = Math.round(this.props.Rocket.state[2] - this.props.Planet.radius);
			periapsisValue = Math.round(this.props.Rocket.state[3] - this.props.Planet.radius);
		};
		
		return(
			<div className="col-xs-6 fixed bot-middle">
	            <table className="table summaryTableFour">
	              <thead>
	                <tr>
	                  <th>Rocket Summary</th>
	                  <th></th>
	                  <th></th>
	                  <th></th>
	                </tr>
	              </thead>
	              <tbody>
	                <tr>
	                  <td>Location</td>
	                  <td>{this.props.Rocket.state[0] + ": " + this.props.Rocket.state[1]}</td>
	                  <td>Mass [kg]</td>
	                  <td>{Math.round(vehicleMass)}</td>
	                </tr>
	                <tr>
	                  <td>Apoapsis</td>
	                  <td>{apoapsisValue}</td>
	                  <td>Stages</td>
	                  <td>{this.props.Rocket.stageCount}</td>
	                </tr>
	                <tr>
	                  <td>Periapsis</td>
	                  <td>{periapsisValue}</td>
	                  <td>Delta V</td>
	                  <td>{Math.round(deltaV[0]) + " (" + Math.round(deltaV[1]) + ")"}</td>
	                </tr>
					<tr>
	                </tr>
	              </tbody>
	            </table>
			</div>
		);
	}
});