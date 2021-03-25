import React, { Component } from 'react';
import Import from './Import';
import Export from './Export';
import DataTable from './DataTable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

class App extends Component {
	constructor(props) {
        super(props);
        this.state = {
			file: false,
			data: null,
			selectedData: null
		}
		this.handleDataChange = this.handleDataChange.bind(this);
	}

	async componentDidMount() {
        try {
            const res = await axios.get('http://localhost:8000/export');
            if (res.data) {
				this.setState({
					file: true,
					data: res.data,
                })
            }
        } catch (err) {
            console.log(err);
        }
	}
	
	handleDataChange(selectedData) {
		if (selectedData) {
			this.setState({
				selectedData: selectedData
			})
		}
	}
	
	render() {
		return (
			<div className="App">
				<h1>React Application</h1>
				{this.state.file ? <DataTable data={this.state.data} onDataChange={this.handleDataChange}/> : null}
				{this.state.file ? <Export data={this.state.selectedData ? this.state.selectedData : this.state.data} /> : null }
				<Import />
			</div>
		)
	}
}

export default App;
