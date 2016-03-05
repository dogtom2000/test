Design21 = React.createClass({
  
  getInitialState(){
    return{
      saveFormValue: "Save as"
    };
  },
  
  handleSaveFormChange(e){
    this.setState({saveFormValue: e.target.value});
  },


  handleSave(){
    if (Design.findOne({name: this.state.saveFormValue}) !== undefined){
      return <button type="button" className="btn buttonStyle" data-toggle="modal" data-target="#overwriteModal">Save</button>;
    } else {
      return <button type="button" className="btn buttonStyle" onClick={this.props.handleSaveDesign.bind(null, this.state.saveFormValue)}>Save</button>;
    }
  },
	  
	render(){
		return(
        <div className="col-xs-3 fixed bot-side">
          <div className="col-xs-2 fixed">
          </div>
        
          <div className="col-xs-8 fixed">
            <div className="btn-group-vertical btn-block">
              <button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#configureRocketModal">Configure Rocket</button>
              <button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#configureSystemModal" disabled={this.props.systemConfig[0]}>Configure Systems </button>
              <button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#configureStageModal" disabled={this.props.stageConfig[6]}>Configure Stages </button>
              <button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#loadModal">Load Design</button>
              <button type="button" className="btn btn-block buttonStyle" data-toggle="modal" data-target="#saveModal">Save Design</button>
            </div>
          </div>
        
          <div id="configureRocketModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content modalStyle">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h2 className="modal-title">Rocket Configuration</h2>
                  <div className="modal-body">
                    <h4>Rocket Class</h4>
                    <div className="btn-group btn-block">
                      <button type="button" disabled={this.props.rocketConfig[3]} className={this.props.rocketConfig[0]} style={{width: "33.33%"}} onClick={this.props.handleConfigureType.bind(null, "Sounding Rocket", 0)}>Sounding Rocket</button>
                      <button type="button" disabled={this.props.rocketConfig[3]} className={this.props.rocketConfig[1]} style={{width: "33.33%"}} onClick={this.props.handleConfigureType.bind(null, "Medium Lift Rocket", 1)}>Medium Lift Rocket</button>
                      <button type="button" disabled={this.props.rocketConfig[3]} className={this.props.rocketConfig[2]} style={{width: "33.33%"}} onClick={this.props.handleConfigureType.bind(null, "Heavy Lift Rocket", 2)}>Heavy Lift Rocket</button>
                    </div>
                    <h4>Number of Stages</h4>
                    <div className="btn-group btn-block">
                      <button type="button" disabled={this.props.rocketConfig[3]} className="btn buttonStyle" style={{width: "33.33%"}} onClick={this.props.handleConfigureStage.bind(null, -1)}><span className="glyphicon glyphicon-arrow-left"></span></button>
                      <button type="button" disabled={this.props.rocketConfig[3]} className="btn buttonStyle" style={{width: "33.33%"}}>{this.props.stageCount} Stage(s)</button>
                      <button type="button" disabled={this.props.rocketConfig[3]} className="btn buttonStyle" style={{width: "33.33%"}} onClick={this.props.handleConfigureStage.bind(null, 1)}><span className="glyphicon glyphicon-arrow-right"></span></button>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn buttonStyle" data-toggle="modal" data-target="#clearModal">Clear Configuration</button>
                    <button type="button" className="btn buttonStyle" data-dismiss="modal" onClick={this.props.handleConfigureRocket}>Submit & Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div id="configureSystemModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content modalStyle">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">system</h4>
                  <div className="modal-body">
                    <h4>Rocket Class</h4>
                    <div className="btn-group btn-block">
                      <button type="button" className="btn buttonStyle" style={{width: "33.33%"}} onClick={this.props.handleConfigureSystem.bind(null, 70)} data-dismiss="modal">70 kg</button>
                      <button type="button" className="btn buttonStyle" style={{width: "33.33%"}} onClick={this.props.handleConfigureSystem.bind(null, 7000)} data-dismiss="modal">7000 kg</button>
                      <button type="button" className="btn buttonStyle" style={{width: "33.33%"}} onClick={this.props.handleConfigureSystem.bind(null, 21000)} data-dismiss="modal">21000 kg</button>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div id="configureStageModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content modalStyle">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h2 className="modal-title">Stage Configuration</h2>
                  <div className="modal-body">
                    <h4>Select Stage</h4>
                    <div className="btn-group btn-block">
                      <button type="button" className={this.props.stageConfig[0][0]} disabled={this.props.stageConfig[0][1]} style={{width: "33.33%"}} onClick={this.props.handleSelectStage.bind(null, 0)}>{this.props.stageButtonConfig[0][1]}</button>
                      <button type="button" className={this.props.stageConfig[1][0]} disabled={this.props.stageConfig[1][1]} style={{width: "33.33%"}} onClick={this.props.handleSelectStage.bind(null, 1)}>{this.props.stageButtonConfig[1][1]}</button>
                      <button type="button" className={this.props.stageConfig[2][0]} disabled={this.props.stageConfig[2][1]} style={{width: "33.33%"}} onClick={this.props.handleSelectStage.bind(null, 2)}>{this.props.stageButtonConfig[2][1]}</button>
                    </div>
                    <div className="btn-group btn-block">
                      <button type="button" className={this.props.stageConfig[3][0]} disabled={this.props.stageConfig[3][1]} style={{width: "33.33%"}} onClick={this.props.handleSelectStage.bind(null, 3)}>{this.props.stageButtonConfig[3][1]}</button>
                      <button type="button" className={this.props.stageConfig[4][0]} disabled={this.props.stageConfig[4][1]} style={{width: "33.33%"}} onClick={this.props.handleSelectStage.bind(null, 4)}>{this.props.stageButtonConfig[4][1]}</button>
                      <button type="button" className={this.props.stageConfig[5][0]} disabled={this.props.stageConfig[5][1]} style={{width: "33.33%"}} onClick={this.props.handleSelectStage.bind(null, 5)}>{this.props.stageButtonConfig[5][1]}</button>
                    </div>
                    <h4>Select Diameter</h4>
                    <div className="btn-group btn-block">
                      <button type="button" className={this.props.partConfig[0][0]} style={{width: "33.33%"}} onClick={this.props.handleConfigureDiameter.bind(null, 0)}>{this.props.partData[this.props.rocketType][0][0] + " Meter"}</button>
                      <button type="button" className={this.props.partConfig[1][0]} style={{width: "33.33%"}} onClick={this.props.handleConfigureDiameter.bind(null, 1)}>{this.props.partData[this.props.rocketType][1][0] + " Meter"}</button>
                      <button type="button" className={this.props.partConfig[2][0]} style={{width: "33.33%"}} onClick={this.props.handleConfigureDiameter.bind(null, 2)}>{this.props.partData[this.props.rocketType][2][0] + " Meter"}</button>
                    </div>
                    <h4>Select Engine Count</h4>
                    <div className="btn-group btn-block">
                      <button type="button" className={this.props.engineConfig[0][0]} style={{width: "25%"}} onClick={this.props.handleConfigureEngineCount.bind(null, 0, 1)}>1 Engine</button>
                      <button type="button" className={this.props.engineConfig[1][0]} style={{width: "25%"}} onClick={this.props.handleConfigureEngineCount.bind(null, 1, 2)}>2 Engines</button>
                      <button type="button" className={this.props.engineConfig[2][0]} style={{width: "25%"}} onClick={this.props.handleConfigureEngineCount.bind(null, 2, 4)}>4 Engines</button>
                      <button type="button" className={this.props.engineConfig[3][0]} style={{width: "25%"}} onClick={this.props.handleConfigureEngineCount.bind(null, 3, 5)}>5 Engines</button>
                    </div>
                    <h4>Select Fuel Type</h4>
                    <div className="btn-group btn-block">
                      <button type="button" className={this.props.fuelConfig[0][0]} style={{width: "25%"}} onClick={this.props.handleConfigureFuelType.bind(null, 0, "Solid Fuel")}>Solid Fuel</button>
                      <button type="button" className={this.props.fuelConfig[1][0]} style={{width: "25%"}} onClick={this.props.handleConfigureFuelType.bind(null, 1, "RP1 LOX")}>RP1 LOX</button>
                      <button type="button" className={this.props.fuelConfig[2][0]} style={{width: "25%"}} onClick={this.props.handleConfigureFuelType.bind(null, 2, "LH2 LOX")}>LH2 LOX</button>
                      <button type="button" className={this.props.fuelConfig[3][0]} style={{width: "25%"}} onClick={this.props.handleConfigureFuelType.bind(null, 3, "Aerozine N2O4")}>Aerozine N2O4</button>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div id="loadModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content modalStyle">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Are you sure?</h4>
                  <div className="modal-body">
                    {[{"name": "cat"}, {"name": "dog"}].map( function(u) { return u.name; } ).map((name, i) =>
                    <li key={i}><a href="#" onClick={this.props.handleLoadDesign.bind(null, name) } data-dismiss="modal">{name}</a></li>)}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div id="saveModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content modalStyle">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Save Rocket</h4>
                </div>
                <div className="modal-body">
                  <input type="text" value={this.state.saveFormValue} onChange={this.handleSaveFormChange} />
                  <h4 className="modal-title">{this.props.saveMessageValue}</h4>
                </div>
                <div className="modal-footer">
                  {this.handleSave()}
                  <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        
          <div id="overwriteModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content modalStyle">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Overwrite save?</h4>
                  <div className="modal-footer">
                    <button type="button" className="btn buttonStyle" onClick={this.props.handleSaveDesign.bind(null, this.state.saveFormValue)} data-dismiss="modal">Overwrite</button>
                    <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div id="clearModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content modalStyle">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Are you sure?</h4>
                  <div className="modal-footer">
                    <button type="button" className="btn buttonStyle" onClick={this.props.handleResetState} data-dismiss="modal">Clear</button>
                    <button type="button" className="btn buttonStyle" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="col-xs-2 fixed">
          </div>
        </div>
		);
	}
});