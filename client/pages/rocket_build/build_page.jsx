var partsObject = {
	"Sounding Rocket": ["0.25 Meter", "0.50 Meter", "1.00 Meter", "1.00 Meter Last"],
	"Medium Lift Rocket": ["2.0 Meter", "2.5 Meter", "3.0 Meter", "3.0 Meter Last"],
	"Heavy Lift Rocket": ["4.0 Meter", "7.0 Meter", "10.0 Meter", "10.0 Meter Last"],
}

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
			stageCount: 1,
			stageCurrent: 0,

			//button control
			addStatus: [[false, true, "---", "btn btn-block buttonStyle"], [false, true, "---", "btn btn-block buttonStyle"], [false, true, "---", "btn btn-block buttonStyle"], [false, true, "---", "btn btn-block buttonStyle"], [false, true, "---", "btn btn-block buttonStyle"], [false, true, "---", "btn btn-block buttonStyle"]],
			rocketConfig: ["btn buttonStyleHigh", "btn buttonStyle", "btn buttonStyle", false],
			stageConfig: [["btn buttonStyleHigh", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true], true],
			systemConfig: [true],
			partConfig:[[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]]],

			engineConfig:[[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]]],

			fuelConfig:[[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]]],

			modifyStatus: [true, true, true, true, true, true],
			stageStatus: false,
			saveStatus: "Rocket not saved",

			//display control
			selectClass: "Sounding Rocket",
			selectParts: ["0.25 Meter","0.25 Meter","0.25 Meter","0.25 Meter","0.25 Meter","0.25 Meter"],
			buildStatus: "",
			rocketName: "Rocket Name",

			//property control	
			tankLength: ["---", "---", "---", "---", "---", "---"],
			tankDiameter: [0, 0, 0, 0, 0, 0],
			structuralDensity: ["---", "---", "---", "---", "---", "---"],
			fuelType: ["Solid Fuel", "Solid Fuel", "Solid Fuel", "Solid Fuel", "Solid Fuel", "Solid Fuel"],
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
			//stage control
			stageCount: 1,
			stageCurrent: 0,

			//button control
			addStatus: [[false, true, "---", "btn btn-block buttonStyle"], [false, true, "---", "btn btn-block buttonStyle"], [false, true, "---", "btn btn-block buttonStyle"], [false, true, "---", "btn btn-block buttonStyle"], [false, true, "---", "btn btn-block buttonStyle"], [false, true, "---", "btn btn-block buttonStyle"]],
			rocketConfig: ["btn buttonStyleHigh", "btn buttonStyle", "btn buttonStyle", false],
			stageConfig: [["btn buttonStyleHigh", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true], true],
			systemConfig: [true],
			partConfig:[[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]]],

			engineConfig:[[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]]],

			fuelConfig:[[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]]],

			modifyStatus: [true, true, true, true, true, true],
			stageStatus: false,
			saveStatus: "Rocket not saved",

			//display control
			selectClass: "Sounding Rocket",
			selectParts: ["0.25 Meter","0.25 Meter","0.25 Meter","0.25 Meter","0.25 Meter","0.25 Meter"],
			buildStatus: "",
			rocketName: "Rocket Name",

			//property control	
			tankLength: ["---", "---", "---", "---", "---", "---"],
			tankDiameter: [0, 0, 0, 0, 0, 0],
			structuralDensity: ["---", "---", "---", "---", "---", "---"],
			fuelType: ["Solid Fuel", "Solid Fuel", "Solid Fuel", "Solid Fuel", "Solid Fuel", "Solid Fuel"],
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
				rocketStages[i + 1] = [[this.state.dataSummary["mass"][i][0], this.state.dataSummary["mass"][i][0]], this.state.dataSummary["mass"][i][3] - this.state.dataSummary["mass"][i][0], futureStageMass, 0.2, this.state.tankDiameter[i], this.state.dataSummary["thrust"][i][0], this.state.dataSummary["thrust"][i][1], this.state.dataSummary["Isp"][i][0]];			
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
		var Rocket = this.state.builtRocket;
		var saveVal = this.state.saveStatus;
		Rocket.name = this.state.rocketName;
		Rocket.save = JSON.parse(JSON.stringify(this.state));

		if (this.state.buildStatus == "0 stages built"){
			var saveVal = "No stages built";
		} else {
			Vehicle.insert(Rocket);
			if (Vehicle.findOne({name: Rocket.name}) !== null){
			var saveVal = "Rocket successfully saved"
			}
		}
		this.setState({
			saveStatus: saveVal
		})
	
	},

	loadRocket(){
		this.setState(
			Vehicle.findOne({name: arguments[0]}).save
		)
	},

	returnInput(rocketName){
		this.setState({
			rocketName: rocketName.trim()
		});
	},

	addSystem(){
		var stage = this.state.stageCurrent;
		var payloadSystemObject = this.state.payloadSystem;
		payloadSystemObject.mass = arguments[0];
		this.setState({
			payloadSystem: payloadSystemObject,
			dataSummary: summaryFunc(stage, this.state.dataSummary, this.state.tankLength[stage], this.state.tankDiameter[stage], this.state.structuralDensity[stage], this.state.mixRatio[stage], this.state.enginePressure[stage], this.state.dataEngine[stage], this.state.fuelType[stage], payloadSystemObject)
		})
	},

	addStage(){
		var addStatusArray = this.state.addStatus;
		var prevStage = this.state.stageCurrent;
		var newStage = arguments[0];
		addStatusArray[prevStage][3] = "btn btn-block buttonStyle";
		addStatusArray[newStage][3] = "btn btn-block buttonStyleHigh";		
		this.setState({
			addStatus: addStatusArray,
			stageCurrent: newStage,
		});

	
	},

	classChange(){
		var rocketConfigArray = this.state.rocketConfig;
		var firstPart = partsObject[arguments[0]][0];
		rocketConfigArray[0] = "btn buttonStyle";
		rocketConfigArray[1] = "btn buttonStyle";
		rocketConfigArray[2] = "btn buttonStyle";
		rocketConfigArray[arguments[1]] = "btn buttonStyleHigh";

		this.setState({
			rocketConfig: rocketConfigArray,
			selectClass: arguments[0],
			selectParts: [firstPart,firstPart,firstPart,firstPart,firstPart,firstPart]
		});

	},

	stageChange(){
		if (arguments[0] > 0 && this.state.stageCount < 6 || arguments[0] < 0 && this.state.stageCount > 1){
			this.setState({
				stageCount: this.state.stageCount + arguments[0]
			})
		}
	},

	rocketSubmit(){
		var rocketConfigArray = this.state.rocketConfig;
		var stageConfigArray = this.state.stageConfig;
		var systemConfigArray = this.state.systemConfig;
		var selectPartsArray = this.state.selectParts;
		stageConfigArray[6] = false;
		systemConfigArray[0] = false;
 		rocketConfigArray[3] = true;
		for (var i = 0; i < this.state.stageCount; i++){
			stageConfigArray[i][1] = false;
			selectPartsArray[i] = partsObject[this.state.selectClass][0]
		}
		this.setState({
			rocketConfig: rocketConfigArray,
			stageConfig: stageConfigArray,
			systemConfig: systemConfigArray,
			selectParts: selectPartsArray,
		});

	for (var i = 0; i < this.state.stageCount; i++){
		this.submitStage(i, 0);
	}

	},

	stageSelect(){
		var oldStage = this.state.stageCurrent;
		var stageConfigArray = this.state.stageConfig;	
		stageConfigArray[oldStage][0] = "btn buttonStyle";
		stageConfigArray[arguments[0]][0] = "btn buttonStyleHigh";
		this.setState({
			stageConfig: stageConfigArray,
			stageCurrent: arguments[0]
		});

	},

	partSelect(){
		var stage = this.state.stageCurrent;
		var selectPartsArray = this.state.selectParts;
		var partConfigArray = this.state.partConfig;
		selectPartsArray[stage] = partsObject[this.state.selectClass][arguments[0]];
		partConfigArray[stage] = [["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]];
		partConfigArray[stage][arguments[0]] = ["btn buttonStyleHigh", false];
		this.setState({
			selectParts: selectPartsArray,
			partConfig: partConfigArray,
		})
		this.submitStage(stage, 1);
	},

	engineSelect(){
		var stage = this.state.stageCurrent;
		var engineCountArray = this.state.engineCount;
		var engineConfigArray = this.state.engineConfig;
		engineCountArray[stage] = arguments[1];
		engineConfigArray[stage] = [["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]];
		engineConfigArray[stage][arguments[0]] = ["btn buttonStyleHigh", false];
		this.setState({
			engineCount: engineCountArray,
			engineConfig: engineConfigArray,
			dataSummary: summaryFunc(stage, this.state.dataSummary, this.state.tankLength[stage], this.state.tankDiameter[stage], this.state.structuralDensity[stage], this.state.mixRatio[stage], this.state.enginePressure[stage], this.state.dataEngine[stage], this.state.fuelType[stage], this.state.payloadSystem)

		})
	},

	fuelSelect(){
		var stage = this.state.stageCurrent;
		var fuelTypeArray = this.state.fuelType;
		var fuelConfigArray = this.state.fuelConfig;
		fuelTypeArray[stage] = arguments[1];
		fuelConfigArray[stage] = [["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]];
		fuelConfigArray[stage][arguments[0]] = ["btn buttonStyleHigh", false];
		this.setState({
			fuelType: fuelTypeArray,
			fuelConfig: fuelConfigArray,
		})
		this.submitStage(stage, 2);
	},

	submitStage(stage, arg2){
		var stageCount = this.state.stageCount;

		//database data
		var fuelTypeData = this.data.fuel.filter((obj) => obj.name == this.state.fuelType[stage])[0];
		var PartsData = this.data.parts.filter((obj) => obj.name == this.state.selectParts[stage])[0];

		//statuses to be updated		
		var selectStatusArray = this.state.selectStatus;
		var modifyStatusArray = this.state.modifyStatus;
		var submitStatusArray = this.state.submitStatus;
		var clearStatusArray = this.state.clearStatus;
		var addStatusArray = this.state.addStatus;

		//properties to be updated
		
		var	tankLengthArray = this.state.tankLength;
		var	tankDiameterArray = this.state.tankDiameter;
		var	structuralDensityArray = this.state.structuralDensity;
		var	massRateArray = this.state.massRate;			
		var	enginePressureArray = this.state.enginePressure;
		var	nozzleLengthArray = this.state.nozzleLength;
		var payloadSystemObject = this.state.payloadSystem;
		var	mixRatioArray = this.state.mixRatio;
		
		

		//functions to be updated
		var	dataEngineArray = this.state.dataEngine;

		//update values	

		modifyStatusArray[stage] = false;
		if (arg2 == 1 || arg2 == 0){
			tankLengthArray[stage] = PartsData["length"]; 
			tankDiameterArray[stage] = PartsData["diameter"]; 
			massRateArray[stage] = PartsData["massRate"]; 			
			nozzleLengthArray[stage] = PartsData["nozzleLength"]; 
		}
		if (arg2 == 0){
			structuralDensityArray[stage] = PartsData["structuralDensity"];
			enginePressureArray[stage] = PartsData["enginePressure"]; 
		}
		if (arg2 == 2 || arg2 == 0){
			mixRatioArray[stage] = fuelTypeData["defaultMixRatio"]; 
		}
		dataEngineArray[stage] = engineFunc(this.state.engineCount[stage], fuelTypeData, mixRatioArray[stage], enginePressureArray[stage], nozzleLengthArray[stage], massRateArray[stage]);
		
		if (this.state.stageStatus == false){
			for (var i = 0; i < stageCount ; i++){
				addStatusArray[i][1] = false;
				addStatusArray[i][2] = "Stage " + (stageCount - i);
			}
		}

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

			stageStatus: true,
			addStatus: addStatusArray,

			dataEngine: dataEngineArray,
			dataSummary: summaryFunc(stage, this.state.dataSummary, tankLengthArray[stage], tankDiameterArray[stage], structuralDensityArray[stage], mixRatioArray[stage], enginePressureArray[stage], dataEngineArray[stage], this.state.fuelType[stage], payloadSystemObject),
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
				min = Math.max(tankDiameterValue, 0.5);
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
					case (val < 10 || (val == 10 && sign < 0)):
						increment = 1;
						break;
					case ((val > 10 && val < 50) || (val == 10 && sign > 0) || (val == 50 && sign < 0)):
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
				min = 1;
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
			dataSummary: summaryFunc(stage, this.state.dataSummary, tankLengthValue, this.state.tankDiameter[stage], structuralDensityValue, mixRatioValue, enginePressureValue, dataEngineArray[stage], this.state.fuelType[stage], this.state.payloadSystem),
		});

	},

	render(){
		return(
			<div>

				<div className="row top-row">

					<Build_11
					handleAddSystem={this.addSystem}/>

					<Build_12 
					selectParts={this.state.selectParts[this.state.stageCurrent]}
					stageCurrent={this.state.stageCurrent}
					dataSummary={this.state.dataSummary}/>

					<Build_13 dataSummary={this.state.dataSummary}/>

				</div>{/* row one ends */}

				<div className="row bot-row">

					<Build_21 
					stageCount={this.state.stageCount}
					handleStageChange={this.stageChange}
					handleClassChange={this.classChange}
					handleRocketSubmit={this.rocketSubmit}
					handleStageSelect={this.stageSelect}
					handlePartSelect={this.partSelect}
					handleEngineSelect={this.engineSelect}
					handleFuelSelect={this.fuelSelect}
					handleAddSystem={this.addSystem}

					addStatus={this.state.addStatus}
					fuel={this.data.fuel}
					parts={partsObject}

					selectClass={this.state.selectClass}

					rocketConfig={this.state.rocketConfig}
					systemConfig={this.state.systemConfig}
					stageConfig={this.state.stageConfig}

					partConfig={this.state.partConfig[this.state.stageCurrent]}


					engineConfig={this.state.engineConfig[this.state.stageCurrent]}
					fuelConfig={this.state.fuelConfig[this.state.stageCurrent]}


					saveStatus={this.state.saveStatus}
					buildStatus={this.state.buildStatus}
					builtRocket={this.state.builtRocket}
					handleBuildRocket={this.buildRocket}
					handleSaveRocket={this.saveRocket}
					handleLoadRocket={this.loadRocket}
					handleClearShip={this.clearShip}
					returnInput={this.returnInput}/>			

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

					<Build_23 />

				</div>{/* row two ends */}		
				
			</div>
			)
	}
});

