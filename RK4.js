var position = [6371000, 0, 0];
var velocity = [-500, 10000, 0];
var Planet =  {
		    name: "Earth",
		    sgp: 3.986e14,
		    radius: 6.371e6,
		    pressure: 1,
		    atmScale: 7,
		    atmHeight: 1.4e5,
		    atmWeight: 28.97,
		    dayLength: 86400
	};


RK4(position[0], velocity[0], velocity[1], 0, 100, 4, 0.2, 0.975, Planet);

function RK4(r, vr, vt, thrust, mass, A, cD, heading, Planet){
    
    var dt = 10;
    var kv1 = acceleration(r, vr, vt, thrust, mass, A, cD, heading, Planet);
    var kr1 = vr;
    var kv2 = acceleration((r + kr1 * dt / 3), vr, vt, thrust, mass, A, cD, heading, Planet);
    var kr2 = vr + kv1 * dt / 3;
    var kv3 = acceleration(r + kr1 * dt / 6 + kr2 * dt / 6, vr, vt, thrust, mass, A, cD, heading, Planet);
    var kr3 = vr + kv1 * dt / 6 + kv2 * dt / 6;
    var kv4 = acceleration(r + kr1 * dt / 8 + kr3 * dt * 3 / 8, vr, vt, thrust, mass, A, cD, heading, Planet);
    var kr4 = vr + kv1 / 8 + kv3 * 3 / 8;
    var kv5 = acceleration(r + kr1 / 2 - kr3 * 3 / 2 + kr4 * 2, vr, vt, thrust, mass, A, cD, heading, Planet);
    var kr5 = vr + kv1 / 2 - kv3 * 3 / 2 + kv4 * 2;
    
    console.log(kv1, kv2, kv3, kv4, kv5, kr1, kr2, kr3, kr4, kr5)
  
}


function acceleration(r, vr, vt, thrust, mass, A, cD, heading, Planet){

    var vt_surface = vt - r * 2 * Math.PI / Planet.dayLength;
    var sp_surface = Math.pow(vr * vr + vt_surface * vt_surface, 0.5);
    
    if (sp_surface === 0 || r > Planet.atmHeight + Planet.radius){
        var ar_d = 0;
        var at_d = 0;
    } else {
        var density = 0.042295 * Planet.pressure * Math.exp(-(r - Planet.radius) / Planet.atmScale / 1000) * Planet.atmWeight;
        var dragFraction = -cD * density * Math.pow(sp_surface, 2) * A / 2 / mass / sp_surface;
        ar_d = vr * dragFraction;
        at_d = vt_surface * dragFraction;
    }

    var ar = Math.cos(heading) * thrust / mass + vt * vt / r - Planet.sgp / r / r +  ar_d;
    var at = Math.sin(heading) * thrust / mass + vt * (r / (vr + r) - 1) + at_d;
    
    return ar;
}



