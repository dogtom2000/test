BuildPage = React.createClass({
	
	mixins: [ReactMeteorData],

	getMeteorData() {

		return {
		}
	},

	getInitialState() {

		return {
			stageCount: 0,
			stageCurrent: 0,
			stageButton: [["Add Stage", false, "btn btn-block btn-primary", false], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], [, true]],
			dropdownStatus: true,
			buttonStatus: true,


			tankLength: ["---"],
			tankDiameter: [],
			structuralDensity: ["---"],
			massRate: ["---"],
			mixRatio: ["---"],
			enginePressure: ["---"],
			nozzleLength: ["---"],

			performance: [0, 0, 0, 0, 0, 0, 0, 0],

			tankStats: [0.1, 0.1],

			selectDiameter: "Stage Diameter",
			selectFuel: "Fuel/Oxidizer Type",
			selectMatStruct: "Structural Material",
			SelectMatEng: "Engine Material"
		};
	},

	buttonInput(index, val, min, max) {
		switch (index){
			case 0:
				if ((this.state.tankLength > min || val > 0) && (this.state.tankLength < max || val < 0)){
					var tankLengthArray = this.state.tankLength;
					tankLengthArray[this.state.stage] = Math.round((tankLengthArray[this.state.stage] + val) * 10) / 10;
					this.setState({
						tankLength: tankLengthArray,
						tankStats: tankCalc(0, this.state.mixRatio[this.state.stage], this.state.tankDiameter[this.state.stage], tankLengthArray[this.state.stage], this.state.structuralDensity[this.state.stage])
					});		
				}
				break;
			case 1:
				if ((this.state.structuralDensity > min || val > 0) && (this.state.structuralDensity < max || val < 0)){
					var structuralDensityArray = this.state.structuralDensity;
					structuralDensityArray[this.state.stage] = Math.round((structuralDensityArray[this.state.stage] + val) * 10) / 10;
					this.setState({				
						structuralDensity: structuralDensityArray,
						tankStats: tankCalc(0, this.state.mixRatio[this.state.stage], this.state.tankDiameter[this.state.stage], this.state.tankLength[this.state.stage], structuralDensityArray[this.state.stage]),
					});
				}
				break;
			case 2:
				if ((this.state.massRate > min || val > 0) && (this.state.massRate < max || val < 0)){
					var massRateArray = this.state.massRate;
					massRateArray[this.state.stage] = Math.round((massRateArray[this.state.stage] + val) * 10) / 10;
					this.setState({
						massRate: massRateArray,
						performance: thermodynamics(0, this.state.mixRatio[this.state.stage], this.state.enginePressure[this.state.stage], this.state.nozzleLength[this.state.stage], massRateArray[this.state.stage])
					});
				}
				break;
			case 3:
				if ((this.state.mixRatio > min || val > 0) && (this.state.mixRatio < max || val < 0)){
					var mixRatioArray = this.state.mixRatio;
					mixRatioArray[this.state.stage] = Math.round((mixRatioArray[this.state.stage] + val) * 10) / 10;
					this.setState({
						mixRatio: mixRatioArray,
						performance: thermodynamics(0, mixRatioArray[this.state.stage], this.state.enginePressure[this.state.stage], this.state.nozzleLength[this.state.stage], this.state.massRate[this.state.stage]),
						tankStats: tankCalc(0, mixRatioArray[this.state.stage], this.state.tankDiameter[this.state.stage], this.state.tankLength[this.state.stage], this.state.structuralDensity[this.state.stage])
					});
				}
				break;
			case 4:
				if ((this.state.enginePressure > min || val > 0) && (this.state.enginePressure < max || val < 0)){
					var enginePressureArray = this.state.enginePressure;
					enginePressureArray[this.state.stage] = Math.round((enginePressureArray[this.state.stage] + val) * 10) / 10;
					this.setState({
						enginePressure: enginePressureArray,
						performance: thermodynamics(0, this.state.mixRatio[this.state.stage], enginePressureArray[this.state.stage], this.state.nozzleLength[this.state.stage], this.state.massRate[this.state.stage])
					});
				}
				break;
			case 5:
				if ((this.state.nozzleLength > min || val > 0) && (this.state.nozzleLength < max || val < 0)){
					var nozzleLengthArray = this.state.nozzleLength;
					nozzleLengthArray[this.state.stage] = Math.round((nozzleLengthArray[this.state.stage] + val) * 10) / 10;
					this.setState({
						nozzleLength: nozzleLengthArray,
						performance: thermodynamics(0, this.state.mixRatio[this.state.stage], this.state.enginePressure[this.state.stage], nozzleLengthArray[this.state.stage], this.state.massRate[this.state.stage])
					});
				}
				break;
		}

		//var c = document.getElementById("rocket-canvas");
    	//var ctx = c.getContext("2d");
		//ctx.imageSmoothingEnabled = false;
		//ctx.mozImageSmoothingEnabled = false;
		//ctx.imageSmoothingEnabled = false; 
    	//var img = new Image(117, 280);
    	//img.src = "10MLG.png";
    	//ctx.drawImage(img,0,0, 234, 560);
	},

	dropdownInput(index, val){
		switch(index){
			case 0:
				this.setState({
					selectDiameter: val + " Meter Diameter",
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

	resetInput(){
		this.setState({
			stageCount: 0,
			stageCurrent: 0,
			stageButton: [["Add Stage", false, "btn btn-block btn-primary", false], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], [, true]],
			dropdownStatus: true,
			buttonStatus: true,


			tankLength: ["---"],
			tankDiameter: [],
			structuralDensity: ["---"],
			massRate: ["---"],
			mixRatio: ["---"],
			enginePressure: ["---"],
			nozzleLength: ["---"],

			performance: [0, 0, 0, 0, 0, 0, 0, 0],

			tankStats: [0.1, 0.1],

			selectDiameter: "Stage Diameter",
			selectFuel: "Fuel/Oxidizer Type",
			selectMatStruct: "Structural Material",
			SelectMatEng: "Engine Material"
		});
	},

	stageButtonInput(val){
		var stageCountValue = this.state.stageCount;
		var stageButtonArray = this.state.stageButton;
		if (stageButtonArray[0][3] == false){
			stageButtonArray[0][3] = true;
			stageButtonArray[0][0] = "Stage 1";
			stageButtonArray[0][2] = "btn btn-block btn-info";
			stageButtonArray[1][1] = false;
			this.setState({
				stage: stageCountValue,
				stageButton: stageButtonArray,
			});
		} else if (stageCountValue < 5 && stageButtonArray[val + 1][1] == true){
			stageButtonArray[val + 1][1] = false;
			stageButtonArray[this.state.stageCurrent][2] = "btn btn-block btn-primary";
			stageButtonArray[val][2] = "btn btn-block btn-info";
			stageCountValue++;
				for (var i = 0; i <= stageCountValue ; i++){

					stageButtonArray[i][0] = "Stage " + (stageCountValue + 1 - i);

				}
			this.setState({
				stageCount: stageCountValue,
				stageCurrent: val,
				stageButton: stageButtonArray,
			});
		} else {
			stageButtonArray[this.state.stageCurrent][2] = "btn btn-block btn-primary";
			stageButtonArray[val][2] = "btn btn-block btn-info";
			this.setState({
				stageCurrent: val,
			});
		}
	},

	render(){
		return(
			<div>

				<div className="row row-1">

					<Build_11 />

					<Build_12 	performance={this.state.performance}
							  	tankStats={this.state.tankStats}/>

					<Build_13 />

				</div>{/* row one ends */}

				<div className="row row-2">

					<Build_21 />			

					<Build_22 	tankLength={this.state.tankLength} 
								structuralDensity={this.state.structuralDensity} 
								massRate={this.state.massRate} 
								mixRatio={this.state.mixRatio} 
								enginePressure={this.state.enginePressure} 
								nozzleLength={this.state.nozzleLength}
								buttonStatus={this.state.buttonStatus}
								dropdownStatus={this.state.dropdownStatus}
								selectDiameter={this.state.selectDiameter}
								selectFuel={this.state.selectFuel}
								selectMatStruct={this.state.selectMatStruct}
								SelectMatEng={this.state.SelectMatEng}
								userDropdownInput={this.dropdownInput}
								userButtonInput={this.buttonInput}/>

					<Build_23 	stageButton={this.state.stageButton}
								userStageButtonInput={this.stageButtonInput}
								userInputReset={this.resetInput}/>

				</div>{/* row two ends */}		
			</div>
			)
	}
});
