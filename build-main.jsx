

BuildMain = React.createClass({
	
	
	mixins: [ReactMeteorData],

	getMeteorData() {

		return {



		}
	},

	getInitialState() {
		return {
			tankLength: 20,
			wallThickness: 20,
			fuelRate: 100,
			mixRatio: 5,
			enginePressure: 100,
			nozzleLength: 5,
		};
	},


	handleUserInput(index, val, min, max) {
		switch (index){
			case 0:
				if ((this.state.tankLength > min || val > 0) && (this.state.tankLength < max || val < 0)){
					this.setState({tankLength: this.state.tankLength + val});
				}
				break;
			case 1:
				if ((this.state.wallThickness > min || val > 0) && (this.state.wallThickness < max || val < 0)){
					this.setState({wallThickness: this.state.wallThickness + val});
				}
				break;
			case 2:
				if ((this.state.fuelRate > min || val > 0) && (this.state.fuelRate < max || val < 0)){
					this.setState({fuelRate: this.state.fuelRate + val});
				}
				break;
			case 3:
				if ((this.state.mixRatio > min || val > 0) && (this.state.mixRatio < max || val < 0)){
					this.setState({mixRatio: this.state.mixRatio + val});
				}
				break;
			case 4:
				if ((this.state.enginePressure > min || val > 0) && (this.state.enginePressure < max || val < 0)){
					this.setState({enginePressure: this.state.enginePressure + val});
				}
				break;
			case 5:
				if ((this.state.nozzleLength > min || val > 0) && (this.state.nozzleLength < max || val < 0)){
					this.setState({nozzleLength: this.state.nozzleLength + val});
				}
				break;
		}
	},





	render(){
		var val = 1700;
		return(
			<div>
				<div className="row-2 row">
					<div className="col-md-3 fixed" id="build-1-1">

					</div>{/* column end */}

					<div className="col-md-6 fixed" id="build-1-2">
					Graphical stage preview
					</div>
					<div className="col-md-3 fixed" id="build-1-3">
					Overall rocket properties
					</div>
				</div>{/* row one ends */}


				<div className="row-1 row">
					<div className="col-md-3 fixed" id="build-2-1">
						<Table tableId={"buildEcon"} data={[["H1", "H2", "H3","H4"],[["D1", "D2", "D3","D4"],[, "D5", "D6","D7", "D8"]]]}/>
					</div>{/* column end */}

					<Build_22 tankLength={this.state.tankLength} wallThickness={this.state.wallThickness} fuelRate={this.state.fuelRate} mixRatio={this.state.mixRatio} enginePressure={this.state.enginePressure} nozzleLength={this.state.nozzleLength} onUserInput={this.handleUserInput} />

					<div className="col-md-3 fixed" id="build-2-3">
						<div className="col-md-3 fixed">
							<Buttons divclass={"btn-group-vertical"} subclass={"btn btn-primary"} subid={["build-stage-1", "build-stage-2", "build-stage-2", "build-stage-4", "build-stage-5", "build-stage-6", "build-stage-1"]} subtext={["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5", "Stage 6"]}/>
						</div>{/* sub column end */}
						<div className="col-md-3 fixed">
						</div>{/* sub column end */}
						<div className="col-md-3 fixed">
						</div>{/* sub column end */}
						<div className="col-md-3 fixed" id="shigger">
							<div className="btn-group-vertical">
							  <button type="button" className="btn btn-success">Launch</button>
							  <button type="button" className="btn btn-danger">Clear</button>
							</div>
						</div>{/* sub column end */}
					</div>{/* column end */}
				</div>{/* row two ends */}		
			</div>
			)
	}
});