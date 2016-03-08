reentry = function(Planet, Rocket, apoapsis, periapsis){ //, theta, phi


	var vel_apo = Math.pow(2 * Planet.sgp * periapsis / apoapsis / (apoapsis + periapsis), 0.5);
	var omega_rad_squared = apoapsis * vel_apo;

	var rad_reentry = Planet.atmHeight * 1.1 + Planet.radius;
	var spe_reentry = Math.pow(2 * Planet.sgp * (1 / rad_reentry - 1 / apoapsis) + Math.pow(vel_apo, 2), 0.5);
	var ang_reentry = Math.asin(omega_rad_squared / rad_reentry / spe_reentry);
    //set constant, variable theta/phi could be implemented in future build
    var theta = 0;
    var phi = Math.PI / 2;


    //initialize variables
    var t = 0;
    var dt = 1;
    var tMax = 20000;
    var stopFlag = false;

    var dragMagSum = 0;
    var initialApoapsis = apoapsis; //calculate apo for vel_peri initial + dragSum if our apo is greater than the starting value this make this the drag apo

    var time = [0];
    var acceleration = [[0,0,0]]; //[d2r/dr2, d2theta/dt2, d2phi/dt2]
    var velocity = [[0,0,0]]; //[dr/dt, dtheta/dt, dphi/dt]
    var position = [[0,0,0]]; //[r, theta, phi]
    var positionAddLast = [-spe_reentry * Math.cos(ang_reentry), spe_reentry * Math.sin(ang_reentry) / rad_reentry , 0];

    //intial values
    velocity[0] = [-spe_reentry * Math.cos(ang_reentry), spe_reentry * Math.sin(ang_reentry) , 0];
    position[0] = [rad_reentry, theta, phi];

    //set current stage to first rocket stage
    var currentStage = Rocket.stages[Rocket.stageCount];
    console.log(position[0][0], velocity[0])
    for (var t = 0; t < tMax; t++){

        //check to see if rocket falls into planet, will happen if twr is insufficient
        if(position[t][0] < Planet.radius){
            Rocket.state[1] = "Surface";
            Rocket.state[2] = "---";
            Rocket.state[3] = "---";
            stopFlag = true;
        }
        
        if (position[t][0] > rad_reentry){
            Rocket.state[2] = apoapsis;
            Rocket.state[3] = periapsis;
        	stopFlag = true;
        }
        
        //assign stage variables
        var stageFuelMass = currentStage[0][0];
        var stageDryMass = currentStage[1];
        var stageMass = stageFuelMass + stageDryMass + currentStage[2];
        var stageDrag = currentStage[3];
        var stageArea = Math.PI / 4 * Math.pow(currentStage[4], 2);

        //calculate surface speed
        var surfaceVelocity = arrayAdd(velocity[t], [0, - position[t][0] * Math.sin(phi) * 2 * Math.PI / Planet.dayLength, 0]);
        var surfaceSpeed = magn(surfaceVelocity);
/*
        if (velocity[t][0] < 0 && surfaceSpeed > 250 && surfaceSpeed < 700){
            currentStage[3] = 0.75;
            currentStage[4] = 10;
        }
        if (velocity[t][0] < 0 && surfaceSpeed < 250){
            currentStage[3] = 1.5;
            currentStage[4] = 35;
        }
*/
        //calculate orbital properties
        var orbitalProperties = orbitalPropertiesCalc(velocity[t], position[t]);
        apoapsis = orbitalProperties[0];
        periapsis = orbitalProperties[1];
        
        //calculate accelerations
        var centripetalAcceleration = [(Math.pow(velocity[t][1],2) + Math.pow(velocity[t][2],2)) / position[t][0], 0, 0];
        var gravityAcceleration = [-Planet.sgp / Math.pow(position[t][0],2), 0, 0];
        var eulerAcceleration = [0,-velocity[t][1] * (1 - position[t][0] / (position[t][0] + velocity[t][0])),0];
        if (surfaceSpeed === 0 || position[t][0] > Planet.atmHeight + Planet.radius){
            var dragAcceleration = [0,0,0];
        } else {
            var density = 0.042295 * Planet.pressure * Math.exp(-(position[t][0] - Planet.radius) / Planet.atmScale / 1000) * Planet.atmWeight;
            var dragFraction = -stageDrag * density * Math.pow(surfaceSpeed, 2) * stageArea / 2 / stageMass / surfaceSpeed;
            dragAcceleration = arrayMul(surfaceVelocity, dragFraction);
        }

        var dragMag = magn(dragAcceleration);

        if (dragMag > 0){
            dragMagSum += dragMag;
        }
        
        //add accerlations together        
        acceleration[t] = arrayAddPlus(centripetalAcceleration, gravityAcceleration, dragAcceleration, eulerAcceleration);

        if (velocity[t][0] == 0 && velocity[t][1] != 0){
            var velAccelRatio = Math.abs(acceleration[t][1] / velocity[t][1]);
        } else if (velocity[t][1] == 0 && velocity[t][0] != 0){
            velAccelRatio = Math.abs(acceleration[t][0] / velocity[t][0]);
        } else if (velocity[t][0] != 0 && velocity[t][1] != 0){
            velAccelRatio = Math.max(Math.abs(acceleration[t][1] / velocity[t][1]), Math.abs(acceleration[t][0] / velocity[t][0]));
        } else {
            velAccelRatio = 0;
        }
        
        if (stopFlag == true){
            break;
        }

        dt = 1;
        //increment time, velocity, and position based on acceleration
        time[t + 1] = time[t] + dt;
        
        velocity[t + 1] = arrayAdd(velocity[t], arrayMul(acceleration[t], dt));
            
        var positionAdd = [velocity[t + 1][0], velocity[t + 1][1] / position[t][0], velocity[t + 1][2] / position[t][0]];

        var positionAddAve = arrayMul(arrayAdd(positionAdd, positionAddLast), 0.5);

        position[t + 1] = arrayAdd(position[t], arrayMul(positionAddAve, dt)); 

        positionAddLast = positionAdd;
        


    }
    console.log(position[t][0], velocity[t])
    return [Rocket, time, position, velocity, acceleration];
    
    //calculate orbital properties
    function orbitalPropertiesCalc(velocity, position){
        var angularMomentum = cross([position[0], 0, 0], velocity);
        var eccVector = arraySub(arrayDiv(cross(velocity, angularMomentum), Planet.sgp), [1, 0, 0]);
        var ecc = magn(eccVector);
        var orbitalEnergy = Math.pow(magn(velocity), 2) / 2 - Planet.sgp / position[0];
        var semiMajorAxis = -Planet.sgp / 2 / orbitalEnergy;
        var apoapsis = semiMajorAxis * (1 + Math.abs(ecc));
        var periapsis = semiMajorAxis * (1 - Math.abs(ecc));
        return [apoapsis, periapsis];
    }
};

