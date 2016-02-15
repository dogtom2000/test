thermodynamics = function(fuel, mixRatio, pressure, nozzleLength, massRate){

//check for values in range

fuel = {
    pressure:  [1, 10, 25, 50, 75, 100, 150, 200],
    data: [1141, 70.8],
    mixRatio1: [3.9681,[2802.3, 2979.4, 3037.1, 3074.6, 3093.9, 3106.4, 3122.5, 3132.7],[9.6360, 9.7940, 9.8470, 9.8820, 9.9000, 9.9110, 9.9260, 9.9360],[1.2313, 1.2242, 1.2219, 1.2205, 1.2197, 1.2193, 1.2187, 1.2183]],
    mixRatio2: [4.5350,[2898.0, 3119.3, 3198.7, 3253.3, 3282.6, 3302.1, 3327.7, 3344.5],[10.537, 10.758, 10.839, 10.896, 10.926, 10.946, 10.973, 10.991],[1.2267, 1.2181, 1.2152, 1.2132, 1.2122, 1.2115, 1.2106, 1.2100]],
    mixRatio3: [5.2908,[2978.0, 3243.6, 3347.0, 3422.0, 3463.9, 3492.6, 3531.5, 3557.7],[11.657, 11.954, 12.073, 12.161, 12.210, 12.244, 12.290, 12.321],[1.2226, 1.2127, 1.2091, 1.2065, 1.2051, 1.2042, 1.2029, 1.2020]],
    mixRatio4: [6.3490,[3032.3, 3332.1, 3456.1, 3550.2, 3604.9, 3643.4, 3696.9, 3734.2],[13.074, 13.458, 13.622, 13.748, 13.822, 13.875, 13.949, 14.000],[1.2193, 1.2085, 1.2043, 1.2012, 1.1995, 1.1983, 1.1966, 1.1954]],
    mixRatio5: [7.9362,[3050.5, 3361.5, 3492.9, 3594.4, 3654.2, 3696.8, 3756.8, 3799.3],[14.919, 15.381, 15.583, 15.742, 15.837, 15.905, 16.002, 16.071],[1.2170, 1.2060, 1.2017, 1.1984, 1.1965, 1.1952, 1.1934, 1.1921]],
}
  
    var mcount = 0;
    var pcount = 0;
    var upper = [];
    var lower = [];
    var data = [];
    var keys = Object.keys(fuel);
    var pressureInterp;
    var mixRatioIterp;
    var throatPressure;
    var throatTemperature;
    var throatArea;
    var gasConstant = 8.3145;
    var standardGravity = 9.80665;
    var machNumber;


    keys.shift();
    keys.shift();
    
    for (var i = 0; i < keys.length; i++){
        if(mixRatio > fuel[keys[i]][0]){
            mcount++;
        }
    }
    
    for (i = 0; i < fuel.pressure.length; i++){
        if(pressure > fuel.pressure[i]){
            pcount++;
        }
    }
    
    pressureInterp = (pressure - fuel.pressure[pcount - 1]) / (fuel.pressure[pcount] - fuel.pressure[pcount - 1]);
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
    
    machNumber = Math.pow((Math.pow((expansionRatio * 5), 1 / c) - a) / b, 0.2)
    
    for (var i = 1; i < 20; i++){
        var F = 1 / machNumber * Math.pow((a + b * Math.pow(machNumber, 2)), c) - expansionRatio;
        var dF = Math.pow((a + b * Math.pow(machNumber, 2)), c - 1) - Math.pow((a + b * Math.pow(machNumber, 2)), c) / Math.pow(machNumber, 2);
        machNumber -= F/dF;
        
        if (Math.abs(F) < 1e-8){
            break;
        }
    }

    var exhaustPressure = pressure / Math.pow(Math.pow(machNumber, 2) * (gamma - 1) / 2 + 1, gamma / (gamma - 1));

    var exhaustVelocity = Math.pow((2 * gamma) / (gamma - 1) * (1000 * gasConstant * temperature / weight) * (1 - Math.pow(exhaustPressure / pressure, (gamma - 1) / gamma)), 0.5)

    //we only really need to return exhaust pressure, exhaust velocity, and throat area
    //mass will be related to pressure, chamber size, temp leads to more heating

    var nozzleVolume = (exhaustArea + throatArea) / 2 * nozzleLength; //mass rate 0.2kg / (kg/s sqrt(atm)) 200 kg/s @ 100 atm = 400kg; 480 kg / m3 if they have better nozzle effective length is longer, but actualy is not, improve ratios with other upgrades
    
    var thrustVac = massRate * exhaustVelocity + 101325 * exhaustPressure * exhaustArea;
    var thrustAtm = massRate * exhaustVelocity + 101325 * (exhaustPressure - 1) * exhaustArea;
    if (thrustAtm < 0){
        thrustAtm = 0;
    }
    var ispVac = thrustVac / massRate / standardGravity;
    var ispAtm = thrustAtm / massRate / standardGravity;

    var engineMass = 5 * massRate + Math.pow(massRate / pressure, 0.5) * 75 + nozzleVolume * 80;
    var heatCoefficient = Math.pow(temperature / 1000, 2) * massRate / 100;
    return [thrustVac/1000, thrustAtm/1000, ispVac, ispAtm, engineMass];
 
}