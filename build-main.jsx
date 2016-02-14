BuildMain = React.createClass({
	
	mixins: [ReactMeteorData],

	getMeteorData() {

		return {
		}
	},

	getInitialState() {

		return {
			tankLength: 20,
			wallThickness: 5,
			fuelRate: 200,
			mixRatio: 6,
			enginePressure: 80,
			nozzleLength: 4,
			performance: [0, 0, 0, 0, 0, 0, 0, 0],
			rocketImage: "10ML.png" 

		};
	},

	handleUserInput(index, val, min, max) {
		switch (index){
			case 0:
				if ((this.state.tankLength > min || val > 0) && (this.state.tankLength < max || val < 0)){
					this.setState({tankLength: Math.round((this.state.tankLength + val) * 10) /10});
				}
				break;
			case 1:
				if ((this.state.wallThickness > min || val > 0) && (this.state.wallThickness < max || val < 0)){
					this.setState({wallThickness: Math.round((this.state.wallThickness + val) * 10) /10});
				}
				break;
			case 2:
				if ((this.state.fuelRate > min || val > 0) && (this.state.fuelRate < max || val < 0)){
					this.setState({fuelRate: this.state.fuelRate + val});
					var thermo = engineThermo(0, this.state.mixRatio, this.state.enginePressure, this.state.nozzleLength, this.state.fuelRate + val);
					this.setState({performance: thermo});
				}
				break;
			case 3:
				if ((this.state.mixRatio > min || val > 0) && (this.state.mixRatio < max || val < 0)){
					this.setState({mixRatio: Math.round((this.state.mixRatio + val) * 10) /10});
					var thermo = engineThermo(0, this.state.mixRatio + val, this.state.enginePressure, this.state.nozzleLength, this.state.fuelRate);
					this.setState({performance: thermo});

				}
				break;
			case 4:
				if ((this.state.enginePressure > min || val > 0) && (this.state.enginePressure < max || val < 0)){
					this.setState({enginePressure: this.state.enginePressure + val});
					var thermo = engineThermo(0, this.state.mixRatio, this.state.enginePressure + val, this.state.nozzleLength, this.state.fuelRate);
					this.setState({performance: thermo});
				}
				break;
			case 5:
				if ((this.state.nozzleLength > min || val > 0) && (this.state.nozzleLength < max || val < 0)){
					this.setState({nozzleLength: Math.round((this.state.nozzleLength + val) * 10) /10});
					var thermo = engineThermo(0, this.state.mixRatio, this.state.enginePressure, this.state.nozzleLength + val, this.state.fuelRate);
					this.setState({performance: thermo});
				}
				break;
		}

		var c = document.getElementById("rocket-canvas");
    	var ctx = c.getContext("2d");
		ctx.webkitImageSmoothingEnabled = false;
		ctx.mozImageSmoothingEnabled = false;
		ctx.imageSmoothingEnabled = false; 
    	var img = new Image(117, 280);
    	img.src = "10MLG.png";
    	ctx.drawImage(img,0,0, 234, 560);
	},


	render(){
		return(
			<div>

				<div className="row row-1">
					<Build_11 />

					<Build_12 performance={this.state.performance}/>

					<Build_13 
					tankMass={this.state.tankMass}
					engineMass={this.state.engineMass}
					fuelMass={this.state.fuelMass}
					totalMass={this.state.totalMass}/>

				</div>{/* row one ends */}

				<div className="row row-2">
					<Build_21 />			

					<Build_22 	tankLength={this.state.tankLength} 
								wallThickness={this.state.wallThickness} 
								fuelRate={this.state.fuelRate} 
								mixRatio={this.state.mixRatio} 
								enginePressure={this.state.enginePressure} 
								nozzleLength={this.state.nozzleLength} 
								onUserInput={this.handleUserInput}/>

					<Build_23 />
				</div>{/* row two ends */}		
			</div>
			)
	}
});