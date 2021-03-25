import React, { Component } from 'react';
import Button from './Button';
import download from 'downloadjs';
import axios from 'axios';

class Export extends Component {
    onClickHandler = async () => {
        const res = await axios.get('http://localhost:8000/download');
        const blob = new Blob([res.data], { type: 'text/csv' });
        download(blob, 'data.csv');
    }

    render() {
        return (
            <div className="wrapper p-4 m-1">
                <h2 className="mb-3">Export Your File</h2>
                <Button name="Export" onClick={this.onClickHandler} />
            </div>
        );
    }
}

export default Export;