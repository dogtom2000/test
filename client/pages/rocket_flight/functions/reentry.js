reentry = function(planet, rocket, apoapsis, periapsis){
    var vel_apo = Math.pow(2 * Planet.sgp * periapsis / apoapsis / (apoapsis + periapsis), 0.5);
	var omega_rad_squared = apoapsis * vel_apo;

	var rad_reentry = Planet.atmHeight * 1.1 + Planet.radius;
	var spe_reentry = Math.pow(2 * Planet.sgp * (1 / rad_reentry - 1 / apoapsis) + Math.pow(vel_apo, 2), 0.5);
	var ang_reentry = Math.asin(omega_rad_squared / rad_reentry / spe_reentry);
	
	var apoFlag = false;
	var posFlag = false;
	
	var time = [0];
	var position = [[rad_reentry, 0]];
	var velocity = [[-spe_reentry * Math.cos(ang_reentry), spe_reentry * Math.sin(ang_reentry)]];
	var acceleration = [[0, 0]];
	
	var stage = rocket.stages[rocket.stageCount];
	const u = planet.sgp;
	const R = planet.radius;
	const r_o = R + orbit;
	const vt_o = Math.pow(u / (orbit + R), 0.5);
	const headingMin = 0;
	const headingMax = 19 / 40 * Math.PI;
	
	for (var i = 1; i < 2000; i++){
		var r = position[i - 1][0];
		var t = position[i - 1][1];
		var vr = velocity[i - 1][0];
		var vt = velocity[i - 1][1];
	
		var e = Math.pow(Math.pow(r * vt * vt / u - 1, 2) + Math.pow(r * vr * vt / u, 2), 0.5);
		var	E = (vr * vr + vt * vt) / 2 - u / r;
		var a = -u / 2 / E;
		var apoapsis = a * (1 + e);
		var periapsis = a * (1 - e);
		
		//test if stage/rocket is out of fuel
        if (stage[0][0] <= 0 && rocket.stageCount > 1){
            delete rocket.stages[rocket.stageCount];
            rocket.stageCount--;
            stage = rocket.stages[rocket.stageCount];
        }
		
		//test if rocket is inside planet
		if (r < R){
			rocket.state[1] = "Surface";
            rocket.state[2] = "---";
            rocket.state[3] = "---";
            break;
		}
		
		if (periapsis > r_o){
		    console.log(vt)
			rocket.state = ["Earth", "Orbit", r_o, r_o]
			break;
		}

	    if (apoFlag == false && posFlag == false){

			var orbitFraction = (r_o - apoapsis) / (r_o - R);
			var vt_h = orbitFraction * vt + (1 - orbitFraction) * vt_o;
			var h_e = Math.pow(Math.pow(r * vt_h * vt_h / u - 1, 2) + Math.pow(r * vr * vt_h / u, 2), 0.5);
			var	h_E = (vr * vr + vt_h * vt_h) / 2 - u / r;
			var h_a = -u / 2 / h_E;
			var h_apoapsis = h_a * (1 + h_e);
	
			var heading = Math.PI / 2 * (h_apoapsis - apoapsis) / (r_o - apoapsis);
			
			if (heading > headingMax){
				heading = headingMax;
			} else if (heading < headingMin){
				heading = headingMin;
			}
			
			var output = thrustedMotion(r, t, vr, vt, stage, planet, heading, 1);
			position[i] = [output[0], output[1]];
	        velocity[i] = [output[2], output[3]];
	        acceleration[i] = [output[4], output[5]];
	        stage[0][0] = output[6];
	        time[i] = time[i - 1] + output[7];
		}
		
		if (apoapsis > r_o){
			apoFlag = true;
		}	
	
		if (apoFlag == true && posFlag == false){
				var output = coastMotion(r, t, vr, vt, stage, planet, heading, 1);
				position[i] = [output[0], output[1]];
		        velocity[i] = [output[2], output[3]];
		        acceleration[i] = [output[4], output[5]];
		        stage[0][0] = output[6];
		        time[i] = time[i - 1] + output[7];
		}
	
		if (r > r_o && posFlag == false){
			posFlag = true;
			vr = 0;
			r = r_o;
		}
		
		if (posFlag == true){
				var output = apoMotion(r, t, vr, vt, stage, planet, heading, 1);
				position[i] = [output[0], output[1]];
		        velocity[i] = [output[2], output[3]];
		        acceleration[i] = [output[4], output[5]];
		        stage[0][0] = output[6];
		        time[i] = time[i - 1] + output[7];
		}

	}

	return [rocket, time, position, velocity, acceleration]
};

