LaunchPage = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {

		return {

		}
	},

	getInitialState() {

		return {
			rocketName: "Rocket Name"
		};
	},

	returnInput(rocketName){
		this.setState({
			rocketName: rocketName
		});
	},

	displayPlot(){
		
		orbit = orbitBody(Planet.find({name: "Earth"}).fetch()[0], Vehicle.find({name: this.state.rocketName}).fetch()[0], 1000000);
		console.log(orbit)
		drawchart(orbit[2], orbit[3], orbit[4], orbit[5]);
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
					displayPlot={this.displayPlot}
					returnInput={this.returnInput}/>

					<Launch_23 />

				</div>{/* row two ends */}		

			</div>
			)
	}

});