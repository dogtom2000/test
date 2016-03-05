var fuelData = [{
	name: "Aerozine N2O4",
	defaultMixRatio: 1.9,
	density: [1442.5, 891.4, 0.75],
	reliability: [0.99, 0.99],	
	mixRatio1: [1.4545,[3011.8, 3067.3, 3134.4, 3179.6, 3219.8, 3255.7, 3275.4],[19.709, 19.803, 19.916, 19.992, 20.058, 20.113, 20.14],[1.2381, 1.2362, 1.2339, 1.2324, 1.231, 1.2299, 1.2294]],
	mixRatio2: [1.5310,[3048.4, 3109.5, 3185.1, 3237.2, 3284.5, 3327.3, 3350.9],[20.064, 20.169, 20.3, 20.389, 20.469, 20.537, 20.571],[1.2363, 1.2342, 1.2316, 1.2299, 1.2284, 1.227, 1.2264]],
	mixRatio3: [1.6841,[3097.9, 3167.8, 3257, 3321.1, 3381.6, 3438.2, 3469.8],[20.716, 20.841, 21.002, 21.117, 21.224, 21.32, 21.37],[1.2335, 1.2311, 1.2281, 1.226, 1.2241, 1.2224, 1.2215]],
	mixRatio4: [1.7607,[3113.29, 3186.11, 3280.27, 3349.01, 3414.87, 3477.51, 3512.86],[21.015, 21.149, 21.322, 21.448, 21.567, 21.676, 21.734],[1.2324, 1.2299, 1.2268, 1.2246, 1.2225, 1.2207, 1.2196]],
	mixRatio5: [2.0100,[3124.60, 3199.8, 3298, 3370.6, 3441.1, 3509.2, 3548.1],[21.3223, 21.4639, 21.6477, 21.7835, 21.9144, 22.0365, 22.1032],[1.2315, 1.2289, 1.2257, 1.2233, 1.2211, 1.2191, 1.218]]
},
{
	name: "LH2 LOX",
	defaultMixRatio: 5.5,
	density: [1141, 70.8, 0.55],
	reliability: [0.99, 0.95],
	mixRatio1: [3.9681,[2830.08, 2869.05, 2913.56, 2941.99, 2967.22, 2991.52, 3006.91],[9.83, 9.865, 9.904, 9.929, 9.949, 9.965, 9.972],[1.2257, 1.2241, 1.2224, 1.2213, 1.2204, 1.2196, 1.2192]],
	mixRatio2: [4.5350,[2981.24, 3036.06, 3102.37, 3147.3, 3188, 3226, 3248.32],[10.801, 10.857, 10.924, 10.969, 11.007, 11.039, 11.055],[1.2191, 1.217, 1.2146, 1.213, 1.2116, 1.2104, 1.2097]],
	mixRatio3: [5.2908,[3114.8, 3187.4, 3279.9, 3346.1, 3408.6, 3467.7, 3501.6],[12.004, 12.087, 12.194, 12.269, 12.339, 12.401, 12.433],[1.2133, 1.2107, 1.2075, 1.2053, 1.2032, 1.2014, 1.2005]],
	mixRatio4: [6.3490,[3211.2, 3299, 3416.1, 3504.3, 3591.5, 3677.6, 3727.7],[13.519, 13.634, 13.789, 13.906, 14.02, 14.129, 14.189],[1.2088, 1.2058, 1.2019, 1.1991, 1.1964, 1.1938, 1.1925]],
	mixRatio5: [7.9362,[3242.9, 3336.5, 3463.3, 3561, 3660, 3760.3, 3819.9],[15.458, 15.6, 15.795, 15.946, 16.099, 16.25, 16.336],[1.2062, 1.203, 1.1989, 1.1959, 1.1929, 1.19, 1.1884]]
},
{
	name: "RP1 LOX",
	defaultMixRatio: 2.3,
	density: [1141, 749.5, 0.75],
	reliability: [0.99, 0.99],
	mixRatio1: [1.8786,[2963.8, 3009.39, 3062.12, 3096.08, 3125.48, 3151.72, 3166.64],[19.188, 19.265, 19.353, 19.41, 19.456, 19.493, 19.511],[1.2429, 1.2412, 1.2394, 1.2382, 1.2372, 1.2364, 1.236]],
	mixRatio2: [2.1604,[3171.24, 3244.79, 3337.94, 3403.93, 3465.16, 3521.53, 3552.71],[20.494, 20.628, 20.799, 20.919, 21.03, 21.127, 21.177],[1.2324, 1.2299, 1.2268, 1.2247, 1.2228, 1.2211, 1.2202]],
	mixRatio3: [2.3013,[3227.5, 3310.5, 3418.8, 3498.2, 3574.5, 3646.8, 3687.5],[21.055, 21.212, 21.418, 21.569, 21.713, 21.846, 21.917],[1.229, 1.2262, 1.2227, 1.2202, 1.2179, 1.2158, 1.2146]],
	mixRatio4: [2.4422,[3263.6, 3353, 3472.1, 3561.6, 3649.8, 3735.8, 3785],[21.568, 21.742, 21.975, 22.152, 22.326, 22.492, 22.583],[1.2264, 1.2234, 1.2196, 1.2168, 1.2141, 1.2116, 1.2103]],
	mixRatio5: [3.4754,[3294.1, 3391.9, 3525.9, 3630.8, 3738.7, 3849.6, 3916.3],[24.397, 24.617, 24.923, 25.165, 25.416, 25.672, 25.823],[1.2173, 1.2141, 1.2098, 1.2066, 1.2033, 1.2001, 1.1982]]
},
{
	name: "Solid Fuel",
	defaultMixRatio: 2.1,
	density: [1952, 1952, 0.75],
	reliability: [0.99, 0.99],
	mixRatio1: [4.0000,[3068.33, 3125.43, 3195.27, 3243.01, 3285.91, 3324.06, 3344.47],[24.956, 25.093, 25.258, 25.369, 25.468, 25.555, 25.601],[1.091602653, 1.091268908, 1.090781419, 1.090414104, 1.090057182, 1.089757457, 1.089615983]],
	mixRatio2: [3.0000,[3068.33, 3125.43, 3195.27, 3243.01, 3285.91, 3324.06, 3344.47],[24.956, 25.093, 25.258, 25.369, 25.468, 25.555, 25.601],[1.091602653, 1.091268908, 1.090781419, 1.090414104, 1.090057182, 1.089757457, 1.089615983]],
	mixRatio3: [2.0000,[3068.33, 3125.43, 3195.27, 3243.01, 3285.91, 3324.06, 3344.47],[24.956, 25.093, 25.258, 25.369, 25.468, 25.555, 25.601],[1.091602653, 1.091268908, 1.090781419, 1.090414104, 1.090057182, 1.089757457, 1.089615983]],
	mixRatio4: [1.0000,[3068.33, 3125.43, 3195.27, 3243.01, 3285.91, 3324.06, 3344.47],[24.956, 25.093, 25.258, 25.369, 25.468, 25.555, 25.601],[1.091602653, 1.091268908, 1.090781419, 1.090414104, 1.090057182, 1.089757457, 1.089615983]],
	mixRatio5: [0.0000,[3068.33, 3125.43, 3195.27, 3243.01, 3285.91, 3324.06, 3344.47],[24.956, 25.093, 25.258, 25.369, 25.468, 25.555, 25.601],[1.091602653, 1.091268908, 1.090781419, 1.090414104, 1.090057182, 1.089757457, 1.089615983]]
}];
var partData = {
    "default": [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]],
    "Sounding Rocket": [
        [0.25, 2, 2, 0.2],
        [0.50, 4, 8, 0.4],
        [1.00, 8, 60, 0.8]],
    "Medium Lift Rocket": [
        [2.00, 4, 100, 1.6],
        [2.50, 8, 200, 2.0],
        [3.00, 16, 500, 2.4]],
    "Heavy Lift Rocket": [
        [4.00, 6, 140, 3.0],
        [7.00, 20, 240, 3.5],
        [10.0, 36, 500, 4.0]],
};

            
DesignPage = React.createClass({
   
    getInitialState(){
        
        return {
            stageCount: 1,
            stageCurrent: 0,
            saveFormValue: "Save as",
            saveMessageValue: "Design not saved:",
            stagePart: ["default", "default", "default", "default", "default", "default"],
            rocketConfig: ["btn buttonStyleHigh", "btn buttonStyle", "btn buttonStyle", false],
            rocketType: "default",
            partIndex: [0, 0, 0, 0, 0, 0],
            stageConfig: [["btn buttonStyleHigh", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true], true],
			stageStatus: false,
			systemConfig: [true],
			systemMass: 0,
			tankLength: ["---", "---", "---", "---", "---", "---"],
			tankDiameter: [0, 0, 0, 0, 0, 0],
			structuralDensity: ["---", "---", "---", "---", "---", "---"],
			fuelType: ["Solid Fuel", "Solid Fuel", "Solid Fuel", "Solid Fuel", "Solid Fuel", "Solid Fuel"],
			massRate: ["---", "---", "---", "---", "---", "---"],
			mixRatio: ["---", "---", "---", "---", "---", "---"],
			enginePressure: ["---", "---", "---", "---", "---", "---"],
			engineCount: [1, 1, 1, 1, 1, 1],
			nozzleLength: ["---", "---", "---", "---", "---", "---"],
			partConfig:[[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false]]],

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
		    stageButtonConfig: [[true, "---", "btn btn-block buttonStyle"], [true, "---", "btn btn-block buttonStyle"], [true, "---", "btn btn-block buttonStyle"], [true, "---", "btn btn-block buttonStyle"], [true, "---", "btn btn-block buttonStyle"], [true, "---", "btn btn-block buttonStyle"]],
            dataEngine: [],
            dependentPropsObj: {
				thrust: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]],
				isp: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]],
				twr: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]],
				dv: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0], [0, 0]],
				mass: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]],
				reliability: [[[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [0, 0, 0, 0, 0]],
				cost: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]]
            }
        };
    },
   
    resetState(){
       this.replaceState({
            stageCount: 1,
            stageCurrent: 0,
            saveFormValue: "Save as",
            saveMessageValue: "Design not saved:",
            stagePart: ["default", "default", "default", "default", "default", "default"],
            rocketConfig: ["btn buttonStyleHigh", "btn buttonStyle", "btn buttonStyle", false],
            rocketType: "default",
            partIndex: [0, 0, 0, 0, 0, 0],
            stageConfig: [["btn buttonStyleHigh", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true], true],
			stageStatus: false,
			systemConfig: [true],
			systemMass: 0,
			tankLength: ["---", "---", "---", "---", "---", "---"],
			tankDiameter: [0, 0, 0, 0, 0, 0],
			structuralDensity: ["---", "---", "---", "---", "---", "---"],
			fuelType: ["Solid Fuel", "Solid Fuel", "Solid Fuel", "Solid Fuel", "Solid Fuel", "Solid Fuel"],
			massRate: ["---", "---", "---", "---", "---", "---"],
			mixRatio: ["---", "---", "---", "---", "---", "---"],
			enginePressure: ["---", "---", "---", "---", "---", "---"],
			engineCount: [1, 1, 1, 1, 1, 1],
			nozzleLength: ["---", "---", "---", "---", "---", "---"],
			partConfig:[[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false]],
						[["btn buttonStyleHigh", false],["btn buttonStyle", false],["btn buttonStyle", false]]],

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
		    stageButtonConfig: [[true, "---", "btn btn-block buttonStyle"], [true, "---", "btn btn-block buttonStyle"], [true, "---", "btn btn-block buttonStyle"], [true, "---", "btn btn-block buttonStyle"], [true, "---", "btn btn-block buttonStyle"], [true, "---", "btn btn-block buttonStyle"]],
            dataEngine: [],
            dependentPropsObj: {
				thrust: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]],
				isp: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]],
				twr: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]],
				dv: [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0], [0, 0]],
				mass: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]],
				reliability: [[[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [[1, 1], 1, 1, 1], [0, 0, 0, 0, 0]],
				cost: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]]
            }
        });
    },
   
    loadDesign(){
       	this.replaceState(
			Design.findOne({name: arguments[0]}).save
		);
    },
    
    saveDesign(designName){
		var designStages = {};
		var designStageCount = 0;
		var futureStageMass = this.state.systemMass;
		for(var i = 0; i < 6; i++){
			if (this.state.dependentPropsObj["dv"][i][0] > 0 && designStageCount == i){
				designStages[i + 1] = [[this.state.dependentPropsObj["mass"][i][0], 
										this.state.dependentPropsObj["mass"][i][0]], 
										this.state.dependentPropsObj["mass"][i][3] - this.state.dependentPropsObj["mass"][i][0], 
										futureStageMass, 
										0.2, 
										this.state.tankDiameter[i], 
										this.state.dependentPropsObj["thrust"][i][0], 
										this.state.dependentPropsObj["thrust"][i][1], 
										this.state.dependentPropsObj["isp"][i][0]];			
				designStageCount++;
				futureStageMass += this.state.dependentPropsObj["mass"][i][3];
			}			
		}
		if (designStageCount == 0){
			var saveMessage = "Design not saved: 0 stages designed";
		} else {
    		var dbDesign = Design.findOne({name: designName});
    		var design = {};
    		design.name = designName;
    		design.stages = designStages;
    		design.stageCount = designStageCount;
    		design.save = JSON.parse(JSON.stringify(this.state));
		if(dbDesign != null){
			Design.remove({_id: dbDesign._id});
		}
			Design.insert(design);
			if (Design.findOne({name: design.name}) !== null){
			saveMessage = "Design successfully saved";
			}
		}
		this.setState({
			saveMessageValue: saveMessage
		});
    },
    
    configureType(){
        var rocketConfigArray = this.state.rocketConfig;
		var firstPart = partData[arguments[0]][0][0];
		rocketConfigArray[0] = "btn buttonStyle";
		rocketConfigArray[1] = "btn buttonStyle";
		rocketConfigArray[2] = "btn buttonStyle";
		rocketConfigArray[arguments[1]] = "btn buttonStyleHigh";
		this.setState({
			rocketConfig: rocketConfigArray,
			rocketType: arguments[0],
			stagePart: [firstPart, firstPart, firstPart, firstPart, firstPart, firstPart]
		});
    },
    
    configureStage(){
        if (arguments[0] > 0 && this.state.stageCount < 6 || arguments[0] < 0 && this.state.stageCount > 1){
			this.setState({
				stageCount: this.state.stageCount + arguments[0]
			});
		}
    },
    
    configureRocket(){
		var rocketConfigArray = this.state.rocketConfig;
		var stageConfigArray = this.state.stageConfig;
		var systemConfigArray = this.state.systemConfig;
		var stagePartArray = this.state.stagePart;
		var stageButtonConfigArray = this.state.stageButtonConfig;
		
		stageConfigArray[6] = false;
		systemConfigArray[0] = false;
 		rocketConfigArray[3] = true;
 		stageButtonConfigArray[0][2] = "btn btn-block buttonStyleHigh";
		for (var i = 0; i < this.state.stageCount; i++){
			stageConfigArray[i][1] = false;
			stagePartArray[i] = partData[this.state.rocketType][0][0];
		}
		this.setState({
			rocketConfig: rocketConfigArray,
			stageConfig: stageConfigArray,
			systemConfig: systemConfigArray,
			stagePart: stagePartArray,
			stageButtonConfig: stageButtonConfigArray
		});

    	for (var i = 0; i < this.state.stageCount; i++){
    		this.dependentProps(i, 0);
    	}
    },
   
    configureSystem(){
		var stage = this.state.stageCurrent;
		this.setState({
			systemMass: arguments[0],
			dependentPropsObj: calculatePropsFunc(	stage, 
													this.state.dependentPropsObj, 
													this.state.tankLength[stage], 
													this.state.tankDiameter[stage], 
													this.state.structuralDensity[stage], 
													this.state.mixRatio[stage], 
													this.state.enginePressure[stage], 
													this.state.dataEngine[stage], 
													fuelData.filter((obj) => obj.name == this.state.fuelType[stage])[0], 
													arguments[0]),
		});
    },
   
    configureDiameter(){
       	var stage = this.state.stageCurrent;
		var stagePartArray = this.state.stagePart;
		var partConfigArray = this.state.partConfig;
		var partIndexArray = this.state.partIndex;
		stagePartArray[stage] = partData[this.state.rocketType][arguments[0]][0];
		partConfigArray[stage] = [["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]];
		partConfigArray[stage][arguments[0]] = ["btn buttonStyleHigh", false];
		partIndexArray[stage] = arguments[0];
		this.setState({
			stagePart: stagePartArray,
			partConfig: partConfigArray,
			partIndex: partIndexArray
		});
		this.submitStage(stage, 1);
    },
   
    configureEngineCount(){
       	var stage = this.state.stageCurrent;
		var engineCountArray = this.state.engineCount;
		var engineConfigArray = this.state.engineConfig;
		engineCountArray[stage] = arguments[1];
		engineConfigArray[stage] = [["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]];
		engineConfigArray[stage][arguments[0]] = ["btn buttonStyleHigh", false];
		this.setState({
			engineCount: engineCountArray,
			engineConfig: engineConfigArray,
			dependentPropsObj: calculatePropsFunc(	stage, 
													this.state.dependentPropsObj, 
													this.state.tankLength[stage], 
													this.state.tankDiameter[stage], 
													this.state.structuralDensity[stage], 
													this.state.mixRatio[stage], 
													this.state.enginePressure[stage], 
													this.state.dataEngine[stage], 
													fuelData.filter((obj) => obj.name == this.state.fuelType[stage])[0], 
													this.state.systemMass)

		});
    },
   
    configureFuelType(){
       	var stage = this.state.stageCurrent;
		var fuelTypeArray = this.state.fuelType;
		var fuelConfigArray = this.state.fuelConfig;
		fuelTypeArray[stage] = arguments[1];
		fuelConfigArray[stage] = [["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false]];
		fuelConfigArray[stage][arguments[0]] = ["btn buttonStyleHigh", false];
		this.setState({
			fuelType: fuelTypeArray,
			fuelConfig: fuelConfigArray,
		});
		this.dependentProps(stage, 2);
    },
    
    selectStage(){
        var stageButtonConfigArray = this.state.stageButtonConfig;
		var prevStage = this.state.stageCurrent;
		var newStage = arguments[0];
		stageButtonConfigArray[prevStage][2] = "btn btn-block buttonStyle";
		stageButtonConfigArray[newStage][2] = "btn btn-block buttonStyleHigh";		
		this.setState({
			stageButtonConfig: stageButtonConfigArray,
			stageCurrent: newStage,
		});
    },
    
    dependentProps(stage, source){
        var stageCount = this.state.stageCount;
        var rocketPartData = partData[this.state.rocketType][this.state.partIndex[stage]];
        var rocketFuelData = fuelData.filter((obj) => obj.name == this.state.fuelType[stage])[0];
        
        var stageButtonConfigArray = this.state.stageButtonConfig;
        var	tankLengthArray = this.state.tankLength;
		var	tankDiameterArray = this.state.tankDiameter;
		var	structuralDensityArray = this.state.structuralDensity;
		var	massRateArray = this.state.massRate;			
		var	enginePressureArray = this.state.enginePressure;
		var	nozzleLengthArray = this.state.nozzleLength;
		var	mixRatioArray = this.state.mixRatio;
        
        var	dataEngineArray = this.state.dataEngine;
        
        if (source == 1 || source == 0){
            tankDiameterArray[stage] = rocketPartData[0]; 
			tankLengthArray[stage] = rocketPartData[1]; 
			massRateArray[stage] = rocketPartData[2]; 			
			nozzleLengthArray[stage] = rocketPartData[3]; 
		}
		if (source == 0){
			structuralDensityArray[stage] = 20;
			enginePressureArray[stage] = 40; 
		}
		if (source == 2 || source == 0){
			mixRatioArray[stage] = rocketFuelData["defaultMixRatio"]; 
		}

		dataEngineArray[stage] = engineFunc(this.state.engineCount[stage], rocketFuelData, mixRatioArray[stage], enginePressureArray[stage], nozzleLengthArray[stage], massRateArray[stage]);
		
		if (this.state.stageStatus == false){
			for (var i = 0; i < stageCount ; i++){
				stageButtonConfigArray[i][0] = false;
				stageButtonConfigArray[i][1] = "Stage " + (stageCount - i);
			}
		}
		
        this.setState({
            saveMessageValue: "Design not saved:",
          
			tankLength: tankLengthArray,
			tankDiameter: tankDiameterArray,
			structuralDensity: structuralDensityArray,
			massRate: massRateArray,
			mixRatio: mixRatioArray,
			enginePressure: enginePressureArray,
			nozzleLength :nozzleLengthArray,

			stageStatus: true,
			stageButtonConfig: stageButtonConfigArray,

			dataEngine: dataEngineArray,
			dependentPropsObj: calculatePropsFunc(	stage, 
													this.state.dependentPropsObj, 
													tankLengthArray[stage], 
													tankDiameterArray[stage], 
													structuralDensityArray[stage], 
													mixRatioArray[stage], 
													enginePressureArray[stage], 
													dataEngineArray[stage], 
													rocketFuelData, 
													this.state.systemMass),
        });
    },
    
    independentProps(){
        var stage = this.state.stageCurrent;

		var fuelTypeData = fuelData.filter((obj) => obj.name == this.state.fuelType[stage])[0];

		//properties arrays
		var	tankLengthArray = this.state.tankLength;
		var	structuralDensityArray = this.state.structuralDensity;
		var	massRateArray = this.state.massRate;
		var	mixRatioArray = this.state.mixRatio;
		var	enginePressureArray = this.state.enginePressure;
		var	nozzleLengthArray = this.state.nozzleLength;

		//function arrays
		var	dataEngineArray = this.state.dataEngine;

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
				increment = 0.1;
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
				increment = 10;
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
			dependentPropsObj: calculatePropsFunc(	stage, 
													this.state.dependentPropsObj, 
													tankLengthValue, 
													this.state.tankDiameter[stage], 
													structuralDensityValue, 
													mixRatioValue, 
													enginePressureValue, 
													dataEngineArray[stage], 
													fuelTypeData, 
													this.state.systemMass),
		});
    },
    
    render(){
       return(
        <div>   
            <div className="row top-row">
            
                <Design11 />
                
                <Design12 
                stageCurrent={this.state.stageCurrent}
                stagePart={this.props.stagePart}
                dependentPropsObj={this.state.dependentPropsObj}/>
                
                <Design13 
                dependentPropsObj={this.state.dependentPropsObj}/>
            
            </div>{/* row one ends */}
            
            <div className="row bot-row">
            
                <Design21 
                partData={partData}
                
                saveFormValue={this.state.saveFormValue}
                saveMessageValue={this.state.saveMessageValue}
                rocketConfig={this.state.rocketConfig}
                systemConfig={this.state.systemConfig}
				stageConfig={this.state.stageConfig}
				rocketType={this.state.rocketType}
				stageCount={this.state.stageCount}
				
				stagePart={this.state.stagePart[this.state.stageCurrent]}
				partConfig={this.state.partConfig[this.state.stageCurrent]}
				engineConfig={this.state.engineConfig[this.state.stageCurrent]}
				fuelConfig={this.state.fuelConfig[this.state.stageCurrent]}
				stageButtonConfig={this.state.stageButtonConfig}
				
				handleConfigureType={this.configureType}
				handleConfigureStage={this.configureStage}
				handleConfigureRocket={this.configureRocket}
				handleConfigureSystem={this.configureSystem}
				handleConfigureDiameter={this.configureDiameter}
                handleConfigureEngineCount={this.configureEngineCount}
                handleConfigureFuelType={this.configureFuelType}
                handleSelectStage={this.selectStage}
                handleLoadDesign={this.loadDesign}
				handleSaveDesign={this.saveDesign}
				handleResetState={this.resetState}/>			
                
                <Design22 
                handleSelectStage={this.selectStage}
                handleIndependentProps={this.independentProps}
                stageButtonConfig={this.state.stageButtonConfig}
            
            	tankLength={this.state.tankLength[this.state.stageCurrent]}
				structuralDensity={this.state.structuralDensity[this.state.stageCurrent]}
				massRate={this.state.massRate[this.state.stageCurrent]}
				mixRatio={this.state.mixRatio[this.state.stageCurrent]}
				enginePressure={this.state.enginePressure[this.state.stageCurrent]}
				nozzleLength={this.state.nozzleLength[this.state.stageCurrent]}/>
                
                <Design23 />
            
            </div>{/* row two ends */}	
        </div>
        ); 
    }
});