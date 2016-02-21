summaryFunc = function(submitStatus, tankLength, tankDiameter, structuralDensity, mixRatio, enginePressure, stageCount, engineCount, engine, fuel){


//var 		tankVolume = Math.PI / 4 * Math.pow(tankDiameter, 2) * tankLength;
//var stuctureMass = tankVolume * structuralDensity + 10;
//var fuelDensity = (mixRatio + 1) / (mixRatio / fuel.density[0] + 1 / fuel.density[1]);
//var fuelMass = tankVolume * fuel.density[2] * fuelDensity;

var stageStructureMass = [];
var stageFuelMass = [];
var stageEngineMass = [];
var stageMass = [];
var stageDv = [];
var stageDvMass = [];
var stageTWR = [];
var totalDv = [];
var totalFuelMass = 0;
var totalEngineMass = 0;
var totalStructureMass = 0;
var totalMass = 0;
var stageThrustVac = [];
var stageThrustAtm = [];
var stageIspVac = [];
var stageIspAtm = [];
var totalDvVac = 0;
var totalDvAtm = 0;
var stageDvVac = [];
var stageDvAtm = [];
var stageTWRAtm = [];
var stageTWRVac = [];
var fuelRisk = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
var engineRisk = [1,1,1,1,1,1];
var stageTotalRisk = [];
var a = Math.log(Math.pow(891, -5));
var b = Math.log(1 / 0.99 - 1) - a;
var structureRisk = [1,1,1,1,1,1];
var ratio = 0;

	for(var i = 0; i < stageCount + 1 ; i++){
		console.log(submitStatus, submitStatus[i])

			if (submitStatus[i] == true){
				console.log("there")
			var fuelDensityArray = Fuel.find({name: fuel[i]}).fetch()[0].density
			var tankVolume = Math.PI / 4 * Math.pow(tankDiameter[i], 2) * tankLength[i];
			var fuelDensity = (mixRatio[i] + 1) / (mixRatio[i] / fuelDensityArray[0] + 1 / fuelDensityArray[1]);


			stageStructureMass[i] =  tankVolume * structuralDensity[i] + 10;
			stageFuelMass[i] = tankVolume * fuelDensityArray[2] * fuelDensity;
			stageEngineMass[i] = engine[i]["engineMass"];
			stageMass[i] = stageStructureMass[i] + stageFuelMass[i] + stageEngineMass[i] + 1e-6;

			if (i == 0){
				stageDvMass[i] = 0;
			} else {
				stageDvMass[i] = stageDvMass[i - 1] + stageMass[i - 1];
			}

			stageThrustVac[i] = engine[i]["ispVac"];
			stageThrustAtm[i] = engine[i]["ispAtm"];
			stageIspVac[i] = engine[i]["ispVac"];
			stageIspAtm[i] = engine[i]["ispAtm"];
			stageDvVac[i] = Math.log((stageMass[i] + stageDvMass[i]) / (stageMass[i] + stageDvMass[i] - stageFuelMass[i])) * stageIspVac[i] * 9.80655;
			stageDvAtm[i] = Math.log((stageMass[i] + stageDvMass[i]) / (stageMass[i] + stageDvMass[i] - stageFuelMass[i])) * stageIspAtm[i] * 9.80655;
			stageTWRVac[i] = stageThrustVac[i] / (stageMass[i] + stageDvMass[i]) * 1000 / 9.80665;
			stageTWRAtm[i] = stageThrustAtm[i] / (stageMass[i] + stageDvMass[i]) * 1000 / 9.80665;
			totalDvVac += stageDvVac[i];
			totalDvAtm += stageDvAtm[i];
			totalFuelMass += stageFuelMass[i];
			totalEngineMass += stageEngineMass[i];
			totalStructureMass += stageStructureMass[i];
			totalMass += stageMass[i];

			if (fuel[i] == "LH2 LOX"){
				fuelRisk[i] = [0.999, 0.95];
			} else if( fuel[i] == "Fuel/Oxidizer Type"){
				fuelRisk[i] = [0,0]
			}
				else {

				fuelRisk[i] = [0.999, 0.999];
			}
			engineRisk[i] = 1 - 8 * (Math.pow(enginePressure[i], 0.5) - Math.pow(40, 0.5)) / 100;

			if (engineRisk[i] < 0){
				engineRisk[i] = 0;
			} else if (engineRisk[i] > 0.999){
				engineRisk[i] = 0.999;
			} else if (isNaN(engineRisk[i])){
				engineRisk[i] = 0;
			}

			ratio = (Math.pow(Math.pow(structuralDensity[i], 2 / 3 ) * 30 * tankDiameter[i], 0.5) -  stageDvMass[i] / 640 / Math.pow(tankDiameter[i], 2) ) / length[i]
		
			structureRisk[i] = 1 / (1 + Math.exp(a * ratio + b));

			if (isNaN(structureRisk[i])) {
				structureRisk[i] = 0;
			}
			stageTotalRisk[i] = engineRisk[i] * fuelRisk[i] * structureRisk[i];
		}
	}

	var totalEngineRisk = engineRisk.reduce(function(a,b) {return a*b});
	var totalStructureRisk = structureRisk.reduce(function(a,b) {return a*b});
	var totalFuelRisk = fuelRisk.reduce(function(a,b) { return [a[0]*b[0]]})[0];
	var totalRisk = totalEngineRisk * totalStructureRisk * totalFuelRisk;


	summaryObject = {
		stageThrustVac: stageThrustVac,
		stageThrustAtm:stageThrustAtm,
		stageIspVac: stageIspVac,
		stageIspAtm: stageIspAtm,
		stageTWRVac: stageTWRVac,
		stageTWRAtm: stageTWRAtm,
		stageDvVac: stageDvVac,
		stageDvAtm: stageDvAtm,
		stageFuelMass: stageFuelMass,
		stageEngineMass: stageEngineMass,
		stageStructureMass: stageStructureMass,
		stageMass: stageMass,
		stageFuelRisk: fuelRisk,
		stageEngineRisk: engineRisk,
		stageStructureRisk: structureRisk,
		stageTotalRisk: stageTotalRisk,
		totalDvVac: totalDvVac,
		totalDvAtm: totalDvAtm,
		totalFuelMass: totalFuelMass,
		totalEngineMass: totalEngineMass,
		totalStructureMass: totalStructureMass,
		totalMass: totalMass,
		totalFuelRisk: totalFuelRisk,
		totalEngineRisk: totalEngineRisk,
		totalStructureRisk: totalStructureRisk,
		totalRisk: totalRisk,
	}
console.log(summaryObject)
return summaryObject
}
