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
              parsedData.map((column) => (
                <th>
                  {column}
                </th>
              ))
            }
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
				parsedData.map((row) => (
					<tr>
						{
						row.map && row.map((column, colId) => (
							<td>
								{column}
							</td>
						))
						}
					</tr>
				))
			}
		</tbody>
	  );
	}
} 

class DataTable extends Component {
	render() {
		return (
			<div className="p-4 m-1">
				<table className="table table-striped table-hover">
					{renderTableHeader(this.props.data)}
					{renderTableBody(this.props.data)}
				</table>
			</div>
		);
	}
}

export default DataTable;