function arrayAdd(array, val){
    
    var arrayNew = [];
    if (Array.isArray(val)){
        if (array.length !== val.length){
            return "array length mismatch";
        } else {
            for (var i = 0; i < array.length; i++){
                arrayNew[i] = array[i] + val[i];
            }            
        } 
    } else {
        for (var i = 0; i < array.length; i++){
            arrayNew[i] = array[i] + val;
        }
    }
    return arrayNew;

}

function arraySub(array, val){
    
    var arrayNew = [];
    if (Array.isArray(val)){
        if (array.length !== val.length){
            return "array length mismatch";
        } else {
            for (var i = 0; i < array.length; i++){
                arrayNew[i] = array[i] - val[i];
            }            
        } 
    } else {
        for (var i = 0; i < array.length; i++){
            arrayNew[i] = array[i] - val;
        }
    }
    return arrayNew;

}

function arrayMul(array, val){
    
    var arrayNew = [];
    if (Array.isArray(val)){
        if (array.length !== val.length){
            return "array length mismatch";
        } else {
            for (var i = 0; i < array.length; i++){
                arrayNew[i] = array[i] * val[i];
            }            
        } 
    } else {
        for (var i = 0; i < array.length; i++){
            arrayNew[i] = array[i] * val;
        }
    }
    return arrayNew;

}

function arrayDiv(array, val){
    
    var arrayNew = [];
    if (Array.isArray(val)){
        if (array.length !== val.length){
            return "array length mismatch";
        } else {
            for (var i = 0; i < array.length; i++){
                arrayNew[i] = array[i] / val[i];
            }            
        } 
    } else {
        for (var i = 0; i < array.length; i++){
            arrayNew[i] = array[i] / val;
        }
    }
    return arrayNew;

}

function arrayAddPlus(){
    
    var newArray = [];
    for (var i = 0; i < arguments[0].length; i++){
        newArray[i] = 0;
        for (var j = 0; j < arguments.length; j++){
           newArray[i] += arguments[j][i]; 
        }
    }
  return newArray;
  
}

function magn(vector){
    
    if (vector.length == 2){
        return Math.pow(Math.pow(vector[0],2) + Math.pow(vector[1],2),0.5);
    } else if (vector.length == 3){
        return Math.pow(Math.pow(vector[0],2) + Math.pow(vector[1],2) + Math.pow(vector[2],2),0.5);
    }
   
}

function cross(u, v){
    
    return [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    
}