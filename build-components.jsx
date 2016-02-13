Build_22 = React.createClass({
		partPreviewTable(){
		return [["Stage Property","Property Value"],[["Tank Mass [kg]", 100],["Engine Mass [kg]", 100],["Fuel Mass [kg]", 100],["Total Mass [kg]", 100],["Thrust Vac. [kN] (at 1 atm)", 100],["Specific Impulse Vac. [s] (at 1 atm)", 100],["Thrust to Weight Ratio", 100]]]
	},

	handleChange(){

		this.props.onUserInput(arguments[0], arguments[1], arguments[2], arguments[3]);

	},

  render() {
    return (		
			<div className="col-md-6 fixed" id="build-2-2">
				<div className="col-md-2 fixed" id="build-dropdown">
					<Dropdown subclass={"btn btn-primary dropdown-toggle"} subid={[]} maintext={"Stage Diameter"} subtext={["4 Meter", "7 Meter", "10 Meter"]}/>
					<Dropdown subclass={"btn btn-primary dropdown-toggle"} subid={[]} maintext={"Fuel Type"} subtext={["LOX / H2", "OX / FL"]}/>
					<Dropdown subclass={"btn btn-primary dropdown-toggle"} subid={[]} maintext={"Tank Material"} subtext={["Material 1", "Material 2"]}/>
					<Dropdown subclass={"btn btn-primary dropdown-toggle"} subid={[]} maintext={"Engine Material"} subtext={["Material 1", "Material 2"]}/>
				</div>{/* sub column end */}
				<div className="col-md-6 fixed" id="build-partpreview">
				<Table tableId={"buildPreview"} data={this.partPreviewTable()}/>
				</div>{/* sub column end */}
				<div className="col-md-4 fixed" id="build-control">
					<table id="buildModify">
						<tbody>
							<tr>
								<td>Fuel Tank Length</td>
								<td>{this.props.tankLength + " m"}</td> 
								<td><button type="button" className="btn btn-success" onClick={this.handleChange.bind(null, 0, 1, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-danger" onClick={this.handleChange.bind(null, 0, -1, 5, 200)}>-</button></td>
							</tr>
							<tr>
								<td>Wall Thickness</td>
								<td>{this.props.wallThickness + " m"}</td> 
								<td><button type="button" className="btn btn-success" onClick={this.handleChange.bind(null, 1, 2, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-danger" onClick={this.handleChange.bind(null, 1, -2, 5, 200)}>-</button></td>
							</tr>
							<tr>
								<td>Fuel Mass Rate</td>
								<td>{this.props.fuelRate + " kg/s"}</td> 
								<td><button type="button" className="btn btn-success" onClick={this.handleChange.bind(null, 2, 3, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-danger" onClick={this.handleChange.bind(null, 2, -3, 5, 200)}>-</button></td>
							</tr>
							<tr>
								<td>Fuel Ratio</td>
								<td>{this.props.mixRatio}</td> 
								<td><button type="button" className="btn btn-success" onClick={this.handleChange.bind(null, 3, 4, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-danger" onClick={this.handleChange.bind(null, 3, -4, 5, 200)}>-</button></td>
							</tr>
							<tr>
								<td>Engine Pressure</td>
								<td>{this.props.enginePressure + " atm"}</td> 
								<td><button type="button" className="btn btn-success" onClick={this.handleChange.bind(null, 4, 5, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-danger" onClick={this.handleChange.bind(null, 4, -5, 5, 200)}>-</button></td>
							</tr>
							<tr>
								<td>Nozzle Length</td>
								<td>{this.props.nozzleLength + " m"}</td> 
								<td><button type="button" className="btn btn-success" onClick={this.handleChange.bind(null, 5, 6, 5, 200)}>+</button></td>
								<td><button type="button" className="btn btn-danger" onClick={this.handleChange.bind(null, 5, -6, 5, 200)}>-</button></td>
							</tr>
						</tbody>
					</table>
				</div>{/* sub column end */}
			</div>
    );
  }
});

