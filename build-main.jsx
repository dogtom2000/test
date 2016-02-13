BuildMain = React.createClass({

	render(){
		return(
			<div>
				<div className="row-2">
					<div className="col-md-3 fixed" id="build-1-1">
						Incremental change in X plots
					</div>
					<div className="col-md-6 fixed" id="build-1-2">
					Graphical stage preview
					</div>
					<div className="col-md-3 fixed" id="build-1-3">
					Overall rocket properties
					</div>
				</div>{/* row one ends */}
				<div className="row-1">
					<div className="col-md-3 fixed" id="build-2-1">
						<Table tableId={"buildSelection"} headingData={["H1", "H2", "H3","H4"]} rowData={[["D1", "D2", "D3","D4"],[, "D5", "D6","D7", "D8"]]}/>
					</div>
					<div className="col-md-6 fixed" id="build-2-2">
						<div className="col-md-3 fixed" id="build-dropdown">
							<div className="dropdown">
							  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Diameter
							  <span className="caret"></span></button>
							  <ul className="dropdown-menu">
							    <li><a href="#">4 Meter</a></li>
							    <li><a href="#">7 Meter</a></li>
							    <li><a href="#">10 Meter</a></li>
							  </ul>
							</div>
							<div className="dropdown">
							  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Fuel Type
							  <span className="caret"></span></button>
							  <ul className="dropdown-menu">
							    <li><a href="#">H2 / LOX</a></li>
							    <li><a href="#">Kerosene / LOX</a></li>
							    <li><a href="#">Gasoline / LOX</a></li>
							  </ul>
							</div>
							<div className="dropdown">
							  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Fuel Pump
							  <span className="caret"></span></button>
							  <ul className="dropdown-menu">
							    <li><a href="#">100 kg/s</a></li>
							    <li><a href="#">150 kg/s</a></li>
							    <li><a href="#">200 kg/s</a></li>
							  </ul>
							</div>
							<div className="dropdown">
							  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Nozzle Type
							  <span className="caret"></span></button>
							  <ul className="dropdown-menu">
							    <li><a href="#">Cone</a></li>
							    <li><a href="#">Bell</a></li>
							    <li><a href="#">Other</a></li>
							  </ul>
							</div>
						</div>{/* sub column end */}
						<div className="col-md-6 fixed" id="build-partpreview">
						<Table tableId={"buildPreview"} headingData={["H1", "H2", "H3","H4"]} rowData={[["D1", "D2", "D3","D4"],[, "D5", "D6","D7", "D8"]]}/>
						</div>{/* sub column end */}
						<div className="col-md-3 fixed" id="build-control">
							<div className="btn-group-vertical pull-left">
							  <button type="button" className="btn btn-primary btn-sm">Command 1</button>
							  <button type="button" className="btn btn-primary btn-sm">Command 2</button>
							  <button type="button" className="btn btn-primary btn-sm">Command 3</button>
							  <button type="button" className="btn btn-primary btn-sm">Command 4</button>
							  <button type="button" className="btn btn-primary btn-sm">Command 5</button>
							  <button type="button" className="btn btn-primary btn-sm">Command 6</button>
							</div>
							<div className="btn-group-vertical pull-right">
							  <button type="button" className="btn btn-primary btn-sm">Command 1</button>
							  <button type="button" className="btn btn-primary btn-sm">Command 2</button>
							  <button type="button" className="btn btn-primary btn-sm">Command 3</button>
							  <button type="button" className="btn btn-primary btn-sm">Command 4</button>
							  <button type="button" className="btn btn-primary btn-sm">Command 5</button>
							  <button type="button" className="btn btn-primary btn-sm">Command 6</button>
							</div>
						</div>{/* sub column end */}
					</div>{/* column end */}
					<div className="col-md-3 fixed" id="build-2-3">
						<div className="col-md-3 fixed">
							<div className="btn-group-vertical">
							  <button type="button" className="btn btn-primary">Stage 1</button>
							  <button type="button" className="btn btn-primary">Stage 2</button>
							  <button type="button" className="btn btn-primary">Stage 3</button>
							  <button type="button" className="btn btn-primary">Stage 4</button>
							  <button type="button" className="btn btn-primary">Stage 5</button>
							  <button type="button" className="btn btn-primary">Stage 6</button>
							</div>
						</div>{/* sub column end */}
						<div className="col-md-3 fixed">
						</div>{/* sub column end */}
						<div className="col-md-3 fixed">
						</div>{/* sub column end */}
						<div className="col-md-3 fixed" id="shigger">
							<div className="btn-group-vertical">
							  <button type="button" className="btn btn-success">Launch</button>
							  <button type="button" className="btn btn-danger">Clear</button>
							</div>
						</div>{/* sub column end */}
					</div>{/* column end */}
				</div>{/* row two ends */}		
			</div>
			)
	}
});