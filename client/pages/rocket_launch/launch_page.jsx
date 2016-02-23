LaunchPage = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {

		return {

		}
	},

	displayPlot(){
		console.log("test button")
		orbit = orbitBody(Planet.find({name: "Earth"}).fetch()[0], Vehicle.find({name: "rocketName"}).fetch()[0], 150000);
		drawchart(orbit[3]);
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
					displayPlot={this.displayPlot}/>

					<Launch_23 />

				</div>{/* row two ends */}		

			</div>
			)
	}

});