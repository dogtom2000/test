Design13 = React.createClass({

	render(){
		return(
            <div className="col-xs-3 fixed top-side">
              <div className="title">Rocket Summary</div>
              <table className="table summaryTable">
                <thead>
                  <tr>
                    <th>Performance</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Delta V [m/s]</td>
                    <td>{Math.round(this.props.dependentPropsObj["dv"][6][0]) + " "} ({Math.round(this.props.dependentPropsObj["dv"][6][1])})
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Mass</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Systems</td>
                    <td>{Math.round(this.props.dependentPropsObj["mass"][6][0]) / 1000 + " "}</td>
                  </tr>
                  <tr>
                    <td>Fuel/Oxidizer [ton]</td>
                    <td>{Math.round(this.props.dependentPropsObj["mass"][6][1]) / 1000 + " "}</td>
                  </tr>
                  <tr>
                    <td>Engine [ton]</td>
                    <td>{Math.round(this.props.dependentPropsObj["mass"][6][2]) / 1000 + " "}</td>
                  </tr>
                  <tr>
                    <td>Structure [ton]</td>
                    <td>{Math.round(this.props.dependentPropsObj["mass"][6][3]) / 1000 + " "}</td>
                  </tr>
                  <tr>
                    <td>Total [ton]</td>
                    <td>{Math.round(this.props.dependentPropsObj["mass"][6][4]) / 1000 + " "}</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Reliability</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Systems</td>
                    <td>{Math.round(this.props.dependentPropsObj["reliability"][6][0] * 10000) / 100 + " "}</td>
                  </tr>
                  <tr>
                    <td>Fuel/Oxidizer</td>
                    <td>{Math.round(this.props.dependentPropsObj["reliability"][6][1] * 10000) / 100}</td>
                  </tr>
                  <tr>
                    <td>Engine</td>
                    <td>{Math.round(this.props.dependentPropsObj["reliability"][6][2] * 10000) / 100}</td>
                  </tr>
                  <tr>
                    <td>Structure</td>
                    <td>{Math.round(this.props.dependentPropsObj["reliability"][6][3] * 10000) / 100}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>{Math.round(this.props.dependentPropsObj["reliability"][6][4] * 10000) / 100}</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Cost</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Systems</td>
                    <td>{Math.round(this.props.dependentPropsObj["cost"][6][0]) + " "}</td>
                  </tr>
                  <tr>
                    <td>Fuel/Oxidizer</td>
                    <td>{Math.round(this.props.dependentPropsObj["cost"][6][1]) + " "}</td>
                  </tr>
                  <tr>
                    <td>Engine</td>
                    <td>{Math.round(this.props.dependentPropsObj["cost"][6][2]) + " "}</td>
                  </tr>
                  <tr>
                    <td>Structure</td>
                    <td>{Math.round(this.props.dependentPropsObj["cost"][6][3]) + " "}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>{Math.round(this.props.dependentPropsObj["cost"][6][4]) + " "}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
		);
	}
});