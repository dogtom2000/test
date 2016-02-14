

Buttons = React.createClass({

	render(){
		return(
			<div className={this.props.divclass}>
				{this.props.subtext.map((text, i) => <button key={i} type="button" className={this.props.subclass} id={this.props.subid[i]}>{text}</button>)}
			</div>
			)
	}
});

Dropdown = React.createClass({

	render(){
		return(
			<div className="dropdown">
				<button className={this.props.subclass} type="button" data-toggle="dropdown">{this.props.maintext}<span className="caret"></span></button>
				<ul className="dropdown-menu">
					{this.props.subtext.map((text, i) => <li key={i} id={this.props.subid[i]}><a>{text}</a></li>)}
				</ul>
			</div>
			)
	}
});

						