Design22 = React.createClass({

	render(){
		return(
			<div className="col-xs-6 fixed  bot-middle">
			  <div className="col-xs-3 fixed">
			    <div className="btn-group-vertical btn-block">
			      <button type="button" className={this.props.stageButtonConfig[0][2]} onClick={this.props.handleSelectStage.bind(null, 0)} disabled={this.props.stageButtonConfig[0][0]}>{this.props.stageButtonConfig[0][1]}</button>
			      <button type="button" className={this.props.stageButtonConfig[1][2]} onClick={this.props.handleSelectStage.bind(null, 1)} disabled={this.props.stageButtonConfig[1][0]}>{this.props.stageButtonConfig[1][1]}</button>
			      <button type="button" className={this.props.stageButtonConfig[2][2]} onClick={this.props.handleSelectStage.bind(null, 2)} disabled={this.props.stageButtonConfig[2][0]}>{this.props.stageButtonConfig[2][1]}</button>
			      <button type="button" className={this.props.stageButtonConfig[3][2]} onClick={this.props.handleSelectStage.bind(null, 3)} disabled={this.props.stageButtonConfig[3][0]}>{this.props.stageButtonConfig[3][1]}</button>
			      <button type="button" className={this.props.stageButtonConfig[4][2]} onClick={this.props.handleSelectStage.bind(null, 4)} disabled={this.props.stageButtonConfig[4][0]}>{this.props.stageButtonConfig[4][1]}</button>
			      <button type="button" className={this.props.stageButtonConfig[5][2]} onClick={this.props.handleSelectStage.bind(null, 5)} disabled={this.props.stageButtonConfig[5][0]}>{this.props.stageButtonConfig[5][1]}</button>
			    </div>
			  </div>
			  <div className="col-xs-9 fixed">
			    <table id="buildModify">
			      <tbody>
			        <tr>
			          <td>Tank Length</td>
			          <td>{this.props.tankLength + " m"}</td>
			          <td><button type="button" className="btn btn-block buttonStyle" disabled={this.props.stageButtonConfig[0][0]} onClick={this.props.handleIndependentProps.bind(null, 0, 1)}>+</button></td>
			          <td><button type="button" className="btn btn-block buttonStyleNeg" disabled={this.props.stageButtonConfig[0][0]} onClick={this.props.handleIndependentProps.bind(null, 0, -1)}>-</button></td>
			
			        </tr>
			        <tr>
			          <td>Structural Density</td>
			          <td>{this.props.structuralDensity + " kg/m3"}</td>
			          <td><button type="button" className="btn btn-block buttonStyle" disabled={this.props.stageButtonConfig[0][0]}onClick={this.props.handleIndependentProps.bind(null, 1, 1)}>+</button></td>
			          <td><button type="button" className="btn btn-block buttonStyleNeg" disabled={this.props.stageButtonConfig[0][0]} onClick={this.props.handleIndependentProps.bind(null, 1, -1)}>-</button></td>
			
			        </tr>
			        <tr>
			          <td>Mass Flow Rate</td>
			          <td>{this.props.massRate + " kg/s"}</td>
			          <td><button type="button" className="btn btn-block buttonStyle" disabled={this.props.stageButtonConfig[0][0]}onClick={this.props.handleIndependentProps.bind(null, 2, 1)}>+</button></td>
			          <td><button type="button" className="btn btn-block buttonStyleNeg" disabled={this.props.stageButtonConfig[0][0]}onClick={this.props.handleIndependentProps.bind(null, 2, -1)}>-</button></td>
			
			        </tr>
			        <tr>
			          <td>Mixture Ratio</td>
			          <td>{this.props.mixRatio}</td>
			          <td><button type="button" className="btn btn-block buttonStyle" disabled={this.props.stageButtonConfig[0][0]} onClick={this.props.handleIndependentProps.bind(null, 3, 1)}>+</button></td>
			          <td><button type="button" className="btn btn-block buttonStyleNeg" disabled={this.props.stageButtonConfig[0][0]} onClick={this.props.handleIndependentProps.bind(null, 3, -1)}>-</button></td>
			
			        </tr>
			        <tr>
			          <td>Engine Pressure</td>
			          <td>{this.props.enginePressure + " atm"}</td>
			          <td><button type="button" className="btn btn-block buttonStyle" disabled={this.props.stageButtonConfig[0][0]} onClick={this.props.handleIndependentProps.bind(null, 4, 1)}>+</button></td>
			          <td><button type="button" className="btn btn-block buttonStyleNeg" disabled={this.props.stageButtonConfig[0][0]} onClick={this.props.handleIndependentProps.bind(null, 4, -1)}>-</button></td>
			
			        </tr>
			        <tr>
			          <td>Nozzle Length</td>
			          <td>{this.props.nozzleLength + " m"}</td>
			          <td><button type="button" className="btn btn-block buttonStyle" disabled={this.props.stageButtonConfig[0][0]} onClick={this.props.handleIndependentProps.bind(null, 5, 1)}>+</button></td>
			          <td><button type="button" className="btn btn-block buttonStyleNeg" disabled={this.props.stageButtonConfig[0][0]} onClick={this.props.handleIndependentProps.bind(null, 5, -1)}>-</button></td>
			
			        </tr>
			      </tbody>
			    </table>
			  </div>
			</div>
		);
	}
});