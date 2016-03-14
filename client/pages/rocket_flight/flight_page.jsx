var planetData = [{
		    name: "Earth",
		    sgp: 3.986e14,
		    radius: 6.371e6,
		    pressure: 1,
		    atmScale: 7,
		    atmHeight: 1.4e5,
		    atmWeight: 28.97,
		    dayLength: 8.616e4,
		    soi: 9.245e8,
		    apoapsis: 1.521e11,
		    periapsis: 1.471e11,
		    children: ["Moon"],
		    color: "blue"
	},
	{
			name: "Moon",
		    sgp: 4.905e12,
		    radius: 1.737e6,
		    pressure: 0,
		    atmScale: 1,
		    atmHeight: 0,
		    atmWeight: 0,
		    dayLength: 2.361e6,
		    soi: 6.619e8,
		    apoapsis: 4.054e8,
		    periapsis: 3.626e8,
		    children:[],
		    color: "grey"
	}]; 

FlightPage = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {

		return {
			vehicle: Vehicle.find().fetch(),
			
		}
	},

	getInitialState() {

		return {
			maneuverConfig: [["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true], false],
			mulVal: 1,
			maneuverValue: 0,
			maneuverFormValue: 0,
			Rocket: {stageCount: 0, stages: [[[0, 0], [0], [0]]], state: ["---", "---", "---", "---"]},
			Planet: {radius: 0},
		};
	},
	
	loadVehicle(){
		var planet = this.data.vehicle.filter((obj) => obj.name == arguments[0])[0].state[0];
		var orbitHeight = Math.round((planetData.filter((obj) => obj.name == planet)[0].atmHeight + 50000 ) / 1000);
		var rocket = this.data.vehicle.filter((obj) => obj.name == arguments[0])[0];
		if (rocket.state[1] == "Surface"){
		var	maneuverConfig = [["btn buttonStyle", false],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true], false];

		} else if (rocket.state[1] == "Orbit") {
			maneuverConfig = [["btn buttonStyle", true],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false], false];

		}

		this.setState({
			Rocket: rocket,
			Planet: planetData.filter((obj) => obj.name == planet)[0],
			maneuverConfig: maneuverConfig
			
		});
		drawOrbit(rocket.state[2], rocket.state[3], rocket, planetData);
	},

	initiateBurn(){
		var Rocket = this.state.Rocket;
		var Planet = this.state.Planet;

		switch(this.state.maneuverConfig[4]){
			case 0:
				var orbit = this.state.maneuverValue;
				var maneuverOutput = orbitB(Planet, Rocket, orbit * 1000);
				Rocket = maneuverOutput[0];
				drawchart(maneuverOutput[1], maneuverOutput[2], maneuverOutput[3], maneuverOutput[4]);
				Meteor.call("updateVehicle", maneuverOutput[0], this.state.Rocket._id);
				break;
			case 1:
				Rocket = hohman(Rocket, Planet, "apoapsis", this.state.maneuverValue * 1000 + Planet.radius);
				Meteor.call("updateVehicle", Rocket, this.state.Rocket._id);
				drawOrbit(Rocket.state[2], Rocket.state[3], Rocket, planetData)
				break;
			case 2:
				Rocket = hohman(Rocket, Planet, "periapsis", this.state.maneuverValue * 1000 + Planet.radius);
				Meteor.call("updateVehicle", Rocket, this.state.Rocket._id);
				drawOrbit(Rocket.state[2], Rocket.state[3], Rocket, planetData)
				break;
			case 3:
				maneuverOutput = reentry2(Planet, Rocket, Rocket.state[2],  hohman(Rocket, Planet, "periapsis", this.state.maneuverValue * 1000 + Planet.radius).state[3])
				Rocket = maneuverOutput[0];
				drawchart(maneuverOutput[1], maneuverOutput[2], maneuverOutput[3], maneuverOutput[4]);
				Meteor.call("updateVehicle", maneuverOutput[0], this.state.Rocket._id);
				break;
		}

		if (Rocket.state[1] == "Surface"){
		var	maneuverConfig = [["btn buttonStyle", false],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true], false];

		} else if (Rocket.state[1] == "Orbit") {
			maneuverConfig = [["btn buttonStyle", true],["btn buttonStyle", false],["btn buttonStyle", false],["btn buttonStyle", false], false];

		}
		
		
		
		this.setState({
		maneuverConfig: maneuverConfig	
		});
		
	},

	deleteVehicle(){
		Meteor.call("deleteVehicle", this.data.vehicle.filter((obj) => obj.name == arguments[0])[0]._id);
	},

	configureManeuver(){
		var maneuverConfigArray = this.state.maneuverConfig;
		var maneuverFormValue = this.state.maneuverFormValue;
		maneuverConfigArray[4] = arguments[0];
		for (var i = 0; i < 4; i++){
			maneuverConfigArray[i][0] = "btn buttonStyle";
		}
		maneuverConfigArray[arguments[0]][0] = "btn buttonStyleHigh";
		
		switch(arguments[0]){
			case 0:
				if (maneuverFormValue > Math.round(this.state.Planet.radius * 0.05 / 1000)){
					var value = Math.round(this.state.Planet.radius * 0.05 / 1000);
				} else if (maneuverFormValue < this.state.Planet.atmHeight / 1000 + 1){
					value = this.state.Planet.atmHeight / 1000 + 1;
				} else {
					value = maneuverFormValue;
				}
				break;				
			case 1:
				if (maneuverFormValue > Math.round(this.state.Planet.soi / 1000)){
					value = Math.round(this.state.Planet.soi / 1000);
				} else if (maneuverFormValue < this.state.Planet.atmHeight / 1000 + 1){
					value = this.state.Planet.atmHeight / 1000 + 1;
				} else {
					value = maneuverFormValue;
				}
				break;				
			case 2:
				if (maneuverFormValue > Math.round(this.state.Planet.soi / 1000)){
					value = Math.round(this.state.Planet.soi / 1000);
				} else if (maneuverFormValue < this.state.Planet.atmHeight / 1000 + 1){
					value = this.state.Planet.atmHeight / 1000 + 1;
				} else {
					value = maneuverFormValue;
				}
				break;				
			case 3:
				if (maneuverFormValue > Math.round(this.state.Planet.atmHeight / 1000 - 1)){
					value = Math.round(this.state.Planet.atmHeight / 1000 - 1);
				} else if (maneuverFormValue < -this.state.Planet.radius / 1000 + 1){
					value = -this.state.Planet.radius / 1000 + 1;
				} else {
					value = maneuverFormValue;
				}
				break;
			case false:
					value = maneuverFormValue;
				break;
		}			

		this.setState({
			maneuverConfig: maneuverConfigArray,
			maneuverValue: value
		});
		
		
	},
	
	desiredOrbit(){
		var maneuverValue = this.state.maneuverValue;
		maneuverValue += this.state.mulVal * arguments[0];
		this.setState({
				maneuverValue: maneuverValue
		});
	},
	
	changeMulVal(){
			var mulVal = this.state.mulVal;
			if (mulVal > 10000){
				mulVal = 1;
			} else {
				mulVal *= 10;
			}
			
			this.setState({
				mulVal: mulVal
			});
	},
	
	maneuverValue(e){
		var maneuver = this.state.maneuverConfig[4];
		var formValue = e.target.value;
		
		if(isNaN(formValue) == false || formValue == "-"){
			
			switch(maneuver){
				case 0:
					if (formValue > Math.round(this.state.Planet.radius * 0.05 / 1000)){
						var value = Math.round(this.state.Planet.radius * 0.05 / 1000);
					} else if (formValue < this.state.Planet.atmHeight / 1000 + 1){
						value = this.state.Planet.atmHeight / 1000 + 1;
					} else {
						value = formValue;
					}
					break;				
				case 1:
					if (formValue > Math.round(this.state.Planet.soi / 1000)){
						value = Math.round(this.state.Planet.soi / 1000);
					} else if (formValue < this.state.Planet.atmHeight / 1000 + 1){
						value = this.state.Planet.atmHeight / 1000 + 1;
					} else {
						value = formValue;
					}
					break;				
				case 2:
					if (formValue > Math.round(this.state.Planet.soi / 1000)){
						value = Math.round(this.state.Planet.soi / 1000);
					} else if (formValue < this.state.Planet.atmHeight / 1000 + 1){
						value = this.state.Planet.atmHeight / 1000 + 1;
					} else {
						value = formValue;
					}
					break;				
				case 3:
					if (formValue > Math.round(this.state.Planet.atmHeight / 1000 - 1)){
						value = Math.round(this.state.Planet.atmHeight / 1000 - 1);
					} else if (formValue < -this.state.Planet.radius / 1000 + 1){
						value = -this.state.Planet.radius / 1000 + 1;
					} else {
						value = formValue;
					}
					break;
				case false:
						value = formValue;
					break;
			}	
			if (formValue == "-"){
				value = 0;
			}

	
			this.setState({
				maneuverFormValue: formValue,
				maneuverValue: value
				
			});
		}
		
	},

	render(){
		return(
			<div>

				<div className="row top-row">

					<Flight11 />


				</div>{/* row one ends */}

				<div className="row bot-row">

					<Flight21 
					
					handleManeuverValue={this.maneuverValue}
					maneuverFormValue={this.state.maneuverFormValue}
					vehicle={this.data.vehicle}
					Rocket={this.state.Rocket}
					handleLoadVehicle={this.loadVehicle}
					handleChangeMulVal={this.changeMulVal}
					mulVal={this.state.mulVal}
					maneuverConfig={this.state.maneuverConfig}
					handleInitiateBurn={this.initiateBurn}
					maneuverValue={this.state.maneuverValue}
					handleDeleteVehicle={this.deleteVehicle}
					handleConfigureManeuver={this.configureManeuver}
					handleDesiredOrbit={this.desiredOrbit}/>			

					<Flight22 
					Planet={this.state.Planet}
					Rocket={this.state.Rocket}/>

					<Flight23
					vehicle={this.data.vehicle}
					
					displayOrbit={this.displayOrbit}
					handleSelectRocket={this.selectRocket}
					handleRemoveVehicle={this.removeVehicle}/>

				</div>{/* row two ends */}		

			</div>
			);
	}

});