import React, { Component } from 'react';
import Import from './Import';
import Export from './Export';
import Table from './Table/Table';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

class App extends Component {
	constructor(props) {
        super(props);
        this.state = {
			file: false,
			data: null,
			selectedData: []
		}
		this.handleDataChange = this.handleDataChange.bind(this);
	}

	async componentDidMount() {
		await axios.get('http://localhost:8000/export')
		.then(res => {
			if (res.data) {
				this.setState({
					file: true,
					data: res.data,
				})
			}
		}).catch(err => {
			console.log(err)
		})
	}
	
	handleDataChange(selectedData) {
		if (selectedData) {
			this.setState({
				selectedData: selectedData
			})
		} else {
			this.setState({
				selectedData: []
			})
		}
	}
	
	render() {
		return (
			<div className="App">
				<h1>React Application</h1>
				{this.state.file ? <Table data={this.state.data} selectedData={this.state.selectedData} onDataChange={this.handleDataChange}/> : null}
				{this.state.file ? <Export data={this.state.selectedData ? this.state.selectedData : this.state.data} /> : null }
				<Import />
			</div>
		)
	}
}

export default App;
