Fuel = new Mongo.Collection("fuel");

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

			fuel: ["","","","","",""],
			buttonStatus: [true, true, true, true, true, true],
			submitStatus: [true, true, true, true, true, true],
			clearStatus: [true, true, true, true, true, true],
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
			selectMatEng: ["Engine Material", "Engine Material", "Engine Material", "Engine Material", "Engine Material", "Engine Material"],

			rocketType: ["default","default","default","default","default","default"],
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
			var fuelValue = Fuel.find({name: this.state.fuel[this.state.stageCurrent]}).fetch()[0];
			console.log(mixRatioValue)
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
					performanceArray[this.state.stageCurrent] = thermodynamics(fuelValue, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);
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
					performanceArray[this.state.stageCurrent] = thermodynamics(fuelValue, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);
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
					performanceArray[this.state.stageCurrent] = thermodynamics(fuelValue, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);
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
					performanceArray[this.state.stageCurrent] = thermodynamics(fuelValue, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);
					this.setState({
						nozzleLength: nozzleLengthArray,
						performance: performanceArray
					});		
				}
				break;
		}
	},

	dropdownInput(index, val, val2){
		switch(index){
			case 0:
				var selectDiameterArray = this.state.selectDiameter;
				var tankDiameterArray = this.state.tankDiameter;
				var rocketTypeArray = this.state.rocketType;
				selectDiameterArray[this.state.stageCurrent] = val2 + " Meter Diameter";
				tankDiameterArray[this.state.stageCurrent] = val2;
				rocketTypeArray[this.state.stageCurrent] = val;
	
				this.setState({				
					selectDiameter: selectDiameterArray,
					tankDiameter: tankDiameterArray,
					rocketType: rocketTypeArray
				});
				break;
			case 1:
				var selectFuelArray = this.state.selectFuel;
				var fuelArray = this.state.fuel;
				selectFuelArray[this.state.stageCurrent] = "Selected";
				switch(val){
					case "LH2 LOX":
						selectFuelArray[this.state.stageCurrent] = "LH2 LOX"
						var fuelValue = "LH2"
						break;
					case "RP1 LOX":
						selectFuelArray[this.state.stageCurrent] = "RP1 LOX"
						var fuelValue = "RP1"
						break;
					case "Aerozine 50 N2O4":
						selectFuelArray[this.state.stageCurrent] = "Aerozine 50 N2O4"
						var fuelValue = "H4N2"
						break;
					case "Solid Rocket Fuel":
						selectFuelArray[this.state.stageCurrent] = "Solid Rocket Fuel"
						var fuelValue = "SRF"
						break;
				}
				fuelArray[this.state.stageCurrent] = fuelValue;
				this.setState({
					selectFuel: selectFuelArray,
					fuel: fuelArray
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
				var selectMatEngArray = this.state.selectMatEng;
				selectMatEngArray[this.state.stageCurrent] = "Selected";
				this.setState({
					selectMatEng: selectMatEngArray,
				});
				break;

		}
			var selectStatusArray = this.state.selectStatus;
			var clearStatusArray = this.state.clearStatus;

			selectStatusArray[this.state.stageCurrent][index] = 1;
			if (selectStatusArray[this.state.stageCurrent].indexOf(0) == -1){
			var submitStatusArray = this.state.submitStatus;
			submitStatusArray[this.state.stageCurrent] = false;
			this.setState({
				submitStatus: submitStatusArray,
			});
			}
			if (selectStatusArray[this.state.stageCurrent].indexOf(1) !== -1){	
				clearStatusArray[this.state.stageCurrent] = false;
			}
			this.setState({
				selectStatus: selectStatusArray,
				clearStatus: clearStatusArray
			});
	},

	clearStage(){

			fuelArray = this.state.fuel;
			buttonStatusArray = this.state.buttonStatus;
			submitStatusArray = this.state.submitStatus;
			clearStatusArray = this.state.clearStatus;
			selectStatusArray = this.state.selectStatus;
			tankLengthArray = this.state.tankLength;
			tankDiameterArray = this.state.tankDiameter;
			structuralDensityArray = this.state.structuralDensity;
			massRateArray = this.state.massRate;
			mixRatioArray = this.state.mixRatio;
			enginePressureArray = this.state.enginePressure;
			nozzleLengthArray = this.state.nozzleLength;
			performanceArray = this.state.performance;
			tankStatsArray = this.state.tankStats;
			selectDiameterArray = this.state.selectDiameter;
			selectFuelArray = this.state.selectFuel;
			selectMatStructArray = this.state.selectMatStruct;
			selectMatEngArray = this.state.selectMatEng;
			rocketTypeArray = this.state.rocketType;
			dropdownStatusArray = this.state.dropdownStatus;


			fuelArray[this.state.stageCurrent] = "";
			buttonStatusArray[this.state.stageCurrent] = true;
			submitStatusArray[this.state.stageCurrent] = true;
			clearStatusArray[this.state.stageCurrent] =  true;
			selectStatusArray[this.state.stageCurrent] = [0,0,0,0];
			tankLengthArray[this.state.stageCurrent] = "---";
			tankDiameterArray[this.state.stageCurrent] = "---";
			structuralDensityArray[this.state.stageCurrent] = "---";
			massRateArray[this.state.stageCurrent] = "---";
			mixRatioArray[this.state.stageCurrent] = "---";
			enginePressureArray[this.state.stageCurrent] = "---";
			nozzleLengthArray[this.state.stageCurrent] = "---";
			performanceArray[this.state.stageCurrent] = [0, 0, 0, 0, 0, 0, 0, 0];
			tankStatsArray[this.state.stageCurrent] = [0.1, 0.1];
			selectDiameterArray[this.state.stageCurrent] = "Stage Diameter";
			selectFuelArray[this.state.stageCurrent] = "Fuel/Oxidizer Type";
			selectMatStructArray[this.state.stageCurrent] = "Structural Material";
			selectMatEngArray[this.state.stageCurrent] = "Engine Material";
			rocketTypeArray[this.state.stageCurrent] = "default";
			dropdownStatusArray[this.state.stageCurrent] = false;

			this.setState({
				fuel: fuelArray,
				buttonStatus: buttonStatusArray,
				submitStatus: submitStatusArray,
				clearStatus: clearStatusArray,
				selectStatus: selectStatusArray,
				tankLength: tankLengthArray,
				tankDiameter: tankDiameterArray,
				structuralDensity: structuralDensityArray,
				massRate: massRateArray,
				mixRatio: mixRatioArray,
				enginePressure: enginePressureArray,
				nozzleLength: nozzleLengthArray,
				performance: performanceArray,
				tankStats: tankStatsArray,
				selectDiameter: selectDiameterArray,
				selectFuel: selectFuelArray,
				selectMatStruct: selectMatStructArray,
				selectMatEng: selectMatEngArray,
				rocketType: rocketTypeArray, 
				dropdownStatus: dropdownStatusArray
			});
	},

	submitStage(){
				var initialTank = {
					"4MC": [12, 4, 25, 40, 2],
					"7MS": [21, 7, 25, 200, 4],
					"10ML": [30, 10, 25, 2600, 6]
				};
				var initialFuel = {
					"LH2": 5.5,
					"RP1": 2.3,
					"H4N2": 1.9,
					"SRF": 2.1
				};

				var buttonStatusArray = this.state.buttonStatus;
				var dropdownStatusArray = this.state.dropdownStatus;
				buttonStatusArray[this.state.stageCurrent] = false;
				dropdownStatusArray[this.state.stageCurrent] = true;

				var fuelValue = Fuel.find({name: this.state.fuel[this.state.stageCurrent]}).fetch()[0];
				var tankLengthArray = this.state.tankLength;
				var structuralDensityArray = this.state.structuralDensity;
				var massRateArray = this.state.massRate;
				var mixRatioArray = this.state.mixRatio;
				var enginePressureArray = this.state.enginePressure;
				var nozzleLengthArray = this.state.nozzleLength;
				var performanceArray = this.state.performance;
				var tankStatsArray = this.state.tankStats;

				var tankLengthValue = initialTank[this.state.rocketType[this.state.stageCurrent]][0];
				var tankDiameterValue = initialTank[this.state.rocketType[this.state.stageCurrent]][1];
				var structuralDensityValue = initialTank[this.state.rocketType[this.state.stageCurrent]][2];
				var massRateValue = initialTank[this.state.rocketType[this.state.stageCurrent]][3];
				var mixRatioValue = initialFuel[this.state.fuel[this.state.stageCurrent]];
				var enginePressureValue = 50;
				var nozzleLengthValue = initialTank[this.state.rocketType[this.state.stageCurrent]][4];

				tankLengthArray[this.state.stageCurrent] = tankLengthValue;
				structuralDensityArray[this.state.stageCurrent] = structuralDensityValue;
				massRateArray[this.state.stageCurrent] = massRateValue;
				mixRatioArray[this.state.stageCurrent] = mixRatioValue;
				enginePressureArray[this.state.stageCurrent] = enginePressureValue;
				nozzleLengthArray[this.state.stageCurrent] = nozzleLengthValue;
				tankStatsArray[this.state.stageCurrent] = tankCalc(0, mixRatioValue, tankDiameterValue, tankLengthValue, structuralDensityValue);
				performanceArray[this.state.stageCurrent] = thermodynamics(fuelValue, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);

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
	},

	resetInput(){
		this.setState({
			stageCount: 0,
			stageCurrent: 0,
			stageButton: [["Add Stage", false, "btn btn-block btn-primary", false], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], ["Add Stage", true, "btn btn-block btn-primary"], [, true]],
			dropdownStatus: [true, false, false, false, false, false],

			fuel: ["","","","","",""],
			buttonStatus: [true, true, true, true, true, true],
			submitStatus: [true, true, true, true, true, true],
			clearStatus: [true, true, true, true, true, true],
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
			selectMatEng: ["Engine Material", "Engine Material", "Engine Material", "Engine Material", "Engine Material", "Engine Material"],

			rocketType: ["default","default","default","default","default","default"],
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
							  	rocketType={this.state.rocketType[this.state.stageCurrent]}/>

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
								selectMatEng={this.state.selectMatEng[this.state.stageCurrent]}
								userDropdownInput={this.dropdownInput}
								userButtonInput={this.buttonInput}
								userSubmitStage={this.submitStage}
								userClearStage={this.clearStage}
								submitStatus={this.state.submitStatus[this.state.stageCurrent]}
								clearStatus={this.state.clearStatus[this.state.stageCurrent]}/>

					<Build_23 	stageButton={this.state.stageButton}
								userStageButtonInput={this.stageButtonInput}
								userInputReset={this.resetInput}/>

				</div>{/* row two ends */}		
			</div>
			)
	}
});
