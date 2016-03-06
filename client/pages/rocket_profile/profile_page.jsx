ProfilePage = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {

		return {
			savedDesign: Design.find().fetch(),
			vehicle: Vehicle.find().fetch()
		};
	},
	
	buildDesign(name){
		var selectedDesign  = JSON.parse(JSON.stringify(this.data.savedDesign.filter((obj) => obj.name == name)[0]));
		var builtRocket = {};
		builtRocket.name = selectedDesign.name + " X" + (selectedDesign.buildCount + 1);
		builtRocket.stageCount = selectedDesign.stageCount;
		builtRocket.stages = selectedDesign.stages;
		builtRocket.state = ["Earth", "Surface", "---", "---"];
		Meteor.call("addDesign", { $set: { "buildCount": selectedDesign.buildCount + 1 } }, selectedDesign._id);
		Meteor.call("addVehicle", builtRocket);
	},
	
	render(){
		return(
			<div>

				<div className="row top-row">
					<Profile11 />
					<Profile12 />
					<Profile13 />
				</div>{/* row one ends */}

				<div className="row bot-row">
					<Profile21 />
					<Profile22 
					handleBuildDesign={this.buildDesign}
					savedDesign={this.data.savedDesign}/>
					<Profile23 />
				</div>{/* row two ends */}		

			</div>
			)
	}

});