var planetData = [{
		    name: "Earth",
		    sgp: 3.986e14,
		    radius: 6.371e6,
		    pressure: 1,
		    atmScale: 7,
		    atmHeight: 1.4e5,
		    atmWeight: 28.97,
		    dayLength: 86400
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
			maneuverConfig: [["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true],["btn buttonStyle", true], 0],
			mulVal: 1,
			maneuverValue: [0, 0, 0, 0],
			Rocket: {stageCount: 0, stages: [[[0, 0], [0], [0]]], state: ["---", "---", "---", "---"]},
		};
	},
	
	loadVehicle(){
		var planet = this.data.vehicle.filter((obj) => obj.name == arguments[0])[0].state[0];
		var orbitHeight = Math.round((planetData.filter((obj) => obj.name == planet)[0].atmHeight + 50000 ) / 1000);
		var rocket = this.data.vehicle.filter((obj) => obj.name == arguments[0])[0];
		var maneuverConfigArray = this.state.maneuverConfig;
		if (rocket.state[1] == "Surface"){
			maneuverConfigArray[4] = 0;
			maneuverConfigArray[0][1] = false;
			maneuverConfigArray[1][1] = true;
			maneuverConfigArray[2][1] = true;
			maneuverConfigArray[3][1] = true;
		} else if (rocket.state[1] == "Orbit") {
			maneuverConfigArray[4] = 1;
			maneuverConfigArray[0][1] = true;
			maneuverConfigArray[1][1] = false;
			maneuverConfigArray[2][1] = false;
			maneuverConfigArray[3][1] = false;
		}

		this.setState({
			Rocket: rocket,
			Planet: planet,
			maneuverValue: [orbitHeight, orbitHeight, orbitHeight, orbitHeight],
			maneuverConfig: maneuverConfigArray
			
		});
		console.log(rocket, planet)
	},

	initiateBurn(){
		var Rocket = this.state.Rocket;
		var Planet = planetData.filter((obj) => obj.name == this.state.Planet)[0];
		
		switch(this.state.maneuverConfig[4]){
			case 0:
				var orbit = this.state.maneuverValue[0];
				var maneuverOutput = orbitBody(Planet, Rocket, orbit * 1000);
				drawchart(maneuverOutput[1], maneuverOutput[2], maneuverOutput[3], maneuverOutput[4]);
				this.setState({
					Rocket: maneuverOutput[0]
				});
				break;
			case 1:
				hohman(Rocket, Planet, "periapsis", this.state.maneuverValue[1] * 1000)
				break;
			case 2:
			case 3:
				maneuverOutput = reentry(Planet, Rocket, Rocket.state[2],  Rocket.state[3] - 100000)
				drawchart(maneuverOutput[1], maneuverOutput[2], maneuverOutput[3], maneuverOutput[4]);
				break;
		}

		Meteor.call("updateVehicle", maneuverOutput[0], this.state.Rocket._id);
	},

	displayOrbit(){
		//orbit = reentry(Planet.find({name: "Earth"}).fetch()[0], this.state.Rocket, 360000 + 6371000,  -50000 + 6371000);
		//drawchart(orbit[2], orbit[3], orbit[4], orbit[5]);
		Rocket = this.state.Rocket;
		drawOrbit(Rocket.state[2], Rocket.state[3], planetData.filter((obj) => obj.name == Rocket.state[0])[0]);
	},

	deleteVehicle(){
		Meteor.call("deleteVehicle", this.data.vehicle.filter((obj) => obj.name == arguments[0])[0]._id);
	},

	configureManeuver(){
		var maneuverConfigArray = this.state.maneuverConfig;
		maneuverConfigArray[4] = arguments[0];
		for (var i = 0; i < 4; i++){
			maneuverConfigArray[i][0] = "btn buttonStyle";
		}
		maneuverConfigArray[arguments[0]][0] = "btn buttonStyleHigh";
		this.setState({
			maneuverConfig: maneuverConfigArray
		});
		
		
	},
	
	desiredOrbit(){
		var maneuverValueArray = this.state.maneuverValue;
		maneuverValueArray[arguments[0]] += this.state.mulVal * arguments[1];
		this.setState({
				maneuverValue: maneuverValueArray
		});
	},
	
	changeMulVal(){
			var mulVal = this.state.mulVal;
			if (mulVal > 100){
				mulVal = 1;
			} else {
				mulVal *= 10;
			}
			
			this.setState({
				mulVal: mulVal
			})
	},

	render(){
		return(
			<div>

				<div className="row top-row">

					<Flight11 />


				</div>{/* row one ends */}

				<div className="row bot-row">

					<Flight21 
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
					Rocket={this.state.Rocket}/>

					<Flight23
					vehicle={this.data.vehicle}
					
					displayOrbit={this.displayOrbit}
					handleSelectRocket={this.selectRocket}
					handleRemoveVehicle={this.removeVehicle}/>

				</div>{/* row two ends */}		

			</div>
			)
	}

});