orbitBody = function(Planet, Rocket, orbit){ //, theta, phi

    //set constant, variable theta/phi could be implemented in future build
    var theta = 0;
    var phi = Math.PI / 2;

    //initialize variables
    var t = 0;
    var dt = 1;
    var tMax = 20000;
    var stopFlag = false;
    var orbitFlag = false;
    var emtpyFlag = false;

    var standardGravity = 9.80665;
    var hvelScale = 0.95;

    var time = [0];
    var heading = [];
    var acceleration = [[0,0,0]]; //[d2r/dr2, d2theta/dt2, d2phi/dt2]
    var velocity = [[0,0,0]]; //[dr/dt, dtheta/dt, dphi/dt]
    var position = [[0,0,0]]; //[r, theta, phi]
    var positionAddLast = [0, Math.sin(phi) * 2 * Math.PI / Planet.dayLength, 0];

    //intial values
    velocity[0] = [0, Planet.radius * Math.sin(phi) * 2 * Math.PI / Planet.dayLength, 0];
    position[0] = [Planet.radius, theta, phi];

    //set current stage to first rocket stage
    var currentStage = Rocket.stages[Rocket.stageCount];

    for (var t = 0; t < tMax; t++){
        //check to see if rocket falls into planet, will happen if twr is insufficient
        if(position[t][0] < Planet.radius){
            Rocket.state[1] = "Surface";
            Rocket.state[2] = "---";
            Rocket.state[3] = "---";
            stopFlag = true;
        }
        
        //if stage has no remaining fuel, proceed to next stage, if this is the final stage rocket is out of fuel
        if(currentStage[0][0] <= 0 && Rocket.stageCount > 1){
            delete Rocket.stages[Rocket.stageCount];
            Rocket.stageCount--;
            currentStage = Rocket.stages[Rocket.stageCount];
        } else if (currentStage[0][0] <= 0 && Rocket.stageCount == 1){
            emtpyFlag = true;
        }
        
        //assign stage variables
        var stageFuelMass = currentStage[0][0];
        var stageDryMass = currentStage[1];
        var stageMass = stageFuelMass + stageDryMass + currentStage[2];
        var stageDrag = currentStage[3];
        var stageArea = Math.PI / 4 * Math.pow(currentStage[4], 2);
        var stageThrustVac = currentStage[5];
        var stageThrustAtm = currentStage[6];
        var stageIsp = currentStage[7];
        var stageBurnRate = stageThrustVac / stageIsp / standardGravity;

        if (position[t][0] > Planet.atmHeight + Planet.radius){
            var stageThrust = stageThrustVac;
        } else {
            stageThrust = stageThrustVac - (stageThrustVac - stageThrustAtm) * Planet.pressure * Math.exp(-(position[t][0] - Planet.radius) / Planet.atmScale / 1000);
            if (stageThrust < 0){
                stageThrust = 0;
            }
        }
        //calculate surface speed
        var surfaceVelocity = arrayAdd(velocity[t], [0, - position[t][0] * Math.sin(phi) * 2 * Math.PI / Planet.dayLength, 0]);
        var surfaceSpeed = magn(surfaceVelocity);
/*
        if (velocity[t][0] < 0 && surfaceSpeed > 500 && surfaceSpeed < 2000){
            currentStage[3] = 0.75;
            currentStage[4] = 0.5;
        }
        if (velocity[t][0] < 0 && surfaceSpeed < 250){
            currentStage[3] = 1.5;
            currentStage[4] = 2;
        }
*/
        //calculate orbital properties
        var orbitalProperties = orbitalPropertiesCalc(velocity[t], position[t]);
        var apoapsis = orbitalProperties[0];
        var periapsis = orbitalProperties[1];
        var hvelocityApoapsis = orbitalPropertiesCalc([velocity[t][0], hvelScale * Math.pow(Planet.sgp / (Planet.radius + orbit), 0.5), velocity[t][2]], position[t])[0];
        
        //calculate accelerations
        var centripetalAcceleration = [(Math.pow(velocity[t][1],2) + Math.pow(velocity[t][2],2)) / position[t][0], 0, 0];
        var gravityAcceleration = [-Planet.sgp / Math.pow(position[t][0],2), 0, 0];
        var eulerAcceleration = [0, -velocity[t][1] * (1 - position[t][0] / (position[t][0] + velocity[t][0])),0];
        if (surfaceSpeed === 0 || position[t][0] > Planet.atmHeight + Planet.radius){
            var dragAcceleration = [0,0,0];
        } else {
            var density = 0.042295 * Planet.pressure * Math.exp(-(position[t][0] - Planet.radius) / Planet.atmScale / 1000) * Planet.atmWeight;
            var dragFraction = -stageDrag * density * Math.pow(surfaceSpeed, 2) * stageArea / 2 / stageMass / surfaceSpeed;
            dragAcceleration = arrayMul(surfaceVelocity, dragFraction);
        }

        //calculate heading
        var headingFraction = (hvelocityApoapsis - apoapsis) / (Planet.radius + orbit - apoapsis);
        
        if (headingFraction < 0){
            headingFraction = 0;
        } else if (headingFraction > 0.975){
            headingFraction = 0.975;
        }
        
        heading = [headingFraction * Math.PI / 2, Math.PI / 2];
        
        //calculate thrust acceleration from heading
        var thrustVector = [Math.cos(heading[0]) * Math.sin(heading[1]), Math.sin(heading[0]) * Math.sin(heading[1]), Math.cos(heading[1])];

        if (emtpyFlag == true){
            stageThrust = 0;
            stageBurnRate = 0;
        }
        
        var thrustAcceleration = arrayMul(thrustVector, stageThrust / stageMass);
        //add accerlations together        
        
        //if apoapsis is higher than targer and rocket is in atmosphere coast, but account for drag, if out of atmosphere coast

        if (position[t][0] - Planet.radius > orbit){
            orbitFlag = true;
        }

        switch (true){
             case (orbitFlag):      
                var netAccelSq = Math.pow(stageThrust / stageMass, 2) + Math.pow(centripetalAcceleration[0], 2) - Math.pow(gravityAcceleration[0], 2) - Math.pow(eulerAcceleration[1], 2);
                if (netAccelSq > 0){
                       velocity[t][0] = 0;
                       acceleration[t] = [0, Math.pow(netAccelSq, 0.5), 0];
                } else {
                       acceleration[t] = arrayAddPlus(centripetalAcceleration, gravityAcceleration, dragAcceleration, eulerAcceleration);
                       stageBurnRate = 0;
                }
                if (periapsis > orbit + Planet.radius){
                    stopFlag = true;
                    Rocket.state = ["Earth", "Orbit", Planet.radius + orbit, Planet.radius + orbit]
                }
                break;
            case (apoapsis - Planet.radius > orbit && position[t][0] - Planet.radius < orbit):
                acceleration[t] = arrayAddPlus(centripetalAcceleration, gravityAcceleration, dragAcceleration, eulerAcceleration);
                stageBurnRate = 0;
                break;
            default:
                acceleration[t] = arrayAddPlus(centripetalAcceleration, gravityAcceleration, dragAcceleration, thrustAcceleration, eulerAcceleration);
        }
        if (currentStage[0][0] < 0){
            currentStage[0][0] = 0;
        }

        if (stopFlag == true){
            break;
        }
        if (velocity[t][0] == 0 && velocity[t][1] != 0){
            var velAccelRatio = Math.max(Math.abs(acceleration[t][1] / velocity[t][1]), stageBurnRate / stageFuelMass);
        } else if (velocity[t][1] == 0 && velocity[t][0] != 0){
            velAccelRatio = Math.max(Math.abs(acceleration[t][0] / velocity[t][0]), stageBurnRate / stageFuelMass);
        } else if (velocity[t][0] != 0 && velocity[t][1] != 0){
            velAccelRatio = Math.max(Math.abs(acceleration[t][1] / velocity[t][1]), Math.abs(acceleration[t][0] / velocity[t][0]), stageBurnRate / stageFuelMass);
        } else {
            velAccelRatio = stageBurnRate / stageFuelMass;
        }

        if(velAccelRatio > 0.1){
            if (velAccelRatio < 100){
                dt = 0.1 / velAccelRatio;
            } else {
                dt = 0.001;
            }               
        } else {
            dt = 1;
        }

        //increment time, velocity, and position based on acceleration
        time[t + 1] = time[t] + dt;
        
        velocity[t + 1] = arrayAdd(velocity[t], arrayMul(acceleration[t], dt));
            
        var positionAdd = [velocity[t + 1][0], velocity[t + 1][1] / position[t][0], velocity[t + 1][2] / position[t][0]];

        var positionAddAve = arrayMul(arrayAdd(positionAdd, positionAddLast), 0.5);

        position[t + 1] = arrayAdd(position[t], arrayMul(positionAddAve, dt)); 

        positionAddLast = positionAdd;
        currentStage[0][0] = stageFuelMass - stageBurnRate * dt;



    }
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