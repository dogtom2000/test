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
		orbit = orbitBody(Planet.find({name: "Earth"}).fetch()[0], Vehicle.find({name: this.state.rocketName}).fetch()[0], 150000);
		drawchart(orbit[2], orbit[3]);
	},

	render(){
		return(
			<div>

				<div className="row row-1">

					<Launch_11 />

					<Launch_12 />

					<Launch_13 />

				</div>{/* row one ends */}

				<div className="row row-2">

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