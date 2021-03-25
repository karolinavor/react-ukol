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

    onClickHandler = async (event) => {
        if (this.state.selectedFile) {
            try {
                const data = new FormData()
                data.append('file', this.state.selectedFile)
                axios.post('http://localhost:8000/import', data);
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log('No file selected.')
        }
    }

    render() {
        return (
            <div className="wrapper p-4 m-1">
                <h2 className="mb-3">Import Your File</h2>
                <form>
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