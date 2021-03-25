import React, { Component } from 'react';

const parseCSV = (data) => {
	const rows = data.split('\n');
  	if (!rows || rows.length === 0) {
		return [];
	}
  	return rows.map(row => row.split(";"));
}

const renderTableHeader = (data) => {
	let parsedData = parseCSV(data);
	parsedData = parsedData[0];
	if (parsedData && parsedData.map) {
      return (
        <thead>
          <tr>
            {
              parsedData.map((column, colId) => (
                <th key={1+colId}>
                  {column}
                </th>
              ))
            }
			<th key={0+parsedData.length}>Jine</th>
          </tr>
        </thead>
      );
    }
}

const renderTableBody = (data) => {
	let parsedData = parseCSV(data);
	parsedData.shift();
	if (parsedData && parsedData.map) {
	  return (
		<tbody>
			{
				parsedData.map((row, rowId) => (
					<tr>
						{
						row.map && row.map((column, colId) => (
							<td key={rowId+colId}>
								{column}{colId !== 0 ?<input type="checkbox"/> : ''}
							</td>
						))
						}
						<td key={rowId+parsedData.length}><input type="number" maxLength="3" /></td>
					</tr>
				))
			}
		</tbody>
	  );
	}
} 

class DataTable extends Component {
	constructor(props) {
        super(props);
		this.onChangeHandler = this.onChangeHandler.bind(this);
    }

	onChangeHandler() {
		// TODO vymyslet jak ziskat selektovana data
		this.props.onDataChange('Selected data');
	}

	render() {
		return (
			<div className="p-4 m-1" onChange={this.onChangeHandler}>
				<table className="table table-striped table-hover">
					{renderTableHeader(this.props.data)}
					{renderTableBody(this.props.data)}
				</table>
			</div>
		);
	}
}

export default DataTable;
