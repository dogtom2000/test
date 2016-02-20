tankCalc = function(fuel, mixRatio, tankDiameter, tankLength, structuralDensity){

	//with Saturn V materials tank should weight 7.11 * L/D + 4.32 kg/m3 (L/D range from 2 to 4)

var tankVolume = Math.PI / 4 * Math.pow(tankDiameter, 2) * tankLength;
var stuctureMass = tankVolume * structuralDensity + 10;
var fuelDensity = (mixRatio + 1) / (mixRatio / fuel.density[0] + 1 / fuel.density[1]);
var fuelMass = tankVolume * fuel.density[2] * fuelDensity;



return [fuelMass, stuctureMass]

}