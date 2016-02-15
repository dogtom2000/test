BuildMain = React.createClass({
	
	mixins: [ReactMeteorData],

	getMeteorData() {

		return {
		}
	},

	getInitialState() {

		return {
			tankLength: 0,
			tankDiameter: 0,
			structuralDensity: 0,
			massRate: 0,
			mixRatio: 0,
			enginePressure: 0,
			nozzleLength: 0,
			performance: [0, 0, 0, 0, 0, 0, 0, 0],
			massData: [0.1, 0.1],
			buttonDisable: true,
			rocketImage: "10ML.png",
			selectDiameter: "Stage Diameter",
			selectFuel: "Fuel/Oxidizer Type",
			selectMatStruct: "Structural Material",
			SelectMatEng: "Engine Material"
		};
	},

	handleUserInput(index, val, min, max) {
		switch (index){
			case 0:
				if ((this.state.tankLength > min || val > 0) && (this.state.tankLength < max || val < 0)){
					this.setState({tankLength: Math.round((this.state.tankLength + val) * 10) /10});
					var structure = tankStructure(0, this.state.mixRatio, this.state.tankDiameter, this.state.tankLength + val, this.state.structuralDensity)
					this.setState({massData: structure});
				}
				break;
			case 1:
				if ((this.state.structuralDensity > min || val > 0) && (this.state.structuralDensity < max || val < 0)){
					var structure = tankStructure(0, this.state.mixRatio, this.state.tankDiameter, this.state.tankLength, this.state.structuralDensity + val)
					this.setState({structuralDensity: Math.round((this.state.structuralDensity + val) * 10) /10});
					this.setState({massData: structure});
				}
				break;
			case 2:
				if ((this.state.massRate > min || val > 0) && (this.state.massRate < max || val < 0)){
					this.setState({massRate: this.state.massRate + val});
					var thermo = engineThermo(0, this.state.mixRatio, this.state.enginePressure, this.state.nozzleLength, this.state.massRate + val);
					this.setState({performance: thermo});
				}
				break;
			case 3:
				if ((this.state.mixRatio > min || val > 0) && (this.state.mixRatio < max || val < 0)){
					this.setState({mixRatio: Math.round((this.state.mixRatio + val) * 10) /10});
					var structure = tankStructure(0, this.state.mixRatio + val, this.state.tankDiameter, this.state.tankLength, this.state.structuralDensity)
					var thermo = engineThermo(0, this.state.mixRatio + val, this.state.enginePressure, this.state.nozzleLength, this.state.massRate);
					this.setState({performance: thermo, massData: structure});
				}
				break;
			case 4:
				if ((this.state.enginePressure > min || val > 0) && (this.state.enginePressure < max || val < 0)){
					this.setState({enginePressure: this.state.enginePressure + val});
					var thermo = engineThermo(0, this.state.mixRatio, this.state.enginePressure + val, this.state.nozzleLength, this.state.massRate);
					this.setState({performance: thermo});
				}
				break;
			case 5:
				if ((this.state.nozzleLength > min || val > 0) && (this.state.nozzleLength < max || val < 0)){
					this.setState({nozzleLength: Math.round((this.state.nozzleLength + val) * 10) /10});
					var thermo = engineThermo(0, this.state.mixRatio, this.state.enginePressure, this.state.nozzleLength + val, this.state.massRate);
					this.setState({performance: thermo});
				}
				break;
		}

		var c = document.getElementById("rocket-canvas");
    	var ctx = c.getContext("2d");
		ctx.imageSmoothingEnabled = false;
		ctx.mozImageSmoothingEnabled = false;
		ctx.imageSmoothingEnabled = false; 
    	var img = new Image(117, 280);
    	img.src = "10MLG.png";
    	ctx.drawImage(img,0,0, 234, 560);
	},

	handleUserSelect(index, val){
		switch(index){
			case 0:
				this.setState({selectDiameter: val + " Meter Diameter"});
					this.setState({
						tankLength: val * 3,
						tankDiameter: val,
						structuralDensity: 20
					});
				break;
			case 1:
				this.setState({selectFuel: val + "  1"});
				break;
			case 2:
				this.setState({selectMatStruct: val + "  2"});
				break;
			case 3:
				this.setState({SelectMatEng: val + "  3"});
				break;
		}
	},

	handleReset(){
		this.setState({
			tankLength: 0,
			tankDiameter: 0,
			structuralDensity: 0,
			massRate: 0,
			mixRatio: 0,
			enginePressure: 0,
			nozzleLength: 0,
			performance: [0, 0, 0, 0, 0, 0, 0, 0],
			massData: [0.1, 0.1],
			buttonDisable: true,
			rocketImage: "10ML.png",
			selectDiameter: "Stage Diameter",
			selectFuel: "Fuel/Oxidizer Type",
			selectMatStruct: "Structural Material",
			SelectMatEng: "Engine Material"
		});
	},


	render(){
		return(
			<div>

				<div className="row row-1">
					<Build_11 />

					<Build_12 performance={this.state.performance}
							  massData={this.state.massData}/>

					<Build_13 
					tankMass={this.state.tankMass}
					engineMass={this.state.engineMass}
					fuelOxMass={this.state.fuelOxMass}
					totalMass={this.state.totalMass}/>

				</div>{/* row one ends */}

				<div className="row row-2">
					<Build_21 />			

					<Build_22 	tankLength={this.state.tankLength} 
								structuralDensity={this.state.structuralDensity} 
								massRate={this.state.massRate} 
								mixRatio={this.state.mixRatio} 
								enginePressure={this.state.enginePressure} 
								nozzleLength={this.state.nozzleLength}
								buttonDisable={this.state.buttonDisable}
								selectDiameter={this.state.selectDiameter}
								selectFuel={this.state.selectFuel}
								selectMatStruct={this.state.selectMatStruct}
								SelectMatEng={this.state.SelectMatEng}
								onUserSelect={this.handleUserSelect}
								onUserInput={this.handleUserInput}/>

					<Build_23 onUserReset={this.handleReset}/>
				</div>{/* row two ends */}		
			</div>
			)
	}
});
