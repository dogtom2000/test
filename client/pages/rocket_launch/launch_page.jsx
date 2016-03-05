LaunchPage = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {

		return {
			vehicle: Vehicle.find().fetch(),
			
		}
	},

	getInitialState() {

		return {
			rocketName: "Rocket Name",
			Rocket: {stages: [[[0, 0]]]},
			orbit: 0,
		};
	},

	selectRocket(){
		this.setState({
			Rocket: this.data.vehicle.filter((obj) => obj.name == arguments[0])[0]
		});
	},

	displayPlot(){
		
		orbit = orbitBody(Planet.find({name: "Earth"}).fetch()[0], this.state.Rocket, 250000);
		drawchart(orbit[2], orbit[3], orbit[4], orbit[5]);
		this.setState({
			orbit: orbit[6],
			Rocket: orbit[1]
		})
		Vehicle.update({ _id: this.state.Rocket._id }, orbit[1]);
	},

	displayOrbit(){
		orbit = reentry(Planet.find({name: "Earth"}).fetch()[0], this.state.Rocket, 360000 + 6371000,  -50000 + 6371000);
		drawchart(orbit[2], orbit[3], orbit[4], orbit[5]);
		//drawOrbit(orbit[6], orbit[6], Planet.find({name: "Earth"}).fetch()[0]);
	},

	removeVehicle(){
		Design.remove({_id: arguments[0]})
	},

	render(){
		return(
			<div>

				<div className="row top-row">

					<Launch_11 />


				</div>{/* row one ends */}

				<div className="row bot-row">

					<Launch_21 />			

					<Launch_22 
					Rocket={this.state.Rocket}/>

					<Launch_23	
					displayPlot={this.displayPlot}
					displayOrbit={this.displayOrbit}
					handleSelectRocket={this.selectRocket}
					handleRemoveVehicle={this.removeVehicle}/>

				</div>{/* row two ends */}		

			</div>
			)
	}

});