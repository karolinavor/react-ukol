import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }
    
    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data, { 
        }).then(res => {
            console.log(res.statusText)
        })
    }

    render() {
        return (
            <form method="POST" action="">
                <div className="form-group">
                    <label>Upload Your File </label>
                    <input type="file" className="form-control" onChange={this.onChangeHandler} />
                </div>
                <button type="button" onClick={this.onClickHandler} >Upload</button>
            </form>
        );
    }
}

export default FileUpload;