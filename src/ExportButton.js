import React, { Component } from 'react';
import axios from 'axios';

class ExportButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onClickHandler = () => {
        console.log('Exporting...');
        axios.post("http://localhost:8000/download", {}, { 
            }).then(res => {
                console.log(res.statusText)
            })
    }

    render() {
        return (
            <button type="button" className="btn btn-primary mt-5" onClick={this.onClickHandler}>Export</button>
        );
    }
}

export default ExportButton;