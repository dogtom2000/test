BuildPage = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {

		return {
			fuel: Fuel.find().fetch(),
			parts: Parts.find().fetch(),
		}
	},

	getInitialState() {

		return {
			//stage control
			stageCount: 0,
			stageCurrent: 0,

			//button control
			addStatus: [[false, true, "Add Stage", "btn btn-block btn-primary"], [false, true, "Add Stage", "btn btn-block btn-primary"], [false, true, "Add Stage", "btn btn-block btn-primary"], [false, true, "Add Stage", "btn btn-block btn-primary"], [false, true, "Add Stage", "btn btn-block btn-primary"], [false, true, "Add Stage", "btn btn-block btn-primary"]],
			selectStatus: [true, false, false, false, false, false],
			modifyStatus: [true, true, true, true, true, true],
			submitStatus: [true, true, true, true, true, true],
			clearStatus: [true, true, true, true, true, true],
			typeStatus: true,

			//display control
			selectClass: "Unselected",
			selectParts: ["Unselected","Unselected","Unselected","Unselected","Unselected","Unselected"],
			buildStatus: "Build Rocket",
			rocketName: "Rocket Name",

			//property control	
			tankLength: ["---", "---", "---", "---", "---", "---"],
			tankDiameter: [0, 0, 0, 0, 0, 0],
			structuralDensity: ["---", "---", "---", "---", "---", "---"],
			fuelType: ["---", "---", "---", "---", "---", "---"],
			massRate: ["---", "---", "---", "---", "---", "---"],
			mixRatio: ["---", "---", "---", "---", "---", "---"],
			enginePressure: ["---", "---", "---", "---", "---", "---"],
			engineCount: [1, 1, 1, 1, 1, 1],
			nozzleLength: ["---", "---", "---", "---", "---", "---"],
			payloadSystem: {mass: 0},	

			//function control
			dataEngine: [],
			dataSummary: {
				thrust: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]],
				Isp: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]],
				TWR: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]],
				dV: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0], [0, 0]],
				mass: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]],
				reliability: [[[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [0, 0, 0, 0, 0]],
				cost: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]]
			},
		};
	},

	clearShip(){
		this.setState({
			stageCount: 0,
			stageCurrent: 0,
			builtRocket: {},

			//button control
			addStatus: [[false, true, "Add Stage", "btn btn-block btn-primary"], [false, true, "Add Stage", "btn btn-block btn-primary"], [false, true, "Add Stage", "btn btn-block btn-primary"], [false, true, "Add Stage", "btn btn-block btn-primary"], [false, true, "Add Stage", "btn btn-block btn-primary"], [false, true, "Add Stage", "btn btn-block btn-primary"]],
			selectStatus: [true, false, false, false, false, false],
			modifyStatus: [true, true, true, true, true, true],
			submitStatus: [true, true, true, true, true, true],
			clearStatus: [true, true, true, true, true, true],
			typeStatus: true,

			//display control
			selectClass: "Unselected",
			selectParts: ["Unselected","Unselected","Unselected","Unselected","Unselected","Unselected"],
			buildStatus: "Build Rocket",
			rocketName: "Rocket Name",

			//property control	
			tankLength: ["---", "---", "---", "---", "---", "---"],
			tankDiameter: [0, 0, 0, 0, 0, 0],
			structuralDensity: ["---", "---", "---", "---", "---", "---"],
			fuelType: ["---", "---", "---", "---", "---", "---"],
			massRate: ["---", "---", "---", "---", "---", "---"],
			mixRatio: ["---", "---", "---", "---", "---", "---"],
			enginePressure: ["---", "---", "---", "---", "---", "---"],
			engineCount: [1, 1, 1, 1, 1, 1],
			nozzleLength: ["---", "---", "---", "---", "---", "---"],
			payloadSystem: {mass: 0},	
		

			//function control
			dataEngine: [],
			dataSummary: {
				thrust: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]],
				Isp: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]],
				TWR: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]],
				dV: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0], [0, 0]],
				mass: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]],
				reliability: [[[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [0, 0, 0, 0, 0]],
				cost: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]]
			},
		});
	},

	buildRocket(){
		var rocketStages = {};
		var rocketStageCount = 0;
		var futureStageMass = this.state.payloadSystem.mass;
		for(var i=0; i < 6; i++){
			if (this.state.dataSummary["dV"][i][0] > 0 && rocketStageCount == i){
				rocketStages[i + 1] = [[this.state.dataSummary["mass"][i][0], this.state.dataSummary["mass"][i][0]], this.state.dataSummary["mass"][i][3] - this.state.dataSummary["mass"][i][0], futureStageMass, 0.2, this.state.tankDiameter[i], this.state.dataSummary["thrust"][i][0], this.state.dataSummary["Isp"][i][0]];			
				rocketStageCount++;
				futureStageMass += this.state.dataSummary["mass"][i][3];
			}			
		}
		var Rocket = {};
		Rocket.name = this.state.rocketName;
		Rocket.stages = rocketStages;
		Rocket.stageCount = rocketStageCount;

		this.setState({
			buildStatus: rocketStageCount + " stages built",
			builtRocket: Rocket
		});
		
	},

	saveRocket(){
		Vehicle.insert(this.state.builtRocket);
	},

	returnInput(rocketName){
		this.setState({
			rocketName: rocketName.trim()
		});
	},

	addSystem(){
		var payloadSystemObject = this.state.payloadSystem;
		payloadSystemObject.mass = 30000;
	},

	addStage(){
		var prevStage = this.state.stageCurrent;
		var newStage = arguments[0];
		var addStatusArray = this.state.addStatus;
		var selectStatusArray = this.state.selectStatus;
		//(if) add initial stage
		//(else if) add last stage
		//(else if) add other stages
		//(else) select a previously added stage
		if (addStatusArray[newStage][0] == false && newStage == 0){
			addStatusArray[0][0] = true;
			addStatusArray[0][2] = "Stage 1";
			addStatusArray[0][3] = "btn btn-block btn-info";
			addStatusArray[1][1] = false;
			selectStatusArray[0] = false;
			this.setState({
				selectStatus: selectStatusArray,
				addStatus: addStatusArray,
				typeStatus: false
			});
		} else if (addStatusArray[newStage][0] == false && newStage == 5){
			addStatusArray[newStage][0] = true;
			addStatusArray[newStage][3] = "btn btn-block btn-info";
			addStatusArray[prevStage][3] = "btn btn-block btn-primary";
			for (var i = 0; i <= newStage ; i++){
				addStatusArray[i][2] = "Stage " + (newStage + 1 - i);
			}
			this.setState({
				stageCount: newStage,
				stageCurrent: newStage,
				addStatus: addStatusArray,
			});
		} else if (addStatusArray[newStage][0] == false){
			addStatusArray[newStage + 1][1] = false;
			addStatusArray[newStage][0] = true;
			addStatusArray[newStage][3] = "btn btn-block btn-info";
			addStatusArray[prevStage][3] = "btn btn-block btn-primary";
			for (var i = 0; i <= newStage ; i++){
				addStatusArray[i][2] = "Stage " + (newStage + 1 - i);
			}
			this.setState({
				stageCount: newStage,
				stageCurrent: newStage,
				addStatus: addStatusArray,
			});
		} else {
			addStatusArray[prevStage][3] = "btn btn-block btn-primary";
			addStatusArray[newStage][3] = "btn btn-block btn-info";		
			this.setState({
				addStatus: addStatusArray,
				stageCurrent: newStage,
			});
		}
	
	},

	selectStage(){
		//select rocket class
		//select stage part
		//select engine count
		//select fuel type
		var stage = this.state.stageCurrent;
		switch(arguments[0]){
			case 0:
				this.setState({
					selectClass: arguments[1],
					typeStatus: true
				});
				break;
			case 1:
				var selectPartsArray = this.state.selectParts;
				var submitStatusArray = this.state.submitStatus;
				selectPartsArray[stage] = arguments[1];
				if (this.state.fuelType[stage] !== "---"){
					submitStatusArray[stage] = false;
				} else {
					submitStatusArray[stage] = true;
				}
				this.setState({
					selectParts: selectPartsArray,
					submitStatus: submitStatusArray
				});
				break;
			case 2:
				var engineCountArray = this.state.engineCount;
				engineCountArray[stage] = arguments[1];
				this.setState({
					engineCount: engineCountArray
				});
				break;
			case 3:
				var fuelTypeArray = this.state.fuelType;
				var submitStatusArray = this.state.submitStatus;
				fuelTypeArray[stage] = arguments[1];
				if (this.state.selectParts[stage] !== "Unselected"){
					submitStatusArray[stage] = false;
				} else {
					submitStatusArray[stage] = true;
				}
				this.setState({
					fuelType: fuelTypeArray,
					submitStatus: submitStatusArray
				});
				break;
		}
	
	},

	submitStage(){
		var stage = this.state.stageCurrent;

		//database data
		var fuelTypeData = this.data.fuel.filter((obj) => obj.name == this.state.fuelType[stage])[0];
		var PartsData = this.data.parts.filter((obj) => obj.name == this.state.selectParts[stage])[0];

		//statuses to be updated		
		var selectStatusArray = this.state.selectStatus;
		var modifyStatusArray = this.state.modifyStatus;
		var submitStatusArray = this.state.submitStatus;
		var clearStatusArray = this.state.clearStatus;

		//properties to be updated
		var	tankLengthArray = this.state.tankLength;
		var	tankDiameterArray = this.state.tankDiameter;
		var	structuralDensityArray = this.state.structuralDensity;
		var	massRateArray = this.state.massRate;
		var	mixRatioArray = this.state.mixRatio;
		var	enginePressureArray = this.state.enginePressure;
		var	nozzleLengthArray = this.state.nozzleLength;
		var payloadSystemObject = this.state.payloadSystem;

		//functions to be updated
		var	dataEngineArray = this.state.dataEngine;

		//update values	
		selectStatusArray[stage] = true;
		modifyStatusArray[stage] = false;
		submitStatusArray[stage] = true;
		clearStatusArray[stage]	= false;


		tankLengthArray[stage] = PartsData["length"]; 
		tankDiameterArray[stage] = PartsData["diameter"]; 
		structuralDensityArray[stage] = PartsData["structuralDensity"]; 
		massRateArray[stage] = PartsData["massRate"]; 
		mixRatioArray[stage] = fuelTypeData["defaultMixRatio"]; 
		enginePressureArray[stage] = PartsData["enginePressure"]; 
		nozzleLengthArray[stage] = PartsData["nozzleLength"]; 
		dataEngineArray[stage] = engineFunc(this.state.engineCount[stage], fuelTypeData, mixRatioArray[stage], enginePressureArray[stage], nozzleLengthArray[stage], massRateArray[stage]);

		//update states
		this.setState({		
			selectStatus: selectStatusArray,
			modifyStatus: modifyStatusArray,
			submitStatus: submitStatusArray,
			clearStatus: clearStatusArray,	

			tankLength: tankLengthArray,
			tankDiameter: tankDiameterArray,
			structuralDensity: structuralDensityArray,
			massRate: massRateArray,
			mixRatio: mixRatioArray,
			enginePressure: enginePressureArray,
			nozzleLength :nozzleLengthArray,
			payloadSystem: payloadSystemObject,

			dataEngine: dataEngineArray,
			dataSummary: summaryFunc(stage, this.state.dataSummary, submitStatusArray[stage], tankLengthArray[stage], tankDiameterArray[stage], structuralDensityArray[stage], mixRatioArray[stage], enginePressureArray[stage], dataEngineArray[stage], this.state.fuelType[stage], payloadSystemObject),
		});
	
	},

	modifyStage(){
		var stage = this.state.stageCurrent;

		//database data
		var fuelTypeData = this.data.fuel.filter((obj) => obj.name == this.state.fuelType[stage])[0];

		//properties arrays
		var	tankLengthArray = this.state.tankLength;
		var	structuralDensityArray = this.state.structuralDensity;
		var	massRateArray = this.state.massRate;
		var	mixRatioArray = this.state.mixRatio;
		var	enginePressureArray = this.state.enginePressure;
		var	nozzleLengthArray = this.state.nozzleLength;

		//function arrays
		var	dataEngineArray = this.state.dataEngine;
		var	dataSummaryArray = this.state.dataSummary;
		var	dataSummaryArray = this.state.dataSummary;

		//property values
		var	tankLengthValue = tankLengthArray[stage];
		var	tankDiameterValue = this.state.tankDiameter[stage];
		var	structuralDensityValue = structuralDensityArray[stage];
		var	massRateValue = massRateArray[stage];
		var	mixRatioValue = mixRatioArray[stage];
		var	enginePressureValue = enginePressureArray[stage];
		var	nozzleLengthValue = nozzleLengthArray[stage];
		
		var sign = arguments[1];
		var val;
		var increment;
		var max;
		var min;

		switch(arguments[0]){
			case 0:
				val = tankLengthValue;
				switch (true){
					case (val < 10 || (val == 10 && sign < 0)):
						increment = 0.5;
						break;
					case ((val > 10 && val < 30) || (val == 10 && sign > 0) || (val == 30 && sign < 0)):
						increment = 1;
						break;
					case (val > 30 || (val == 30 && sign > 0)):
						increment = 2;
						break;
				}
				max = Math.pow(250 * tankDiameterValue, 0.5);
				min = Math.pow(20 * tankDiameterValue, 0.5);
				if ((val > min || sign > 0) && (val < max || sign < 0)){
					tankLengthValue = Math.round((tankLengthValue + sign * increment) * 10) / 10;
					tankLengthArray[stage] = tankLengthValue;
					this.setState({
						tankLength: tankLengthArray,
					});
					}
				break;
			case 1:
				val = structuralDensityValue;
				switch (true){
					case (val < 40 || (val == 40 && sign < 0)):
						increment = 2;
						break;
					case ((val > 40 && val < 80) || (val == 40 && sign > 0) || (val == 80 && sign < 0)):
						increment = 5;
						break;
					case (val > 80 || (val == 80 && sign > 0)):
						increment = 10;
						break;
				}
				max = 200;
				min = 10;
				if ((val > min || sign > 0) && (val < max || sign < 0)){
					structuralDensityValue = Math.round((structuralDensityValue + sign * increment) * 10) / 10;
					structuralDensityArray[stage] = structuralDensityValue;
					this.setState({
						structuralDensity: structuralDensityArray,
					});
					}
				break;
			case 2:
				val = massRateValue;
				switch (true){
					case (val < 50 || (val == 50 && sign < 0)):
						increment = 5;
						break;
					case ((val > 50 && val < 100) || (val == 50 && sign > 0) || (val == 100 && sign < 0)):
						increment = 10;
						break;
					case ((val > 100 && val < 500) || (val == 100 && sign > 0) || (val == 500 && sign < 0)):
						increment = 20;
						break;
					case ((val > 500 && val < 4000) || (val == 500 && sign > 0) || (val == 4000 && sign < 0)):
						increment = 100;
						break;
					case (val > 4000 || (val == 4000 && sign > 0)):
						increment = 500;
						break;
				}
				max = 10000;
				min = 5;
				if ((val > min || sign > 0) && (val < max || sign < 0)){
					massRateValue = Math.round((massRateValue + sign * increment) * 10) / 10;
					massRateArray[stage] = massRateValue;
					dataEngineArray[stage] = engineFunc(this.state.engineCount[stage], fuelTypeData, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);
					this.setState({
						massRate: massRateArray,
						dataEngine: dataEngineArray
					});
					}
				break;
			case 3:
				val = mixRatioValue;
				increment = 0.1
				max = Math.floor(fuelTypeData["mixRatio5"][0] * 10) / 10;
				min = Math.ceil(fuelTypeData["mixRatio1"][0] * 10) / 10;
				if ((val > min || sign > 0) && (val < max || sign < 0)){
					mixRatioValue = Math.round((mixRatioValue + sign * increment) * 10) / 10;
					mixRatioArray[stage] = mixRatioValue;
					dataEngineArray[stage] = engineFunc(this.state.engineCount[stage], fuelTypeData, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);
					this.setState({
						mixRatio: mixRatioArray,
						dataEngine: dataEngineArray
					});
					}
				break;
			case 4:
				val = enginePressureValue;
				increment = 10
				max = 300;
				min = 10;
				if ((val > min || sign > 0) && (val < max || sign < 0)){
					enginePressureValue = Math.round((enginePressureValue + sign * increment) * 10) / 10;
					enginePressureArray[stage] = enginePressureValue;
					dataEngineArray[stage] = engineFunc(this.state.engineCount[stage], fuelTypeData, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);
					this.setState({
						enginePressure: enginePressureArray,
						dataEngine: dataEngineArray
					});
					}
				break;
			case 5:
				val = nozzleLengthValue;
				switch (true){
					case (val < 2 || (val == 2 && sign < 0)):
						increment = 0.2;
						break;
					case (val > 2 || (val == 2 && sign > 0)):
						increment = 0.5;
						break;
				}
				max = 1.88 * tankDiameterValue;
				min = 0.2;
				if ((val > min || sign > 0) && (val < max || sign < 0)){
					nozzleLengthValue = Math.round((nozzleLengthValue + sign * increment) * 10) / 10;
					nozzleLengthArray[stage] = nozzleLengthValue;
					dataEngineArray[stage] = engineFunc(this.state.engineCount[stage], fuelTypeData, mixRatioValue, enginePressureValue, nozzleLengthValue, massRateValue);
					this.setState({
						nozzleLength: nozzleLengthArray,
						dataEngine: dataEngineArray
					});
					}
				break;
		}
		this.setState({
			dataSummary: summaryFunc(stage, this.state.dataSummary, this.state.submitStatus, tankLengthValue, this.state.tankDiameter[stage], structuralDensityValue, mixRatioValue, enginePressureValue, dataEngineArray[stage], this.state.fuelType[stage], this.state.payloadSystem),
		});

	},

	render(){
		return(
			<div>

				<div className="row top-row">

					<Build_11
					selectStatus={this.state.selectStatus[0]}
					handleAddSystem={this.addSystem}/>

					<Build_12 
					selectParts={this.state.selectParts[this.state.stageCurrent]}
					stageCurrent={this.state.stageCurrent}
					dataSummary={this.state.dataSummary}/>

					<Build_13 dataSummary={this.state.dataSummary}/>

				</div>{/* row one ends */}

				<div className="row bot-row">

					<Build_21
					selectedClass={this.data.parts.filter((obj) => obj.class == this.state.selectClass)}

					selectClass={this.state.selectClass}
					selectParts={this.state.selectParts[this.state.stageCurrent]}
					engineCount={this.state.engineCount[this.state.stageCurrent]}
					fuelType={this.state.fuelType[this.state.stageCurrent]}

					selectStatus={this.state.selectStatus[this.state.stageCurrent]}
					submitStatus={this.state.submitStatus[this.state.stageCurrent]}
					clearStatus={this.state.clearStatus[this.state.stageCurrent]}
					typeStatus={this.state.typeStatus}		

					handleSelectStage={this.selectStage}
					handleSubmitStage={this.submitStage}
					/>			

					<Build_22
					addStatus={this.state.addStatus}
					handleAddStage={this.addStage}
								
					tankLength={this.state.tankLength[this.state.stageCurrent]}
					structuralDensity={this.state.structuralDensity[this.state.stageCurrent]}
					massRate={this.state.massRate[this.state.stageCurrent]}
					mixRatio={this.state.mixRatio[this.state.stageCurrent]}
					enginePressure={this.state.enginePressure[this.state.stageCurrent]}
					nozzleLength={this.state.nozzleLength[this.state.stageCurrent]}
						
					modifyStatus={this.state.modifyStatus[this.state.stageCurrent]}	

					handleModifyStage={this.modifyStage}/>

					<Build_23
					buildStatus={this.state.buildStatus}
					handleBuildRocket={this.buildRocket}
					handleSaveRocket={this.saveRocket}
					handleClearShip={this.clearShip}
					returnInput={this.returnInput}/>


				</div>{/* row two ends */}		
				
			</div>
			)
	}
});

