import React from 'react';
import FileUpload from './FileUpload';
import ExportButton from './ExportButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className="App">
			<h1 className="mb-5">React Application</h1>
		<FileUpload />
		<ExportButton />
		</div>
	);
}

export default App;
