reentry2 = function(planet, rocket, apoapsis, periapsis){
    
    var vel_apo = Math.pow(2 * planet.sgp * periapsis / apoapsis / (apoapsis + periapsis), 0.5);
	var omega_rad_squared = apoapsis * vel_apo;

	var rad_reentry = planet.atmHeight + planet.radius;
	var spe_reentry = Math.pow(2 * planet.sgp * (1 / rad_reentry - 1 / apoapsis) + Math.pow(vel_apo, 2), 0.5);
	var ang_reentry = Math.asin(omega_rad_squared / rad_reentry / spe_reentry);

	var time = [0];
	var position = [[rad_reentry, 0]];
	var velocity = [[-spe_reentry * Math.cos(ang_reentry), spe_reentry * Math.sin(ang_reentry)]];
	var acceleration = [[0, 0]];
	
	var stage = rocket.stages[rocket.stageCount];
	
	const u = planet.sgp;
	const R = planet.radius;

	for (var i = 1; i < 2000; i++){
		var r = position[i - 1][0];
		var t = position[i - 1][1];
		var vr = velocity[i - 1][0];
		var vt = velocity[i - 1][1];
	
		var e = Math.pow(Math.pow(r * vt * vt / u - 1, 2) + Math.pow(r * vr * vt / u, 2), 0.5);
		var	E = (vr * vr + vt * vt) / 2 - u / r;
		var a = -u / 2 / E;
		apoapsis = a * (1 + e);
		periapsis = a * (1 - e);
		

		//test if rocket is inside planet
		if (r < R){
			rocket.state[1] = "Surface";
            rocket.state[2] = "---";
            rocket.state[3] = "---";
            break;
		}
		
        if (r > rad_reentry){
            rocket.state[2] = apoapsis;
            rocket.state[3] = periapsis;
            break;
        }

		var output = thrustedMotion(r, t, vr, vt, stage, planet, 5);
		position[i] = [output[0], output[1]];
        velocity[i] = [output[2], output[3]];
        acceleration[i] = [output[4], output[5]];
        time[i] = time[i - 1] + output[6];
        }
	return [rocket, time, position, velocity, acceleration];
};

function thrustedMotion(r, t, vr, vt, stage, planet, h){
    
    var mass = stage[0][0] + stage[1] + stage[2];
    var dragConstant = stage[3] * Math.PI / 4 * Math.pow(stage[4], 2);
    
    var k1 =    thrustedAcceleration(
                        r,
                        vr, 
                        vt,
                        h,
                        dragConstant,
                        planet,
                        mass
                    );
    var k2 =    thrustedAcceleration(
                        r  + 1 / 2 * k1[0],
                        vr + 1 / 2 * k1[2], 
                        vt + 1 / 2 * k1[3], 
                        h,
                        dragConstant,
                        planet,
                        mass
                    );
    var k3 =    thrustedAcceleration(
                        r  + 1 / 2 * k2[0],
                        vr + 1 / 2 * k2[2], 
                        vt + 1 / 2 * k2[3], 
                        h,
                        dragConstant,
                        planet,
                        mass
                    );
    var k4 =    thrustedAcceleration(
                        r  + k3[0],
                        vr + k3[2], 
                        vt + k3[3], 
                        h,
                        dragConstant,
                        planet,
                        mass
                    );

    var r2 = r + 1 / 6 * k1[0] + 1 / 3 * k2[0] + 1 / 3 * k3[0] + 1 / 6 * k4[0];
    var t2 = t + 1 / 6 * k1[1] + 1 / 3 * k2[1] + 1 / 3 * k3[1] + 1 / 6 * k4[1];
    var vr2 = vr + 1 / 6 * k1[2] + 1 / 3 * k2[2] + 1 / 3 * k3[2] + 1 / 6 * k4[2];
    var vt2 = vt + 1 / 6 * k1[3] + 1 / 3 * k2[3] + 1 / 3 * k3[3] + 1 / 6 * k4[3];  

    return [r2, t2, vr2, vt2, (vr2 - vr) / h, (vt2 - vt) / h, h];
	
}

function thrustedAcceleration(r, vr, vt, h, dragConstant, planet, mass){

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

    return [h * vr, h * vt / r, h * ar, h * at];
}


