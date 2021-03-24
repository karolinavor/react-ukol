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
            err = file.type+' is not a supported format.';
        }

        if (err !== '') {
            event.target.value = null;
            console.log(err);
            return false; 
        }
        return true;
    }

    onClickHandler = () => {
        if (this.state.selectedFile) {
            console.log('Uploading...');
            const data = new FormData()
            data.append('file', this.state.selectedFile)
            axios.post("http://localhost:8000/upload", data, { 
            }).then(res => {
                console.log(res.statusText)
            })
        } else {
            console.log('No file selected.')
        }
    }

    render() {
        return (
            <form method="POST" action="/">
                <h2 className="mb-3">Upload Your File </h2>
                <div className="input-group mb-3">
                    <input type="file" className="input-sm" id="input" onChange={this.onChangeHandler}/>
                </div>
                <button type="button" onClick={this.onClickHandler} className="btn btn-primary">Upload</button>
            </form>
        );
    }
}

export default FileUpload;