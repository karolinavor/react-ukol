import React, { Component } from 'react';
import { CSVLink } from "react-csv";

class Export extends Component {
    render() {
        return (
            <div className="wrapper p-4 m-1">
                <h2 className="mb-3">Export Your File</h2>
                <CSVLink
					data={this.props.data}
					separator={";"}
                    filename={"data.csv"}
                    className="btn btn-primary"
				>Export</CSVLink>
            </div>
        );
    }
}

export default Export;