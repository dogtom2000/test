calculatePropsFunc = function(stage, dependentPropsObj, tankLength, tankDiameter, structuralDensity, mixRatio, enginePressure, engine, fuelData, systemMass){
	
	var dvMass = [];

	var tankVolume = Math.PI / 4 * Math.pow(tankDiameter, 2) * tankLength;
	var fuelDensity = (mixRatio + 1) / (mixRatio / fuelData.density[0] + 1 / fuelData.density[1]);

	var structureMass =  tankVolume * structuralDensity + 10;
	var fuelMass = tankVolume * fuelData.density[2] * fuelDensity;
	var engineMass = engine["engineMass"];
	var stageMass = structureMass + fuelMass + engineMass + 1e-6;

	var totalFuelMass = 0;
	var totalEngineMass = 0;
	var totalStructureMass = 0;
	var totaldv = [0, 0];

	var totalFuelReliability = 1;
	var totalEngineReliability = 1;
	var totalStructureReliability = 1;

	dependentPropsObj["mass"][stage] = [fuelMass, engineMass, structureMass, stageMass];

	dependentPropsObj["thrust"][stage] = [engine["thrustVac"], engine["thrustAtm"]];
	dependentPropsObj["isp"][stage] = [engine["ispVac"], engine["ispAtm"]];

	for (var i = 0; i < 6; i++){
		if (i == 0){
			dvMass[i] = systemMass;
		} else {
			dvMass[i] = dvMass[i - 1] + dependentPropsObj["mass"][i - 1][3];
		}
		dependentPropsObj["dv"][i] = [Math.log((dependentPropsObj["mass"][i][3] + dvMass[i]) / (dependentPropsObj["mass"][i][3] + dvMass[i] - dependentPropsObj["mass"][i][0])) * dependentPropsObj["isp"][i][0] * 9.80655, Math.log((dependentPropsObj["mass"][i][3] + dvMass[i]) / (dependentPropsObj["mass"][i][3] + dvMass[i] - dependentPropsObj["mass"][i][0])) * dependentPropsObj["isp"][i][1] * 9.80655];
		dependentPropsObj["twr"][i] = [dependentPropsObj["thrust"][i][0] / (dependentPropsObj["mass"][i][3] + dvMass[i]) / 9.80665, dependentPropsObj["thrust"][i][1] / (dependentPropsObj["mass"][i][3] + dvMass[i]) / 9.80665];
	}

	var engineReliability = 1 - 8 * (Math.pow(enginePressure, 0.5) - Math.pow(40, 0.5)) / 100;

	if (engineReliability < 0){
		engineReliability = 0;
	} else if (engineReliability > 0.999){
		engineReliability = 0.999;
	}

	var a = Math.log(Math.pow(891, -5));
	var b = Math.log(1 / 0.99 - 1) - a;
	var ratio = (Math.pow(Math.pow(structuralDensity, 2 / 3 ) * 30 * tankDiameter, 0.5) -  dvMass[stage] / 640 / Math.pow(tankDiameter, 2) ) / tankLength;

	var structureReliability = 1 / (1 + Math.exp(a * ratio + b));

	dependentPropsObj["reliability"][stage] = [fuelData.reliability, engineReliability, structureReliability, fuelData.reliability[0] * engineReliability* structureReliability];


	for (var i = 0; i < 6; i++){
		totalFuelMass += dependentPropsObj["mass"][i][0];
		totalEngineMass += dependentPropsObj["mass"][i][1];
		totalStructureMass += dependentPropsObj["mass"][i][2];
		totaldv[0] += dependentPropsObj["dv"][i][0];
		totaldv[1] += dependentPropsObj["dv"][i][1];
		totalFuelReliability *= dependentPropsObj["reliability"][i][0][0];
		totalEngineReliability *= dependentPropsObj["reliability"][i][1];
		totalStructureReliability *= dependentPropsObj["reliability"][i][2];

	}

	dependentPropsObj["mass"][6] = [systemMass, totalFuelMass, totalEngineMass, totalStructureMass, systemMass + totalFuelMass + totalEngineMass + totalStructureMass];
	dependentPropsObj["dv"][6] = totaldv;
	dependentPropsObj["reliability"][6] = [1, totalFuelReliability, totalEngineReliability, totalStructureReliability, totalFuelReliability * totalEngineReliability * totalStructureReliability];

return dependentPropsObj;
};
