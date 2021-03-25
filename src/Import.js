import React, { Component } from 'react';
import Button from './Button';
import axios from 'axios';

class Import extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }
    
    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    onClickHandler = () => {
        if (this.state.selectedFile) {
            const data = new FormData()
            data.append('file', this.state.selectedFile)
            axios.post('http://localhost:8000/upload', data).then(res => {
                console.log(res.statusText)
            })
        } else {
            console.log('No file selected.')
        }
    }

    render() {
        return (
            <div className="wrapper p-4 m-1">
                <h2 className="mb-3">Import Your File</h2>
                <form method="POST" action="/">
                    <div className="input-group mb-3">
                        <input
                            type="file"
                            accept=".csv"
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <Button name="Import" onClick={this.onClickHandler} />
                </form>
            </div>
        );
    }
}

export default Import;