var Mars = {
	L: [293.737334,19141.69551,0.0003107,0],
	a: [1.5236883,0,0,0],
	e: [0.0933129,0.000092064,-0.000000077,0],
	i: [1.850333,-0.000675,0.0000126,0],
	w: [285.431761,1.0697667,0.0001313,0.00000414],
	W: [48.786442,0.7709917,-0.0000014,0.00000533]
}

var Earth = {
	L: [99.69668,36000.76892,0.0003025,0],
	e: [0.01675104,-0.0000418,-0.000000126,0],
	M: [358.47583,35999.04975,-0.00015,-0.0000033]
}





SystemPage = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {

		return {

		};
	},

	render(){
		return(
			<div>

				<div className="row top-row">
					<System11 />

				</div>{/* row one ends */}

				<div className="row bot-row">
					<System21 />
					<System22 />
					<System23 />
				</div>{/* row two ends */}		

			</div>
			)
	}

});