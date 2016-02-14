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
			tankMass: 5,
			engineMass: 5,
			fuelMass: 5,
			totalMass: 5,

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
		this.setState({tankMass: this.state.tankMass + 2});
	},

	render(){
		return(
			<div>

				<div className="row-fluid row-2">
					<Build_11 />

					<Build_12 />

					<Build_13 
					tankMass={this.state.tankMass}
					engineMass={this.state.engineMass}
					fuelMass={this.state.fuelMass}
					totalMass={this.state.totalMass}/>

				</div>{/* row one ends */}

				<div className="row-fluid row-1">
					<Build_21 />			

					<Build_22 	tankLength={this.state.tankLength} 
								wallThickness={this.state.wallThickness} 
								fuelRate={this.state.fuelRate} 
								mixRatio={this.state.mixRatio} 
								enginePressure={this.state.enginePressure} 
								nozzleLength={this.state.nozzleLength} 
								onUserInput={this.handleUserInput} />

					<Build_23 />
				</div>{/* row two ends */}		
			</div>
			)
	}
});