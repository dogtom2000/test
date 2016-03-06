Design12 = React.createClass({

	render(){
	  if(this.props.stageCurrent == this.props.stageCount - 1){
	    var partImage = this.props.stagePart + "L.png";
	  } else { 
	    partImage = this.props.stagePart + ".png";
	  }
		return(
            <div className="col-xs-6 fixed top-middle">
              <div className="col-xs-6 fixed">
                <div className="title">Stage Summary</div>
                <table className="table summaryTable">
                  <thead>
                    <tr>
                      <th>Performance</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Thrust [kN]</td>
                      <td>{Math.round(this.props.dependentPropsObj["thrust"][this.props.stageCurrent][0] / 1000) + " "} ({Math.round(this.props.dependentPropsObj["thrust"][this.props.stageCurrent][1] / 1000)})</td>
                    </tr>
                    <tr>
                      <td>isp [s]</td>
                      <td>{Math.round(this.props.dependentPropsObj["isp"][this.props.stageCurrent][0]) + " "} ({Math.round(this.props.dependentPropsObj["isp"][this.props.stageCurrent][1])})
                      </td>
                    </tr>
                    <tr>
                      <td>twr</td>
                      <td>{Math.round(this.props.dependentPropsObj["twr"][this.props.stageCurrent][0] * 100) / 100 + " "} ({Math.round(this.props.dependentPropsObj["twr"][this.props.stageCurrent][1] * 100) / 100})</td>
                    </tr>
                    <tr>
                      <td>Delta V [m/s]</td>
                      <td>{Math.round(this.props.dependentPropsObj["dv"][this.props.stageCurrent][0]) + " "} ({Math.round(this.props.dependentPropsObj["dv"][this.props.stageCurrent][1])})
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
                      <td>Fuel/Oxidizer [ton]</td>
                      <td>{Math.round(this.props.dependentPropsObj["mass"][this.props.stageCurrent][0] / 10) / 100}</td>
                    </tr>
                    <tr>
                      <td>Engine [ton]</td>
                      <td>{Math.round(this.props.dependentPropsObj["mass"][this.props.stageCurrent][1] / 10) / 100}</td>
                    </tr>
                    <tr>
                      <td>Structure [ton]</td>
                      <td>{Math.round(this.props.dependentPropsObj["mass"][this.props.stageCurrent][2] / 10) / 100}</td>
                    </tr>
                    <tr>
                      <td>Total [ton]</td>
                      <td>{Math.round(this.props.dependentPropsObj["mass"][this.props.stageCurrent][3] / 10) / 100}</td>
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
                      <td>Fuel/Oxidizer</td>
                      <td>{Math.round(this.props.dependentPropsObj["reliability"][this.props.stageCurrent][0][0] * 10000) / 100 + " "} ({Math.round(this.props.dependentPropsObj["reliability"][this.props.stageCurrent][0][1] * 10000) / 100})</td>
                    </tr>
                    <tr>
                      <td>Engine</td>
                      <td>{Math.round(this.props.dependentPropsObj["reliability"][this.props.stageCurrent][1] * 10000) / 100}</td>
                    </tr>
                    <tr>
                      <td>Structure</td>
                      <td>{Math.round(this.props.dependentPropsObj["reliability"][this.props.stageCurrent][2] * 10000) / 100}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>{Math.round(this.props.dependentPropsObj["reliability"][this.props.stageCurrent][3] * 10000) / 100}</td>
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
                      <td>Fuel/Oxidizer</td>
                      <td>{Math.round(this.props.dependentPropsObj["cost"][this.props.stageCurrent][0])}</td>
                    </tr>
                    <tr>
                      <td>Engine</td>
                      <td>{Math.round(this.props.dependentPropsObj["cost"][this.props.stageCurrent][1])}</td>
                    </tr>
                    <tr>
                      <td>Structure</td>
                      <td>{Math.round(this.props.dependentPropsObj["cost"][this.props.stageCurrent][2])}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>{Math.round(this.props.dependentPropsObj["cost"][this.props.stageCurrent][3])}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-xs-6 fixed">
                <img className="designImageStyle" src={partImage}></img>
              </div>
            </div>
		);
	}
});