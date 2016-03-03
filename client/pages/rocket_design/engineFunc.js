engineFunc = function(engineCount, fuel, mixRatio, pressure, nozzleLength, massRate){

//check for values in range
    var pressureArray = [5, 10, 25, 50, 100, 200, 300];
    var mcount = 0;
    var pcount = 0;
    var upper = [];
    var lower = [];
    var data = [];
    var keys = ["mixRatio1", "mixRatio2", "mixRatio3", "mixRatio4", "mixRatio5"];
    var pressureInterp;
    var mixRatioIterp;
    var throatPressure;
    var throatTemperature;
    var throatArea;
    var gasConstant = 8.3145;
    var standardGravity = 9.80665;
    var machNumber;
    
    for (var i = 0; i < keys.length; i++){
        if(mixRatio > fuel[keys[i]][0]){
            mcount++;
        }
    }
    
    for (i = 0; i < pressureArray.length; i++){
        if(pressure > pressureArray[i]){
            pcount++;
        }
    }

    pressureInterp = (pressure - pressureArray[pcount - 1]) / (pressureArray[pcount] - pressureArray[pcount - 1]);
    mixRatioIterp = (mixRatio - fuel[keys[mcount - 1]][0]) / (fuel[keys[mcount]][0] - fuel[keys[mcount - 1]][0]);

    for (var i = 0; i < 3; i++){
        upper[i] = pressureInterp * (fuel[keys[mcount]][i + 1][pcount] - fuel[keys[mcount]][i + 1][pcount - 1]) +  fuel[keys[mcount]][i + 1][pcount - 1];
        lower[i] = pressureInterp * (fuel[keys[mcount - 1]][i + 1][pcount] - fuel[keys[mcount - 1]][i + 1][pcount - 1]) +  fuel[keys[mcount - 1]][i + 1][pcount - 1];
        data[i] = mixRatioIterp * (upper[i] - lower[i]) + lower[i];
    }

    var temperature = data[0];
    var weight = data[1];
    var gamma = data[2];

    throatPressure = pressure * Math.pow((1 + (gamma - 1) / 2), -gamma / (gamma - 1));
    throatTemperature = temperature / (1 + (gamma - 1) / 2);
    
    throatArea = massRate / (101325 * throatPressure) * Math.pow(1000 * gasConstant * throatTemperature / weight / gamma, 0.5);

    var exhaustDiameter = nozzleLength * 0.5359 + Math.pow( 4 / Math.PI * throatArea, 0.5);
    var exhaustArea = Math.PI / 4 * Math.pow(exhaustDiameter, 2);
    
    var a = 2 / (gamma + 1);
    var b = (gamma - 1) / (gamma + 1);
    var c = 1 / 2 / b;
    var expansionRatio = exhaustArea / throatArea;
    
    machNumber = Math.pow((Math.pow((expansionRatio * 5), 1 / c) - a) / b, 0.2);

    for (var i = 1; i < 100; i++){
        var F = 1 / machNumber * Math.pow((a + b * Math.pow(machNumber, 2)), c) - expansionRatio;
        var dF = Math.pow((a + b * Math.pow(machNumber, 2)), c - 1) - Math.pow((a + b * Math.pow(machNumber, 2)), c) / Math.pow(machNumber, 2);
        machNumber -= F/dF;
        if (Math.abs(F) < 1e-8){
            break;
        }
    }
 
    var exhaustPressure = pressure / Math.pow(Math.pow(machNumber, 2) * (gamma - 1) / 2 + 1, gamma / (gamma - 1));

    var exhaustVelocity = Math.pow((2 * gamma) / (gamma - 1) * (1000 * gasConstant * temperature / weight) * (1 - Math.pow(exhaustPressure / pressure, (gamma - 1) / gamma)), 0.5);

    var nozzleVolume = (exhaustArea + throatArea) / 2 * nozzleLength; 

    var thrustVac = massRate * exhaustVelocity + 101325 * exhaustPressure * exhaustArea;
    var thrustAtm = massRate * exhaustVelocity + 101325 * (exhaustPressure - 1) * exhaustArea;
    if (thrustAtm < 0){
        thrustAtm = 0;
    }
    var ispVac = thrustVac / massRate / standardGravity;
    var ispAtm = thrustAtm / massRate / standardGravity;

    var engineMass = 5 * massRate + Math.pow(massRate / pressure, 0.5) * 75 + nozzleVolume * 80;

    var engine = {
        "thrustVac": thrustVac * engineCount,
        "thrustAtm": thrustAtm * engineCount,
        "ispVac": ispVac,
        "ispAtm": ispAtm,
        "engineMass": engineMass * engineCount
    };

    return engine
};