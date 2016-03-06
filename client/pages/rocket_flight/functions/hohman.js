hohman = function(Rocket, Planet, change, newValue){

    var apoapsis = Rocket.state[2];
    var periapsis = Rocket.state[3];
    
    
	var deltaV = [0, 0, 0, 0, 0, 0];
	var totalDeltaV = 0;
	var keys = Object.keys(Rocket.stages);
	for (var i = 0; i < Rocket.stageCount; i++){
		var stageMass = Rocket.stages[keys[i]][0][0] + Rocket.stages[keys[i]][1] + Rocket.stages[keys[i]][2];
		var emtpyMass = Rocket.stages[keys[i]][1] + Rocket.stages[keys[i]][2];
		deltaV[i] += Math.log(stageMass / emtpyMass) * 9.80665 * Rocket.stages[keys[i]][7];
		totalDeltaV += deltaV[i];
	}
    
    if (change == "apoapsis"){
        var velocityPeriapsis = Math.pow(2 * Planet.sgp * apoapsis / periapsis / (apoapsis + periapsis), 0.5);
        var newVelocityPeriapsis = Math.pow(2 * Planet.sgp * newValue / periapsis / (newValue + periapsis), 0.5);
        var burnDeltaV = Math.abs(velocityPeriapsis - newVelocityPeriapsis);
        
    } else if (change == "periapsis"){
        var velocityApoapsis = Math.pow(2 * Planet.sgp * periapsis / apoapsis / (apoapsis + periapsis), 0.5);
        var newVelocityApoapsis = Math.pow(2 * Planet.sgp * newValue / apoapsis / (apoapsis + newValue), 0.5);
        burnDeltaV = Math.abs(velocityApoapsis - newVelocityApoapsis);
    }
    
    
    if (burnDeltaV > totalDeltaV){
        
    } else {
         while(burnDeltaV > deltaV[Rocket.stageCount - 1]){
            burnDeltaV -= deltaV[Rocket.stageCount - 1];
            delete Rocket.stages[Rocket.stageCount];
            Rocket.stageCount--;
        }
        
        stageMass = Rocket.stages[keys[Rocket.stageCount - 1]][0][0] + Rocket.stages[keys[Rocket.stageCount - 1]][1] + Rocket.stages[keys[Rocket.stageCount - 1]][2];
        emtpyMass = Rocket.stages[keys[Rocket.stageCount - 1]][1] + Rocket.stages[keys[Rocket.stageCount - 1]][2];
        Rocket.stages[keys[Rocket.stageCount - 1]][0][0] = stageMass / Math.exp(burnDeltaV / 9.80665 /  Rocket.stages[keys[Rocket.stageCount - 1]][7]) - emtpyMass;
            
        
        if (change == "apoapsis"){
            Rocket.state[2] = newValue;
        } else if (change == "periapsis"){
            if (newValue > Rocket.state[2]){
                Rocket.state[3] = Rocket.state[2];
                Rocket.state[2] = newValue;
            } else {
                Rocket.state[3] = newValue;
            }
 
        }
    }

    return Rocket;
    
};