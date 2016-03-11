 var currentStage = [[300000, 300000], 40000, 10000, 0.2, 10, 8000000, 6000000, 450];
 
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

var data = [[6371000 + 154000, 0, -500, 10000]];

var r = [6371000];
var t = [0];
var vr = [0];
var vt = [6371000 * 2 * Math.PI / Planet.dayLength];
var time = [0];

for (var i = 1; i < 200; i++){
    
    data = RK452(r[i - 1], t[i - 1], vr[i - 1], vt[i - 1], currentStage, Planet, 0.717);

    r[i] = data[0];
    t[i] = data[1];
    vr[i] = data[2];
    vt[i] = data[3];
    time[i] = time[i - 1] + data[5];
    currentStage[0][0] = data[4];
    console.log(time[i], r[i]);
}





function RK452(r, t, vr, vt, stage, planet, heading){
    
    var hmaxFlag = false;
    var thrustVac = stage[5];
    var thrustAtm = stage[6];
    
    if (stage[0][0] > 0){
        var burnRate = thrustVac / stage[7] / 9.80665;
        var hmax = stage[0][0] / burnRate;
    } else {
        burnRate = 0;
        hmax = 0;
    }
    
    var mass = stage[0][0] + stage[1] + stage[2];
    var dragConstant = stage[3] * Math.PI / 4 * Math.pow(stage[4], 2);
        
    var h = 10;
        
    for (var i = 0; i < 10; i++){
    
        var k1 =    a(
                        r,
                        vr, 
                        vt,
                        mass,
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading
                    );
        var k2 =    a(
                        r  + 1 / 4 * k1[0],
                        vr + 1 / 4 * k1[2], 
                        vt + 1 / 4 * k1[3], 
                        mass + 1 / 4 * k1[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading
                    );
        var k3 =    a(
                        r  + 3 / 32 * k1[0] + 9 / 32 * k2[0],
                        vr + 3 / 32 * k1[2] + 9 / 32 * k2[2], 
                        vt + 3 / 32 * k1[3] + 9 / 32 * k2[3], 
                        mass + 3 / 32 * k1[4] + 9 / 32 * k2[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading
                    );
        var k4 =    a(
                        r  + 1932 / 2197 * k1[0] - 7200 / 2197 * k2[0] + 7296 / 2197 * k3[0],
                        vr + 1932 / 2197 * k1[2] - 7200 / 2197 * k2[2] + 7296 / 2197 * k3[2], 
                        vt + 1932 / 2197 * k1[3] - 7200 / 2197 * k2[3] + 7296 / 2197 * k3[3], 
                        mass + 1932 / 2197 * k1[4] - 7200 / 2197 * k2[4] + 7296 / 2197 * k3[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading
                    );
        var k5 =    a(
                        r  + 439 / 216 * k1[0] - 8 * k2[0] + 3680 / 513 * k3[0] - 845 / 4104 * k4[0],
                        vr + 439 / 216 * k1[2] - 8 * k2[2] + 3680 / 513 * k3[2] - 845 / 4104 * k4[2], 
                        vt + 439 / 216 * k1[3] - 8 * k2[3] + 3680 / 513 * k3[3] - 845 / 4104 * k4[3], 
                        mass + 439 / 216 * k1[4] - 8 * k2[4] + 3680 / 513 * k3[4] - 845 / 4104 * k4[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading
                    );
        var k6 =    a(
                        r  - 8 / 27 * k1[0] + 2 * k2[0] - 3544 / 2565 * k3[0] + 1859 / 4104 * k4[0] - 11 / 40 * k5[0],
                        vr - 8 / 27 * k1[2] + 2 * k2[2] - 3544 / 2565 * k3[2] + 1859 / 4104 * k4[2] - 11 / 40 * k5[2], 
                        vt - 8 / 27 * k1[3] + 2 * k2[3] - 3544 / 2565 * k3[3] + 1859 / 4104 * k4[3] - 11 / 40 * k5[3], 
                        mass - 8 / 27 * k1[4] + 2 * k2[4] - 3544 / 2565 * k3[4] + 1859 / 4104 * k4[4] - 11 / 40 * k5[4],
                        h,
                        dragConstant,
                        thrustVac,
                        thrustAtm,
                        burnRate,
                        heading
                    );
        
        var r1 = r + 25 / 216 * k1[0] + 1408 / 2565 * k3[0] + 2197 / 4104 * k4[0] - 1 / 5 * k5[0];
        var r2 = r + 16 / 135 * k1[0] + 6656 / 12825 * k3[0] + 28561 / 56430 * k4[0] - 9 / 50 * k5[0] + 2 / 55 * k6[0];
        
        var t1 = t + 25 / 216 * k1[1] + 1408 / 2565 * k3[1] + 2197 / 4104 * k4[1] - 1 / 5 * k5[1];
        var t2 = t + 16 / 135 * k1[1] + 6656 / 12825 * k3[1] + 28561 / 56430 * k4[1] - 9 / 50 * k5[1] + 2 / 55 * k6[1];
        
        var vr1 = vr + 25 / 216 * k1[2] + 1408 / 2565 * k3[2] + 2197 / 4104 * k4[2] - 1 / 5 * k5[2];
        var vr2 = vr + 16 / 135 * k1[2] + 6656 / 12825 * k3[2] + 28561 / 56430 * k4[2] - 9 / 50 * k5[2] + 2 / 55 * k6[2];
        
        var vt1 = vt + 25 / 216 * k1[3] + 1408 / 2565 * k3[3] + 2197 / 4104 * k4[3] - 1 / 5 * k5[3];
        var vt2 = vt + 16 / 135 * k1[3] + 6656 / 12825 * k3[3] + 28561 / 56430 * k4[3] - 9 / 50 * k5[3] + 2 / 55 * k6[3];  
        
        var fuelMass = stage[0][0] - burnRate * h;  
        
        var rError = 0.1 * h / Math.abs(r1 - r2);
        var tError = 1e-7 * h / Math.abs(t1 - t2);
        var vrError = 1e-8 * h / Math.abs(vr1 - vr2);
        var vtError = 1e-8 * h / Math.abs(vt1 - vt2);
        
        var maxError = Math.min(rError, tError, vrError, vtError);
        
        var sh = 0.84 * Math.pow(maxError, 1 / 4) * h;
        
        if (Math.abs(h - sh) / sh < 1e-1 || (hmaxFlag ==  true && hmax > sh)){
            break;
        }
        
        if (h > hmax && hmax > 0){
            h = hmax;
            hmaxFlag = true;
        } else {
            h = sh;
        }
        
    }
    
    return [r2, t2, vr2, vt2, fuelMass, h];
}

function a(r, vr, vt, mass, h, dragConstant, thrustVac, thrustAtm, burnRate, heading){

    var vt_s = vt - r * 2 * Math.PI / Planet.dayLength;
    var sp_s = Math.pow(vr * vr + vt_s * vt_s, 0.5);


    if (sp_s == 0 || r > Planet.atmHeight + Planet.radius){
        var ar_d = 0;
        var at_d = 0;
    } else {
        var atmDensity = 0.042295 * Planet.pressure * Math.exp(-(r - Planet.radius) / Planet.atmScale / 1000) * Planet.atmWeight;
        var a_d = 1 / 2 * atmDensity * Math.pow(sp_s, 2) * dragConstant / sp_s / mass;
        ar_d = -vr * a_d;
        at_d = -vt_s * a_d;
    }

    if (heading != -1 && burnRate != 0){
        if(r < Planet.atmHeight + Planet.radius){
            var thrust = thrustVac - (thrustVac - thrustAtm) * Planet.pressure * Math.exp(-(r - Planet.radius) / Planet.atmScale / 1000);
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
    
    var ar = vt * vt / r - 3.986e14 / r / r + ar_d + ar_t;
    var at = vt * (r / (r + vr) - 1) + at_d + at_t;

    return [h * vr, h * vt / r, h * ar, h * at, - h * burnRate];
}
