hohman = function(Rocket, Planet, change, newValue){
    //mass
    //isp
    //thrust
    //apo
    //peri
    //grav param
    //
    var apoapsis = Rocket.state[2];
    var periapsis = Rocket.state[3];
    
    
	var deltaV = [0, 0, 0, 0, 0, 0];
	var keys = Object.keys(Rocket.stages);
	for (var i = 0; i < Rocket.stageCount; i++){
		var stageMass = Rocket.stages[keys[i]][0][0] + Rocket.stages[keys[i]][1] + Rocket.stages[keys[i]][2];
		var emtpyMass = Rocket.stages[keys[i]][1] + Rocket.stages[keys[i]][2];
		deltaV[i] += Math.log(stageMass / emtpyMass) * 9.80665 * Rocket.stages[keys[i]][7];

	}
    
    console.log(deltaV)
    
    
    
}