ProfilePage = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {

		return {
			savedDesign: Design.find().fetch(),
		};
	},
	
	buildDesign(name){
		var selectedDesign  = JSON.parse(JSON.stringify(this.data.savedDesign.filter((obj) => obj.name == name)[0]));
		var builtRocket = {};
		builtRocket.name = selectedDesign.name + " X" + (selectedDesign.buildCount + 1);
		builtRocket.stageCount = selectedDesign.stageCount;
		builtRocket.stages = selectedDesign.stages;
		Design.update({ _id: selectedDesign._id }, { $set: { "buildCount": selectedDesign.buildCount + 1 } });
		Vehicle.insert(builtRocket);
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