function thrustedMotion(r, t, vr, vt, stage, planet, heading, h){
	
	var thrustVac = stage[5];
    var thrustAtm = stage[6];
    
    if (stage[0][0] > 0){
        var burnRate = thrustVac / stage[7] / 9.80665;
        h = Math.min(stage[0][0] / burnRate, h);
    } else {
        burnRate = 0;
    }
    
    var mass = stage[0][0] + stage[1] + stage[2];
    var dragConstant = stage[3] * Math.PI / 4 * Math.pow(stage[4], 2);
    
    var k1 =    thrustedAcceleration(
                        r,
                        vr, 
                        vt,
                        mass,
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading,
                        planet
                    );
    var k2 =    thrustedAcceleration(
                        r  + 1 / 2 * k1[0],
                        vr + 1 / 2 * k1[2], 
                        vt + 1 / 2 * k1[3], 
                        mass + 1 / 2 * k1[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading,
                        planet
                    );
    var k3 =    thrustedAcceleration(
                        r  + 1 / 2 * k2[0],
                        vr + 1 / 2 * k2[2], 
                        vt + 1 / 2 * k2[3], 
                        mass + 1 / 2 * k2[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading,
                        planet
                    );
    var k4 =    thrustedAcceleration(
                        r  + k3[0],
                        vr + k3[2], 
                        vt + k3[3], 
                        mass + k3[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading,
                        planet
                    );

    var r2 = r + 1 / 6 * k1[0] + 1 / 3 * k2[0] + 1 / 3 * k3[0] + 1 / 6 * k4[0];
    var t2 = t + 1 / 6 * k1[1] + 1 / 3 * k2[1] + 1 / 3 * k3[1] + 1 / 6 * k4[1];
    var vr2 = vr + 1 / 6 * k1[2] + 1 / 3 * k2[2] + 1 / 3 * k3[2] + 1 / 6 * k4[2];
    var vt2 = vt + 1 / 6 * k1[3] + 1 / 3 * k2[3] + 1 / 3 * k3[3] + 1 / 6 * k4[3];  
    var fuelMass = stage[0][0] + 1 / 6 * k1[4] + 1 / 3 * k2[4] + 1 / 3 * k3[4] + 1 / 6 * k4[4];  

    return [r2, t2, vr2, vt2, (vr2 - vr) / h, (vt2 - vt) / h, fuelMass, h];
	
}

function thrustedAcceleration(r, vr, vt, mass, h, dragConstant, thrustVac, thrustAtm, burnRate, heading, planet){

    var vt_s = vt - r * 2 * Math.PI / planet.dayLength;
    var sp_s = Math.pow(vr * vr + vt_s * vt_s, 0.5);

    if (sp_s == 0 || r > planet.atmHeight + planet.radius){
        var ar_d = 0;
        var at_d = 0;
    } else {
        var atmDensity = 0.042295 * planet.pressure * Math.exp(-(r - planet.radius) / planet.atmScale / 1000) * planet.atmWeight;
        var a_dn = 1 / 2 * atmDensity * Math.pow(sp_s, 2) * dragConstant / sp_s / mass;
        ar_d = -vr * a_dn;
        at_d = -vt_s * a_dn;
    }

    if (burnRate != 0){
        if(r < planet.atmHeight + planet.radius){
            var thrust = thrustVac - (thrustVac - thrustAtm) * planet.pressure * Math.exp(-(r - planet.radius) / planet.atmScale / 1000);
            if (thrust < 0){
                thrust = 0;
            }
        } else {
            thrust = thrustVac;
        }
        var ar_t = Math.cos(heading) * thrust / mass;
        var at_t = Math.sin(heading) * thrust / mass;
    } else {
        ar_t = 0;
        at_t = 0;
    }
    
    var ar = vt * vt / r - planet.sgp / r / r + ar_d + ar_t;
    var at = vt * (r / (r + vr) - 1) + at_d + at_t;

    return [h * vr, h * vt / r, h * ar, h * at, - h * burnRate];
}

function coastMotion(r, t, vr, vt, stage, planet, heading, h){
	
	var thrustVac = stage[5];
    var thrustAtm = stage[6];
    
    if (stage[0][0] > 0){
        var burnRate = thrustVac / stage[7] / 9.80665;
        h = Math.min(stage[0][0] / burnRate, h);
    } else {
        burnRate = 0;
    }
    
    var mass = stage[0][0] + stage[1] + stage[2];
    var dragConstant = stage[3] * Math.PI / 4 * Math.pow(stage[4], 2);
    
    var k1 =    coastAcceleration(
                        r,
                        vr, 
                        vt,
                        mass,
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading,
                        planet
                    );
    var k2 =    coastAcceleration(
                        r  + 1 / 2 * k1[0],
                        vr + 1 / 2 * k1[2], 
                        vt + 1 / 2 * k1[3], 
                        mass + 1 / 2 * k1[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading,
                        planet
                    );
    var k3 =    coastAcceleration(
                        r  + 1 / 2 * k2[0],
                        vr + 1 / 2 * k2[2], 
                        vt + 1 / 2 * k2[3], 
                        mass + 1 / 2 * k2[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading,
                        planet
                    );
    var k4 =    coastAcceleration(
                        r  + k3[0],
                        vr + k3[2], 
                        vt + k3[3], 
                        mass + k3[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading,
                        planet
                    );

    var r2 = r + 1 / 6 * k1[0] + 1 / 3 * k2[0] + 1 / 3 * k3[0] + 1 / 6 * k4[0];
    var t2 = t + 1 / 6 * k1[1] + 1 / 3 * k2[1] + 1 / 3 * k3[1] + 1 / 6 * k4[1];
    var vr2 = vr + 1 / 6 * k1[2] + 1 / 3 * k2[2] + 1 / 3 * k3[2] + 1 / 6 * k4[2];
    var vt2 = vt + 1 / 6 * k1[3] + 1 / 3 * k2[3] + 1 / 3 * k3[3] + 1 / 6 * k4[3];  
    var fuelMass = stage[0][0] + 1 / 6 * k1[4] + 1 / 3 * k2[4] + 1 / 3 * k3[4] + 1 / 6 * k4[4];  

    return [r2, t2, vr2, vt2, (vr2 - vr) / h, (vt2 - vt) / h, fuelMass, h];
	
}

function coastAcceleration(r, vr, vt, mass, h, dragConstant, thrustVac, thrustAtm, burnRate, heading, planet){

    var vt_s = vt - r * 2 * Math.PI / planet.dayLength;
    var sp_s = Math.pow(vr * vr + vt_s * vt_s, 0.5);

    if (sp_s == 0 || r > planet.atmHeight + planet.radius){
        var ar_d = 0;
        var at_d = 0;
    } else {
        var atmDensity = 0.042295 * planet.pressure * Math.exp(-(r - planet.radius) / planet.atmScale / 1000) * planet.atmWeight;
        var a_dn = 1 / 2 * atmDensity * Math.pow(sp_s, 2) * dragConstant / sp_s / mass;
        ar_d = -vr * a_dn;
        at_d = -vt_s * a_dn;
    }

    if (burnRate != 0){
        if(r < planet.atmHeight + planet.radius){
            var thrust = thrustVac - (thrustVac - thrustAtm) * planet.pressure * Math.exp(-(r - planet.radius) / planet.atmScale / 1000);
            if (thrust < 0){
                thrust = 0;
            }
        } else {
            thrust = thrustVac;
        }
        var a_t = thrust / mass;
        var a_d = Math.pow(ar_d * ar_d + at_d * at_d, 0.5);
        if (a_t > a_d){
        	var ar_t = - ar_d;
        	var at_t = - at_d;
        	burnRate *= a_d / a_t;
        } else {
			ar_t = 0;
			at_t = 0;
			burnRate = 0;
        }
    } else {
        ar_t = 0;
        at_t = 0;
    }
    
    var ar = vt * vt / r - planet.sgp / r / r + ar_d + ar_t;
    var at = vt * (r / (r + vr) - 1) + at_d + at_t;

    return [h * vr, h * vt / r, h * ar, h * at, - h * burnRate];
}


function apoMotion(r, t, vr, vt, stage, planet, heading, h){
	
	var thrustVac = stage[5];
    var thrustAtm = stage[6];
    
    if (stage[0][0] > 0){
        var burnRate = thrustVac / stage[7] / 9.80665;
        h = Math.min(stage[0][0] / burnRate, h);
    } else {
        burnRate = 0;
    }
    
    var mass = stage[0][0] + stage[1] + stage[2];
    var dragConstant = stage[3] * Math.PI / 4 * Math.pow(stage[4], 2);
    
    var k1 =    apoAcceleration(
                        r,
                        vr, 
                        vt,
                        mass,
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading,
                        planet
                    );
    var k2 =    apoAcceleration(
                        r  + 1 / 2 * k1[0],
                        vr + 1 / 2 * k1[2], 
                        vt + 1 / 2 * k1[3], 
                        mass + 1 / 2 * k1[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading,
                        planet
                    );
    var k3 =    apoAcceleration(
                        r  + 1 / 2 * k2[0],
                        vr + 1 / 2 * k2[2], 
                        vt + 1 / 2 * k2[3], 
                        mass + 1 / 2 * k2[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading,
                        planet
                    );
    var k4 =    apoAcceleration(
                        r  + k3[0],
                        vr + k3[2], 
                        vt + k3[3], 
                        mass + k3[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading,
                        planet
                    );

    var r2 = r + 1 / 6 * k1[0] + 1 / 3 * k2[0] + 1 / 3 * k3[0] + 1 / 6 * k4[0];
    var t2 = t + 1 / 6 * k1[1] + 1 / 3 * k2[1] + 1 / 3 * k3[1] + 1 / 6 * k4[1];
    var vr2 = vr + 1 / 6 * k1[2] + 1 / 3 * k2[2] + 1 / 3 * k3[2] + 1 / 6 * k4[2];
    var vt2 = vt + 1 / 6 * k1[3] + 1 / 3 * k2[3] + 1 / 3 * k3[3] + 1 / 6 * k4[3];  
    var fuelMass = stage[0][0] + 1 / 6 * k1[4] + 1 / 3 * k2[4] + 1 / 3 * k3[4] + 1 / 6 * k4[4];  

    return [r2, t2, vr2, vt2, (vr2 - vr) / h, (vt2 - vt) / h, fuelMass, h];
	
}

function apoAcceleration(r, vr, vt, mass, h, dragConstant, thrustVac, thrustAtm, burnRate, heading, planet){

    var vt_s = vt - r * 2 * Math.PI / planet.dayLength;
    var sp_s = Math.pow(vr * vr + vt_s * vt_s, 0.5);

    if (sp_s == 0 || r > planet.atmHeight + planet.radius){
        var ar_d = 0;
        var at_d = 0;
    } else {
        var atmDensity = 0.042295 * planet.pressure * Math.exp(-(r - planet.radius) / planet.atmScale / 1000) * planet.atmWeight;
        var a_dn = 1 / 2 * atmDensity * Math.pow(sp_s, 2) * dragConstant / sp_s / mass;
        ar_d = -vr * a_dn;
        at_d = -vt_s * a_dn;
    }


    
    var ar = vt * vt / r - planet.sgp / r / r + ar_d;
    var at = vt * (r / (r + vr) - 1) + at_d;
    
    
    if (burnRate != 0){
        if(r < planet.atmHeight + planet.radius){
            var thrust = thrustVac - (thrustVac - thrustAtm) * planet.pressure * Math.exp(-(r - planet.radius) / planet.atmScale / 1000);
            if (thrust < 0){
                thrust = 0;
            }
        } else {
            thrust = thrustVac;
        }
        
    	var a_t = thrust / mass;
		var netAccel = Math.pow(ar * ar + at * at, 0.5);
		
		if (a_t > netAccel){
			ar = 0;
			at = a_t - netAccel;
		}
    }
	

    return [h * vr, h * vt / r, h * ar, h * at, - h * burnRate];
}