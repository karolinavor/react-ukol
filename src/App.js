import React, { Component } from 'react';
import Import from './Import';
import Export from './Export';
//import DataTable from './DataTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			file: 'data.csv',
		}
	}

	handleFileImport = (file) => {
		this.setState(
			{ file: file });
    }

	render() {
		return (
			<div className="App">
				<h1>React Application</h1>
				{/*<DataTable data={this.state.data} />*/}
				<Import />
				<Export />
			</div>
		)
	}
}

export default App;
