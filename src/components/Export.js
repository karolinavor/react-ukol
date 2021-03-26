import React, { Component } from 'react';
import { CSVLink } from "react-csv";

class Export extends Component {
    prepareData(data) {
        let lineArray = [];
        data.forEach((row) => {
            let line = [row[0],row[1] + row[2]]
            line = line.join(";");
            lineArray.push(line);
        })
        return lineArray.join("\n");
    }

    render() {
        return (
            <div className="wrapper p-4 m-1">
                <h2 className="mb-3">Export Your File</h2>
                <CSVLink
					data={this.prepareData(this.props.data)}
					separator={";"}
                    filename={"data.csv"}
                    className="btn btn-primary"
				>Export</CSVLink>
            </div>
        );
    }
}

export default Export;