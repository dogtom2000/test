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
			dropdownStatus: [true, false, false, false, false, false],

			buttonStatus: [true, true, true, true, true, true],
			selectStatus: [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
			tankLength: ["---", "---", "---", "---", "---", "---"],
			tankDiameter: ["---", "---", "---", "---", "---", "---"],
			structuralDensity: ["---", "---", "---", "---", "---", "---"],
			massRate: ["---", "---", "---", "---", "---", "---"],
			mixRatio: ["---", "---", "---", "---", "---", "---"],
			enginePressure: ["---", "---", "---", "---", "---", "---"],
			nozzleLength: ["---", "---", "---", "---", "---", "---"],

			performance: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],

			tankStats: [[0.1, 0.1], [0.1, 0.1], [0.1, 0.1], [0.1, 0.1], [0.1, 0.1], [0.1, 0.1]],

			selectDiameter: ["Stage Diameter", "Stage Diameter", "Stage Diameter", "Stage Diameter", "Stage Diameter", "Stage Diameter"],
			selectFuel: ["Fuel/Oxidizer Type", "Fuel/Oxidizer Type", "Fuel/Oxidizer Type", "Fuel/Oxidizer Type", "Fuel/Oxidizer Type", "Fuel/Oxidizer Type"],
			selectMatStruct: ["Structural Material", "Structural Material", "Structural Material", "Structural Material", "Structural Material", "Structural Material"],
			SelectMatEng: ["Engine Material", "Engine Material", "Engine Material", "Engine Material", "Engine Material", "Engine Material"],

			rocketImage: [["default.png"],["default.png"],["default.png"],["default.png"],["default.png"],["default.png"]],
		};
	},

	buttonInput(index, val, min, max) {
			var tankLengthArray = this.state.tankLength;
			var structuralDensityArray = this.state.structuralDensity;
			var massRateArray = this.state.massRate;
			var mixRatioArray = this.state.mixRatio;
			var enginePressureArray = this.state.enginePressure;
			var nozzleLengthArray = this.state.nozzleLength;
			var performanceArray = this.state.performance;
			var tankStatsArray = this.state.tankStats;

			var tankLengthValue = tankLengthArray[this.state.stageCurrent];
			var tankDiameterValue = this.state.tankDiameter[this.state.stageCurrent];
			var structuralDensityValue = structuralDensityArray[this.state.stageCurrent];
			var massRateValue = massRateArray[this.state.stageCurrent];
			var mixRatioValue = mixRatioArray[this.state.stageCurrent];
			var enginePressureValue = enginePressureArray[this.state.stageCurrent];
			var nozzleLengthValue = nozzleLengthArray[this.state.stageCurrent];
		switch (index){
			case 0:
				if ((tankLengthValue > min || val > 0) && (tankLengthValue < max || val < 0)){
					tankLengthValue = Math.round((tankLengthValue + val) * 10) / 10;
					tankLengthArray[this.state.stageCurrent] = tankLengthValue;
					tankStatsArray[this.state.stageCurrent] = tankCalc(0, mixRatioValue, tankDiameterValue, tankLengthValue, structuralDensityValue);
					this.setState({
						tankLength: tankLengthArray,
						tankStats: tankStatsArray
					});		
				}
				break;
			case 1:
				if ((structuralDensityValue > min || val > 0) && (structuralDensityValue < max || val < 0)){
					structuralDensityValue = Math.round((structuralDensityValue + val) * 10) / 10;
					structuralDensityArray[this.state.stageCurrent] = structuralDensityValue;
					tankStatsArray[this.state.stageCurrent] = tankCalc(0, mixRatioValue, tankDiameterValue, tankLengthValue, structuralDensityValue);
					this.setState({
						structuralDensity: structuralDensityArray,
						tankStats: tankStatsArray
					});		
				}
				break;
			case 2:
				if ((massRateValue > min || val > 0) && (massRateValue < max || val < 0)){
					massRateValue = Math.round((massRateValue + val) * 10) / 10;
					massRateArray[this.state.stageCurrent] = massRateValue;
					performanceArray[this.state.stageCurrent] = thermodynamics(0, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);
					this.setState({
						massRate: massRateArray,
						performance: performanceArray
					});		
				}
				break;
			case 3:
				if ((mixRatioValue > min || val > 0) && (mixRatioValue < max || val < 0)){
					mixRatioValue = Math.round((mixRatioValue + val) * 10) / 10;
					mixRatioArray[this.state.stageCurrent] = mixRatioValue;
					tankStatsArray[this.state.stageCurrent] = tankCalc(0, mixRatioValue, tankDiameterValue, tankLengthValue, structuralDensityValue);
					performanceArray[this.state.stageCurrent] = thermodynamics(0, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);
					this.setState({
						mixRatio: mixRatioArray,
						performance: performanceArray,
						tankStats: tankStatsArray
					});		
				}
				break;
			case 4:
				if ((enginePressureValue > min || val > 0) && (enginePressureValue < max || val < 0)){
					enginePressureValue = Math.round((enginePressureValue + val) * 10) / 10;
					enginePressureArray[this.state.stageCurrent] = enginePressureValue;
					performanceArray[this.state.stageCurrent] = thermodynamics(0, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);
					this.setState({
						enginePressure: enginePressureArray,
						performance: performanceArray
					});		
				}
				break;
			case 5:
				if ((nozzleLengthValue > min || val > 0) && (nozzleLengthValue < max || val < 0)){
					nozzleLengthValue = Math.round((nozzleLengthValue + val) * 10) / 10;
					nozzleLengthArray[this.state.stageCurrent] = nozzleLengthValue;
					performanceArray[this.state.stageCurrent] = thermodynamics(0, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);
					this.setState({
						nozzleLength: nozzleLengthArray,
						performance: performanceArray
					});		
				}
				break;
		}
	},

	dropdownInput(index, val){
		switch(index){
			case 0:
				var selectDiameterArray = this.state.selectDiameter;
				var tankDiameterArray = this.state.tankDiameter;
				var rocketImageArray = this.state.rocketImage;
				selectDiameterArray[this.state.stageCurrent] = val + " Meter Diameter";
				tankDiameterArray[this.state.stageCurrent] = val;
				switch(val){
					case 4:
						rocketImageArray[this.state.stageCurrent] = "4MC.png"
						break;
					case 7:
						rocketImageArray[this.state.stageCurrent] = "7MS.png"
						break;
					case 10:
						rocketImageArray[this.state.stageCurrent] = "10ML.png"
						break;
				}
				this.setState({				
					selectDiameter: selectDiameterArray,
					tankDiameter: tankDiameterArray,
					rocketImage: rocketImageArray
				});
				break;
			case 1:
				var selectFuelArray = this.state.selectFuel;
				selectFuelArray[this.state.stageCurrent] = "Selected";
				this.setState({
					selectFuel: selectFuelArray,
				});
				break;
			case 2:
				var selectMatStructArray = this.state.selectMatStruct;
				selectMatStructArray[this.state.stageCurrent] = "Selected";
				this.setState({
					selectMatStruct: selectMatStructArray,
				});
				break;
			case 3:
				var selectMatEngArray = this.state.SelectMatEng;
				selectMatEngArray[this.state.stageCurrent] = "Selected";
				this.setState({
					SelectMatEng: selectMatEngArray,
				});
				break;

		}
			var selectStatusArray = this.state.selectStatus;
			selectStatusArray[this.state.stageCurrent][index] = 1;
			if (selectStatusArray[this.state.stageCurrent].indexOf(0) == -1){
				var buttonStatusArray = this.state.buttonStatus;
				var dropdownStatusArray = this.state.dropdownStatus;
				buttonStatusArray[this.state.stageCurrent] = false;
				dropdownStatusArray[this.state.stageCurrent] = true;
				
				var tankLengthArray = this.state.tankLength;
				var structuralDensityArray = this.state.structuralDensity;
				var massRateArray = this.state.massRate;
				var mixRatioArray = this.state.mixRatio;
				var enginePressureArray = this.state.enginePressure;
				var nozzleLengthArray = this.state.nozzleLength;
				var performanceArray = this.state.performance;
				var tankStatsArray = this.state.tankStats;

				var tankLengthValue = 20;
				var tankDiameterValue = this.state.tankDiameter[this.state.stageCurrent];
				var structuralDensityValue = 20;
				var massRateValue = 200;
				var mixRatioValue = 6;
				var enginePressureValue = 50;
				var nozzleLengthValue = 5;	

				tankLengthArray[this.state.stageCurrent] = tankLengthValue;
				structuralDensityArray[this.state.stageCurrent] = structuralDensityValue;
				massRateArray[this.state.stageCurrent] = massRateValue;
				mixRatioArray[this.state.stageCurrent] = mixRatioValue;
				enginePressureArray[this.state.stageCurrent] = enginePressureValue;
				nozzleLengthArray[this.state.stageCurrent] = nozzleLengthValue;
				tankStatsArray[this.state.stageCurrent] = tankCalc(0, mixRatioValue, tankDiameterValue, tankLengthValue, structuralDensityValue);
				performanceArray[this.state.stageCurrent] = thermodynamics(0, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);

				this.setState({
					performance: performanceArray,
					tankStats: tankStatsArray,
					tankLength: tankLengthArray,
					structuralDensity: structuralDensityArray,
					massRate: massRateArray,
					mixRatio: mixRatioArray,
					enginePressure: enginePressureArray,
					nozzleLength: nozzleLengthArray,
					buttonStatus: buttonStatusArray,
					dropdownStatus: dropdownStatusArray
				});
			}	
			this.setState({
				selectStatus: selectStatusArray,
			});
	},

	resetInput(){
		this.setState({
			stageCount: 0,
			stageCurrent: 0,
			stageButton: [["Add Stage", false, "btn btn-block btn-primary", false], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], [, true]],
			dropdownStatus: [true, false, false, false, false, false],

			buttonStatus: [true, true, true, true, true, true],
			selectStatus: [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
			tankLength: ["---", "---", "---", "---", "---", "---"],
			tankDiameter: ["---", "---", "---", "---", "---", "---"],
			structuralDensity: ["---", "---", "---", "---", "---", "---"],
			massRate: ["---", "---", "---", "---", "---", "---"],
			mixRatio: ["---", "---", "---", "---", "---", "---"],
			enginePressure: ["---", "---", "---", "---", "---", "---"],
			nozzleLength: ["---", "---", "---", "---", "---", "---"],

			performance: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],

			tankStats: [[0.1, 0.1], [0.1, 0.1], [0.1, 0.1], [0.1, 0.1], [0.1, 0.1], [0.1, 0.1]],

			selectDiameter: ["Stage Diameter", "Stage Diameter", "Stage Diameter", "Stage Diameter", "Stage Diameter", "Stage Diameter"],
			selectFuel: ["Fuel/Oxidizer Type", "Fuel/Oxidizer Type", "Fuel/Oxidizer Type", "Fuel/Oxidizer Type", "Fuel/Oxidizer Type", "Fuel/Oxidizer Type"],
			selectMatStruct: ["Structural Material", "Structural Material", "Structural Material", "Structural Material", "Structural Material", "Structural Material"],
			SelectMatEng: ["Engine Material", "Engine Material", "Engine Material", "Engine Material", "Engine Material", "Engine Material"],

			rocketImage: [["default.png"],["default.png"],["default.png"],["default.png"],["default.png"],["default.png"]],
		});
	},

	stageButtonInput(val){
		var stageCountValue = this.state.stageCount;
		var stageButtonArray = this.state.stageButton;
		if (stageButtonArray[0][3] == false){
			var dropdownStatusArray = this.state.dropdownStatus;
			dropdownStatusArray[this.state.stageCurrent] = false;
			stageButtonArray[0][3] = true;
			stageButtonArray[0][0] = "Stage 1";
			stageButtonArray[0][2] = "btn btn-block btn-info";
			stageButtonArray[1][1] = false;
			this.setState({
				stage: stageCountValue,
				stageButton: stageButtonArray,
				dropdownStatus: dropdownStatusArray,
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

					<Build_12 	performance={this.state.performance[this.state.stageCurrent]}
							  	tankStats={this.state.tankStats[this.state.stageCurrent]}
							  	image={this.state.rocketImage[this.state.stageCurrent]}/>

					<Build_13 />

				</div>{/* row one ends */}

				<div className="row row-2">

					<Build_21 />			

					<Build_22 	tankLength={this.state.tankLength[this.state.stageCurrent]} 
								structuralDensity={this.state.structuralDensity[this.state.stageCurrent]} 
								massRate={this.state.massRate[this.state.stageCurrent]} 
								mixRatio={this.state.mixRatio[this.state.stageCurrent]} 
								enginePressure={this.state.enginePressure[this.state.stageCurrent]} 
								nozzleLength={this.state.nozzleLength[this.state.stageCurrent]}
								buttonStatus={this.state.buttonStatus[this.state.stageCurrent]}
								dropdownStatus={this.state.dropdownStatus[this.state.stageCurrent]}
								selectDiameter={this.state.selectDiameter[this.state.stageCurrent]}
								selectFuel={this.state.selectFuel[this.state.stageCurrent]}
								selectMatStruct={this.state.selectMatStruct[this.state.stageCurrent]}
								SelectMatEng={this.state.SelectMatEng[this.state.stageCurrent]}
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
