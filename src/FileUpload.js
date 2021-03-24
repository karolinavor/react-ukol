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
        if(this.checkType(event)) { 
            this.setState({
                selectedFile: event.target.files[0]
            })
        }
    }

    checkType = (event) => {
        let file = event.target.files[0];
        let err = '';
        const type = 'text/csv';
        if (file.type !== type) {
            err = file.type+' is not a supported format\n';
        }

        if (err !== '') {
            event.target.value = null;
            console.log(err);
            return false; 
        }
        return true;
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