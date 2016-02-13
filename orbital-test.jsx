Table = React.createClass({

	render(){
		return(
			<table id={this.props.tableId}>
				<thead>
				<tr>
					{this.props.headingData.map((heading, i) => <TableHeading key={i} data={heading}/>)}
				</tr>		
				</thead>
				<tbody>	
					{this.props.rowData.map((row, i) => <tr key={i}>{row.map((element, j) => <TableRow key={j} data={element}/>)}</tr>)}					
				</tbody>
			</table>
			)
	}
});

TableHeading = React.createClass({

	render(){
		return <th>{this.props.data}</th>
	}

});

TableRow = React.createClass({

	render(){
		return <td>{this.props.data}</td>
	}
})