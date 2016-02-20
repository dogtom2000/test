rocketSummary = function (stageCurrent, performance, tankStats, engineCount, fuel, pressure, diameter, length, structuralDensity){

	var stageFuelMass = [];
	var stageStructureMass = [];
	var stageEngineMass = [];
	var stageEngineCount = [];
	var stageThrust = [];
	var stageTWR = [];
	var stageIsp = []
	var stageMass = [];
	var stageDvMass = [];
	var stageDv = [];

	var totalFuelMass = 0;
	var totalEngineMass = 0;
	var totalStructureMass = 0;
	var totalDv = [0, 0];
	var totalMass = 0;
	var fuelRisk = [];
	var engineRisk = [];
	for (var i = 0; i < 6; i++){
		stageFuelMass[i] = tankStats[i][0];
		stageStructureMass[i] = tankStats[i][1];
		stageEngineMass[i] = performance[i][4] * engineCount[i];
		stageMass[i] = stageFuelMass[i] + stageStructureMass[i] + stageEngineMass[i] + 1e-6;
		stageThrust[i] = [performance[i][0] * engineCount[i], performance[i][1] * engineCount[i]];
		
		stageIsp[i] = [performance[i][2], performance[i][3]];
		if (i == 0){
			stageDvMass[i] = 0;
		} else {
			stageDvMass[i] = stageDvMass[i - 1] + stageMass[i-1];
		}
		stageDv[i] = [Math.log((stageMass[i] + stageDvMass[i]) / (stageMass[i] + stageDvMass[i] - stageFuelMass[i])) * stageIsp[i][0] * 9.80655, Math.log((stageMass[i] + stageDvMass[i]) / (stageMass[i] + stageDvMass[i] - stageFuelMass[i])) * stageIsp[i][1] * 9.80655];
		stageTWR[i] = [stageThrust[i][0] / (stageMass[i] + stageDvMass[i]) * 1000 / 9.80665, stageThrust[i][1] / (stageMass[i] + stageDvMass[i]) * 1000 / 9.80665];
		totalDv[0] += stageDv[i][0];
		totalDv[1] += stageDv[i][1];
		totalFuelMass += stageFuelMass[i];
		totalEngineMass += stageEngineMass[i];
		totalStructureMass += stageStructureMass[i];
		totalMass += stageMass[i];
		if (fuel[stageCurrent] == "LH2 LOX"){
			fuelRisk[i] = [0.999, 0.95];
		} else {
			fuelRisk[i] = [0.999, 0.999];
		}
		engineRisk[i] = 1 - 8 * (Math.pow(pressure[i], 0.5) - Math.pow(40, 0.5)) / 100;

		if (engineRisk[i] < 0){
			engineRisk[i] = 0;
		} else if (engineRisk[i] > 0.999){
			engineRisk[i] = 0.999;
		}




	}


	console.log((stageDvMass[stageCurrent] + stageMass[stageCurrent])* length[stageCurrent] / Math.pow(diameter[stageCurrent], 3) / structuralDensity[stageCurrent] )







	return [stageThrust[stageCurrent], stageIsp[stageCurrent], stageTWR[stageCurrent], stageDv[stageCurrent], stageFuelMass[stageCurrent], stageEngineMass[stageCurrent], stageStructureMass[stageCurrent], stageMass[stageCurrent], totalDv, totalFuelMass, totalEngineMass, totalStructureMass, totalMass];
}



