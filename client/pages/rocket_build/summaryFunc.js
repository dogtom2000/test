summaryFunc = function(stage, dataSummary, submitStatus, tankLength, tankDiameter, structuralDensity, mixRatio, enginePressure, engine, fuel, payloadSystem){
	
	var dvMass = [];

	var fuelData = Fuel.find({name: fuel}).fetch()[0];
	var tankVolume = Math.PI / 4 * Math.pow(tankDiameter, 2) * tankLength;
	var fuelDensity = (mixRatio + 1) / (mixRatio / fuelData.density[0] + 1 / fuelData.density[1]);

	var structureMass =  tankVolume * structuralDensity + 10;
	var fuelMass = tankVolume * fuelData.density[2] * fuelDensity;
	var engineMass = engine["engineMass"];
	var stageMass = structureMass + fuelMass + engineMass + 1e-6;

	var totalFuelMass = 0;
	var totalEngineMass = 0;
	var totalStructureMass = 0;
	var totalDv = [0, 0];

	var totalFuelReliability = 1;
	var totalEngineReliability = 1;
	var totalStructureReliability = 1;
	var totalReliability = 1;

	dataSummary["mass"][stage] = [fuelMass, engineMass, structureMass, stageMass];

	dataSummary["thrust"][stage] = [engine["thrustVac"], engine["thrustAtm"]];
	dataSummary["Isp"][stage] = [engine["ispVac"], engine["ispAtm"]];

	for (var i = 0; i < 6; i++){
		if (i == 0){
			dvMass[i] = payloadSystem.mass;
		} else {
			dvMass[i] = dvMass[i - 1] + dataSummary["mass"][i - 1][3];
		}
		dataSummary["dV"][i] = [Math.log((dataSummary["mass"][i][3] + dvMass[i]) / (dataSummary["mass"][i][3] + dvMass[i] - dataSummary["mass"][i][0])) * dataSummary["Isp"][i][0] * 9.80655, Math.log((dataSummary["mass"][i][3] + dvMass[i]) / (dataSummary["mass"][i][3] + dvMass[i] - dataSummary["mass"][i][0])) * dataSummary["Isp"][i][1] * 9.80655]
		dataSummary["TWR"][i] = [dataSummary["thrust"][i][0] / (dataSummary["mass"][i][3] + dvMass[i]) / 9.80665, dataSummary["thrust"][i][1] / (dataSummary["mass"][i][3] + dvMass[i]) / 9.80665]
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

	dataSummary["reliability"][stage] = [fuelData.reliability, engineReliability, structureReliability, fuelData.reliability[0] * engineReliability* structureReliability];


	for (var i = 0; i < 6; i++){
		totalFuelMass += dataSummary["mass"][i][0];
		totalEngineMass += dataSummary["mass"][i][1];
		totalStructureMass += dataSummary["mass"][i][2];
		totalDv[0] += dataSummary["dV"][i][0];
		totalDv[1] += dataSummary["dV"][i][1];
		totalFuelReliability *= dataSummary["reliability"][i][0][0];
		totalEngineReliability *= dataSummary["reliability"][i][1];
		totalStructureReliability *= dataSummary["reliability"][i][2];

	}

	dataSummary["mass"][6] = [payloadSystem.mass, totalFuelMass, totalEngineMass, totalStructureMass, payloadSystem.mass + totalFuelMass + totalEngineMass + totalStructureMass];
	dataSummary["dV"][6] = totalDv;
	dataSummary["reliability"][6] = [1, totalFuelReliability, totalEngineReliability, totalStructureReliability, totalFuelReliability * totalEngineReliability * totalStructureReliability];

return dataSummary
}
