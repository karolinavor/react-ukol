import React, { Component } from 'react';
import BodyRow from './BodyRow';
import HeadRow from './HeadRow';

class Table extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
    }

	handleChange(rowName, value, type) {
		if (value === null) {
			return;
		} 
		let selectedData = this.props.selectedData;
		if (selectedData && selectedData.length > 0) {
			if (!selectedData.find(row =>row[0] === rowName)) {
				if (type === "other") {
					selectedData.push([rowName, null, value]);
				} else {
					selectedData.push([rowName, value, null]);
				}
			} else {
				selectedData = selectedData.filter(row => {
					if (row[0] === rowName) {
						if (type === "other") {
							row[2] = value;
						} else if (type === "plus") {
							row[1] += value;
						} else if (type === "minus") {
							row[1] -= value;
							if (row[1] === 0 || row[1] === null) row[1] = null;
						}
					}
					if (!(row[1] === null && row[2] === null)) {
						return row;
					} else {
						return false;
					}
					
				});
			}
		} else {
			if (type === "other") {
				selectedData.push([rowName, null, value]);
			} else {
				selectedData.push([rowName, value, null]);
			}		
		}
		let totalTime = selectedData.map(row => {
			return row[1]+row[2]; 
		})
		totalTime = totalTime.reduce((totalValue, currentValue) => totalValue + currentValue, 0);
		this.props.onDataChange(selectedData, totalTime);
	}

	parseCSV(data) {
		const rows = data.split('\n');
		if (!rows || rows.length === 0) {
			return [];
		}
		return rows.map(row => row.split(";"));
	}

	renderTableHeader(data) {
		let parsedData = this.parseCSV(data);
		parsedData = parsedData[0];
		if (parsedData && parsedData.map) {
			return (
				<thead>
					<HeadRow row={parsedData} />
				</thead>
			);
		}
	}

	renderTableBody(data) {
		let parsedData = this.parseCSV(data);
		parsedData.shift();
		if (parsedData && parsedData.map) {
		return (
			<tbody>
				{parsedData.map((row) => (
					<BodyRow row={row} onChange={this.handleChange} />
				))}
			</tbody>
		);
		}
	}

	renderResults(data) {
		if (data && data.map && data.length > 0) {
			return (
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>Task</th>
							<th>Time</th>
						</tr>
					</thead>
					<tbody>
						{data.map((row) => (
							<tr>
								<td>{row[0]}</td>
								<td>{row[1]+row[2]}</td>
							</tr>
						))}
						<tr>
							<td>Total Time</td>
							<td>{this.props.totalTime}</td>
						</tr>
					</tbody>
				</table>
			);
		}
	}	

	render() {
		return (
			<div className="p-4 m-1">
				<table className="table table-striped table-hover">
					{this.renderTableHeader(this.props.data)}
					{this.renderTableBody(this.props.data)}
				</table>
				{this.renderResults(this.props.selectedData)}
			</div>
		);
	}
}

export default Table;
